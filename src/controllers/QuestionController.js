module.exports = {
  index(request, response) {
    const { room, question, action } = request.params
    const { password } = request.body // Vem pelo name="password" da tag input

    console.log(
      `room: ${room}, question: ${question}, action: ${action}, password: ${password}`
    )
  }
}
