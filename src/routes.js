const { Router } = require('express')
const QuestionController = require('./controllers/QuestionController')
const RoomController = require('./controllers/RoomController')

const routes = Router()

routes.get('/', (request, response) =>
  response.render('index', { page: 'enter-room' })
)

routes.get('/create-pass', (request, response) =>
  response.render('index', { page: 'create-pass' })
)
routes.post('/create-room', RoomController.create)
routes.post('/enter-room', RoomController.enterRoom)
routes.get('/room/:room', RoomController.open)

// Forma que o formulário passará as informações
// routes.post('/room/:room/:question/:action')
routes.post('/question/:room/:question/:action', QuestionController.index)
routes.post('/question/create/:room', QuestionController.create)

module.exports = { routes }
