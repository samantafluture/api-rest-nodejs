// Controla a rota de atendimentos

// Importa model atendimento
const atendimentos = require("../models/atendimentos");
const Atendimento = require("../models/atendimentos");

module.exports = (app) => {
  // GET: recebe todos os dados
  app.get("/atendimentos", (req, res) => {
    Atendimento.lista(res);
  });

  // GET: recebe dados e filtra por ID
  app.get("/atendimentos/:id", (req, res) => {
    // Params = nome do parâmetro (aqui é "id")
    // Converte de string para int
    const id = parseInt(req.params.id);

    Atendimento.buscaPorId(id, res);
  });

  // POST: envia dados
  app.post("/atendimentos", (req, res) => {
    // O conteúdo do body é um atendimento
    const atendimento = req.body;

    // O atendimento vai adicionar um atendimento rs
    // "res" passa a resposta em diante
    Atendimento.adiciona(atendimento, res);
  });

  // PATCH: altera dados
  app.patch("/atendimentos/:id", (req, res) => {
    // Params = nome do parâmetro (aqui é "id")
    // Converte de string para int
    const id = parseInt(req.params.id);
    // Valores estão no corpo da requisição
    const valores = req.body;

    Atendimento.altera(id, valores, res);
  });

  // DELETE: deleta dados
  app.delete("/atendimentos/:id", (req, res) => {
    // Params = nome do parâmetro (aqui é "id")
    // Converte de string para int
    const id = parseInt(req.params.id);

    Atendimento.deleta(id, res);
  });
};
