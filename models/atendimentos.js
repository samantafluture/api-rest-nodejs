// Modelo de atendimento

// Import lib Moment
const moment = require("moment");
// Importa a conexão
const conexao = require("../infra/conexao");

class Atendimento {
  // Método para POST
  adiciona(atendimento, res) {
    // Data de criação será manipulada pela lib Moment
    const dataCriacao = moment().format("YYYY-MM-DD HH:MM:SS");
    // Formato da data marcada que estamos passando e em qual deverá formatar
    const data = moment(atendimento.data, "DD/MM/YYYY").format(
      "YYYY-MM-DD HH:mm:ss"
    );

    // Validação da data (data deve ser igual ou depois da dataCriacao)
    const dateIsValid = moment(data).isSameOrAfter(dataCriacao);
    // Validação do cliente (nome deve ter pelo menos 5 caracteres)
    const clientIsValid = atendimento.cliente.length >= 5;
    // Array de validações com nome do campo, validação e mensagem de erro
    const validacoes = [
      {
        nome: "data",
        valido: dateIsValid,
        mensagem: "Data deve ser maior ou igual a data atual",
      },
      {
        nome: "cliente",
        valido: clientIsValid,
        mensagem: "Cliente deve ter pelo menos 5 caracteres",
      },
    ];

    // Se este campo não for válido, salvo este campo nos erros
    const erros = validacoes.filter((campo) => !campo.valido);
    const existemErros = erros.length;

    if (existemErros) {
      // Se tiver erros, chama o objeto de erros
      res.status(400).json(erros);
    } else {
      // Adiciona no objeto todas as infos do atendimento mais as datas
      const atendimentoDatado = { ...atendimento, dataCriacao, data };
      // Cria a query sql para inserir dados na tabela
      const sql = "INSERT INTO Atendimentos SET ?";

      // Passar para a conexão 3 parâmetros: query, objeto, função
      conexao.query(sql, atendimentoDatado, (erro, resultados) => {
        if (erro) {
          // envia resposta no formato "json"
          // 400 - Status http de erro "bad request"
          res.status(400).json(erro);
        } else {
          // 200 - Status http de sucesso "created"
          // envia de volta o atendimento cadastrado com sucesso
          res.status(201).json(atendimento); 
        }
      });
    }
  }

  // Método para GET
  lista(res) {
    // Query sql para pegar os dados da tabela Atendimentos
    const sql = "SELECT * FROM Atendimentos";

    // Envia a query e recebe erros e resultados
    conexao.query(sql, (erro, resultados) => {
      if (erro) {
        res.status(400).json();
      } else {
        res.status(200).json(resultados);
      }
    });
  }

  // Método para GET por parâmetro (filtrado)
  buscaPorId(id, res) {
    // Filtrar pelo id que estamos recebendo
    const sql = `SELECT * FROM Atendimentos WHERE id=${id}`;

    // Envia a query e recebe erros e resultados
    conexao.query(sql, (erro, resultados) => {
      // Pego o primeiro item do array e chamo de atendimento
      const atendimento = resultados[0];

      if (erro) {
        res.status(400).json(erro);
      } else {
        res.status(200).json(atendimento); // devolvo um único objeto só (via id)
      }
    });
  }

  // Método para PATCH
  // Id do atendimento; valores que devem ser alterados
  altera(id, valores, res) {
    if (valores.data) {
      valores.data = moment(valores.data, "DD/MM/YYYY").format(
        "YYYY-MM-DD HH:mm:ss"
      );
    }

    // Query para atualizar o Atendimento quando o id for igual tal id
    const sql = "UPDATE Atendimentos SET ? WHERE id=?";

    // Dentro do Array para cada ?  -> são os valores e id
    conexao.query(sql, [valores, id], (erro, resultados) => {
      if (erro) {
        res.status(400).json(erro);
      } else {
        // Envia de volta valores alterados e o id
        res.status(200).json({...valores, id}); 
      }
    });
  }

  // Método para DELETE
  deleta(id, res) {
    // Query para deletar um atendimento a partir de um dado id
    const sql = "DELETE FROM Atendimentos WHERE id=?";

    conexao.query(sql, id, (erro, resultados) => {
      if (erro) {
        res.status(400).json(erro);
      } else {
        // Envia de volta o id deletado
        res.status(200).json({id});
      }
    });
  }
}

module.exports = new Atendimento();
