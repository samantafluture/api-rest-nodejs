# API Rest com Node.js

## Express

- importar o express usando require
- criar o app para escutar na porta 3000
- servidor no ar rodando na porta 3000
- express tem duas coisas que devolve para nós:
    - req (requisição)
    - res (resposta), estamos devolvendo, o que queremos na tela por exemplo

## Rotas

- exemplo de rota: "/atendimentos"
- local na url 
- rotas de alteração:
    - PUT usa quando o objeto inteiro será alterado
    - PATCH usa quando altera apenas um campo

## Nodemon

- toda vez que tem uma mudança, precisa parar e subir de novo o servidor
- para isso usamos esta biblioteca

## Consign

- agrupar as rotas que for criando (em outros módulos) e colocar tudo dentro ao app

## Body-parser

- lib para ajudar a ler o corpo da requisição feita

## Organização de pastas

- controllers
    - gerenciar / controlar rotas
- config
    - pasta referente às configurações do app
- infra
    - envolve infra como banco de dados
    - conecta com banco de dados
- models
    - validações
    - regras de negócio
    - lógicas

