from flask import Flask, request, jsonify

app = Flask(__name__)

autores = []
categorias = []

# Endpoints para o recurso Autor
@app.route('/autor', methods=['GET', 'POST'])
def autor():
    if request.method == 'GET':
        if request.headers.get('accept') == 'application/json':
            return jsonify(autores)
        else:
            return "<h1>Lista de Autores</h1>" + "<br>".join(autores)
    elif request.method == 'POST':
        data = request.json
        autores.append(data)
        return jsonify(data), 201

@app.route('/autor/<int:id>', methods=['PUT', 'DELETE'])
def autor_id(id):
    if request.method == 'PUT':
        data = request.json
        autores[id] = data
        return jsonify(data)
    elif request.method == 'DELETE':
        del autores[id]
        return '', 204

# Endpoints para o recurso Categoria
@app.route('/categoria', methods=['GET', 'POST'])
def categoria():
    if request.method == 'GET':
        if request.headers.get('accept') == 'application/json':
            return jsonify(categorias)
        else:
            return "<h1>Lista de Categorias</h1>" + "<br>".join(categorias)
    elif request.method == 'POST':
        data = request.json
        categorias.append(data)
        return jsonify(data), 201

@app.route('/categoria/<int:id>', methods=['PUT', 'DELETE'])
def categoria_id(id):
    if request.method == 'PUT':
        data = request.json
        categorias[id] = data
        return jsonify(data)
    elif request.method == 'DELETE':
        del categorias[id]
        return '', 204

if __name__ == '__main__':
    app.run(debug=True)
