// Classe recebe uma conexão
class Tabelas {
  init(conexao) {
    // Trazer a conexão para o escopo desta classe
    this.conexao = conexao;

    // Executar o método de criar a tabela
    this.criarAtendimentos();
  }

  // Método para criar atendimentos
  criarAtendimentos() {
    // SQL de criação da tabela com chaves
    const sql =
      "CREATE TABLE IF NOT EXISTS Atendimentos (id int NOT NULL AUTO_INCREMENT, cliente varchar(50) NOT NULL, pet varchar(20), servico varchar(20) NOT NULL, status varchar(20) NOT NULL, observacoes text, PRIMARY KEY(id))";

    // Passa o SQL para a conexão
    this.conexao.query(sql, (erro) => {
      if (erro) {
        console.log(erro);
      } else {
        console.log("Tabela Atendimentos criada com sucesso");
      }
    });
  }
}
// Exporta a classe já instanciada para usar em outros locais
module.exports = new Tabelas();
