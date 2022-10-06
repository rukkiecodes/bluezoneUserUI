const user = localStorage.user;
const token = localStorage.token;
const sendSupport = document.querySelector('#sendSupport');
const email4b = document.querySelector('#email4b')
const subjectInput = document.querySelector('.subjectInput')
const messageInput = document.querySelector('.messageInput')

sendSupport.addEventListener('click', async e => {
  e.preventDefault()

  if (email4b.value == '' && subjectInput.value == '' && messageInput.value == '') return

  sendSupport.innerText = 'Sending...'

  await axios({
    method: 'post',
    url: 'https://trustpaddi-waitlist.herokuapp.com/support/support',
    data: {
      user,
      email: email4b.value,
      subject: subjectInput.value,
      message: messageInput.value
    }
  })

  sendSupport.innerText = 'Sent'

  notification('notification-6', 3000)

  setTimeout(() => {
    sendSupport.innerText = 'Send'
  }, 1000)
})