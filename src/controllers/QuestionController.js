const { compare } = require('bcrypt')
const Database = require('../database/config')

module.exports = {
  async index(request, response) {
    const db = await Database()

    const { room: roomId, question: questionId, action } = request.params
    const { password } = request.body // Vem pelo name="password" da tag input

    const verifyRoom = await db.get(`SELECT * FROM rooms WHERE id = ${roomId}`)
    // db.get traz apenas um único elemento do banco

    if (await compare(password, verifyRoom.password)) {
      if (action === 'delete') {
        await db.run(`DELETE FROM questions WHERE id = ${questionId}`)
      } else if (action === 'check') {
        await db.run(`UPDATE questions SET read = 1 WHERE id = ${questionId}`)
      }
      response.redirect(`/room/${roomId}`)
    } else {
      response.render('pass-incorrect', { roomId })
    }
  },

  async create(request, response) {
    // Pegamos os dados do formulário com base no atributo "name" dele no front-end
    // ex.: <textarea name="question">
    // teremos então request.body.question. Aqui armazenará os dados enviados dentro do text-area

    const { question } = request.body
    const { room } = request.params

    const db = await Database()

    // Como o campo é "text", precisamos colocar o valor do text entre ASPAS
    await db.run(
      `INSERT INTO questions (title, room) VALUES ("${question}", ${room})`
    )

    // await db.close()

    response.redirect(`/room/${room}`)
  }
}
