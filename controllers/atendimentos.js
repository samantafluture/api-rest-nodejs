// Controla a rota de atendimentos

module.exports = (app) => {
  // GET: recebe dados
  app.get("/atendimentos", (req, res) =>
    res.send("Você está na rota de atendimentos e está realizando um GET")
  );

  // POST: envia dados
  app.post("/atendimentos", (req, res) => {
    console.log(req.body);
    res.send("Você está na rota de atendimento e está realizando um POST");
  });
};
