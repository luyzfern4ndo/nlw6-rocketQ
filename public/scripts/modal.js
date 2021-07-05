function Modal() {
  const modalWrapper = document.querySelector('.modal-wrapper')
  const cancelButton = document.querySelector('.button.cancel')

  cancelButton.addEventListener('click', close)

  function open() {
    // Funcionalidade de atribuitr a classe "active" para a modal
    modalWrapper.classList.add('active')
  }
  function close() {
    modalWrapper.classList.remove('active')
  }

  return {
    open,
    close
  }
}

export { Modal }
