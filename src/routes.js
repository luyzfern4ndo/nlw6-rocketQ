const { Router } = require('express')
const QuestionController = require('./controllers/QuestionController')
const RoomController = require('./controllers/RoomController')

const routes = Router()

routes.get('/', (request, response) =>
  response.render('index', { page: 'enter-room' })
)

routes.get('/room/:room', (request, response) => response.render('room'))

routes.get('/create-pass', (request, response) =>
  response.render('index', { page: 'create-pass' })
)

// Forta que o formulário passará as informações
// routes.post('/room/:room/:question/:action')
routes.post('/question/:room/:question/:action', QuestionController.index)
routes.post('/create-room', RoomController.create)

module.exports = { routes }
