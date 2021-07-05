const { Router } = require('express')

const routes = Router()

routes.get('/', (request, response) => response.render('index'))

routes.get('/room', (requrequest, response) => response.render('room'))

routes.get('/create-pass', (request, response) =>
  response.render('create-pass')
)

// Forta que o formulário passará as informações
// routes.post('/room/:room/:question/:action')

module.exports = { routes }
