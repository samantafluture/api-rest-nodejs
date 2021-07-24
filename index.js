// Coloca o servidor no ar

// Importa o Express configurado
const customExpress = require("./config/customExpress");
// Importa a conexão com banco de dados
const conexao = require("./infra/conexao");
// Importa classe Tabelas
const Tabelas = require("./infra/tabelas");

// Conecta com bando de dados
conexao.connect((erro) => {
  if (erro) {
    console.log(erro);
  } else {
    console.log("Conectado com sucesso");

    // Inicia a tabela com a conexão usada
    Tabelas.init(conexao);

    // Inicializa o servidor depois que o DB está conectado
    const app = customExpress();
    app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
  }
});
