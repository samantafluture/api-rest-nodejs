// Controla a rota de atendimentos

// Importa model atendimento
const Atendimento = require("../models/atendimentos");

module.exports = (app) => {
  // GET: recebe dados
  app.get("/atendimentos", (req, res) =>
    res.send("Você está na rota de atendimentos e está realizando um GET")
  );

  // POST: envia dados
  app.post("/atendimentos", (req, res) => {

    // O conteúdo do body é um atendimento
    const atendimento = req.body;

    // O atendimento vai adicionar um atendimento rs
    Atendimento.adiciona(atendimento);
    res.send("Post atendimento");
  });
};
