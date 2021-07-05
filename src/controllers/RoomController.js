const Database = require('../database/config')

module.exports = {
  async create(request, response) {
    const db = await Database()
    const password = request.body.password

    let roomId

    for (let i = 0; i < 6; i++) {
      i == 0
        ? (roomId = Math.floor(Math.random() * 10).toString())
        : (roomId += Math.floor(Math.random() * 10).toString())
      // .toString() faz com que o += seja uma concatenação
    }

    await db.run(
      `INSERT INTO rooms (id, password) VALUES (${Number(roomId)}, ${password})`
    )

    await db.close()

    response.redirect(`room/${roomId}`)
  }
}
