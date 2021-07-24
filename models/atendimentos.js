// Modelo de atendimento

// Importa a conexão
const conexao = require("../infra/conexao");

class Atendimento {
  adiciona(atendimento) {
    // Cria a query sql para inserir dados na tabela
    const sql = "INSERT INTO Atendimentos SET ?";

    // Passar para a conexão 3 parâmetros: query, objeto, função
    conexao.query(sql, atendimento, (erro, resultados) => {
      if (erro) {
        console.log(erro);
      } else {
        console.log(resultados);
      }
    });
  }
}

module.exports = new Atendimento;
