const { hash } = require('bcrypt')
const Database = require('../database/config')

module.exports = {
  async create(request, response) {
    const db = await Database()
    const password = request.body.password
    let roomId
    let isRoom = true

    while (isRoom) {
      for (let i = 0; i < 6; i++) {
        i == 0
          ? (roomId = Math.floor(Math.random() * 10).toString())
          : (roomId += Math.floor(Math.random() * 10).toString())
        // .toString() faz com que o += seja uma concatenação
      }

      // Verificando se já existe uma sala com o número gerado
      const roomsExists = await db.all(
        `SELECT id FROM rooms WHERE id = ${roomId}`
      )

      const passwordHash = await hash(password, 8)

      if (roomsExists.length === 0) {
        isRoom = false
        // Inserindo dados na tabela `rooms`
        await db.run(
          `INSERT INTO rooms (id, password) VALUES (${Number(
            roomId
          )}, '${passwordHash}')`
        )
      }
    }

    await db.close()

    response.redirect(`room/${roomId}`)
  },

  async open(request, response) {
    const db = await Database()

    const { room: roomId } = request.params
    let isNoQuestion

    const questions = await db.all(
      `SELECT * FROM questions WHERE room = ${roomId} and read = 0`
    )
    const questionsRead = await db.all(
      `SELECT * FROM questions WHERE room = ${roomId} and read = 1`
    )

    if (questions.length === 0) {
      if (questionsRead.length === 0) {
        isNoQuestion = true
      }
    }

    response.render('room', {
      roomId,
      questions,
      questionsRead,
      isNoQuestion
    })
  },

  async enterRoom(request, response) {
    const db = await Database()
    const { roomId } = request.body

    // const roomExists = await db.get(`SELECT id FROM rooms WHERE id = ${roomId}`)

    response.redirect(`/room/${roomId}`)
  }
}
