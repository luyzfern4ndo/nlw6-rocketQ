// eslint-disable-next-line import/extensions
import { Modal } from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalConfirmButton = document.querySelector('.modal .buttons button')
const questionForm = document.querySelector('#question-form form')
const questionTextArea = document.querySelector('textarea')

// Pegar todos os botões que existe com a classe check
const checkButtons = document.querySelectorAll('.actions a.check')

checkButtons.forEach(button => {
  // Adicionando eventListener
  button.addEventListener('click', handleClick)
})

const deleteButton = document.querySelectorAll('.actions a.delete')

deleteButton.forEach(button => {
  button.addEventListener('click', event => handleClick(event, false))
})

function handleClick(event, check = true) {
  event.preventDefault() // Remover # da rota, para deixar de se comportar como um link

  const slug = check ? 'check' : 'delete'

  const form = document.querySelector('.modal form')

  const roomId = document.querySelector('#room-id').dataset.id

  const questionId = event.target.dataset.id

  form.setAttribute('action', `/question/${roomId}/${questionId}/${slug}`)

  modalTitle.innerHTML = check ? 'Marcar como lida' : 'Excluir Pergunta'
  modalDescription.innerHTML = check
    ? 'Tem certeza que deseja marcar essa pergunta como lida?'
    : 'Tem certeza que deseja excluir essa pergunta?'
  modalConfirmButton.innerHTML = check
    ? 'Sim, marcar como lida'
    : 'Sim, excluir'
  check
    ? modalConfirmButton.classList.remove('red')
    : modalConfirmButton.classList.add('red')

  // Abrir modal
  modal.open()
}
