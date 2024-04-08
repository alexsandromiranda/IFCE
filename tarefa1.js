const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/index', (req, res) => {
   
    const formHTML = `
        <h1>Formulário do Problema</h1>
        <form action="/nome-seu-problema" method="post">
            <label for="var1">Variável 1:</label>
            <input type="text" id="var1" name="var1" required><br>
            <label for="var2">Variável 2:</label>
            <input type="text" id="var2" name="var2" required><br>
            <!-- Adicione campos para outras variáveis conforme necessário -->
            <input type="submit" value="Calcular">
        </form>
    `;
    res.send(formHTML);
});


app.post('/nome-seu-problema', (req, res) => {
   
    const { var1, var2 } = req.body;

    
    const resultado = parseFloat(var1) + parseFloat(var2);

    
    const respostaHTML = `
        <h1>Resposta do Problema</h1>
        <p>Enunciado do problema: Descreva o enunciado aqui.</p>
        <p>Explicação da conta: Descreva a explicação da conta aqui.</p>
        <p>Resultado: ${resultado}</p>
    `;
    res.send(respostaHTML);
});


app.get('/autor', (req, res) => {
    const autorInfo = `
        <h1>Autor</h1>
        <p>Nome: Seu Nome</p>
        <p>Formações Acadêmicas:</p>
        <ul>
            <li>Curso: Nome do Curso, Instituição: Nome da Instituição, Ano: Ano de Conclusão</li>
            <!-- Adicione outras formações acadêmicas conforme necessário -->
        </ul>
        <p>Experiências Profissionais:</p>
        <ul>
            <li>Função: Função Exercida, Empresa: Nome da Empresa, Ano: Ano de Início - Ano de Término</li>
            <!-- Adicione outras experiências profissionais conforme necessário -->
        </ul>
    `;
    res.send(autorInfo);
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
