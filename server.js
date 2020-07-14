// Começar o servidor
// O nodemon faz com que o servidor reinicie automaticamente

const express = require('express')
const nunjucks = require('nunjucks')
const routes = require("./routes")

const server = express ()
// PEGANDO PAGINAS QUE ESTÃO NA RAIZ. TEM QUE USAR ./NOME

server.use(express.static("public"))
server.use(routes)
server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})




// iniciar o servidor

server.listen(5000, function(){
    console.log("tá valendo")
})