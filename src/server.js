const express = require('express')
const path = require('path')

const { routes } = require('./routes')

const server = express()

server.set('view engine', 'ejs') // Padrão do próprio Ejs

server.use(express.static('public'))

server.set('views', path.join(__dirname, 'views')) // Informando ao EJS o caminho dos itens HTML

server.use(express.urlencoded({ extended: true })) // Decodificar o body passado no form

server.use(routes)

server.listen(3000, () => console.log('Server is running'))
