// Coloca o servidor no ar

// Importa o Express configurado
const customExpress = require("./config/customExpress");

// Declara e executa
const app = customExpress()

// Servidor na porta 3000
app.listen(3000, () => console.log("Servidor rodando na porta 3000"));

