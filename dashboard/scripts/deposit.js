const submitDepositButton = document.querySelector('#validate');
const pop = document.querySelector('#fileuploadInput');

const currency = document.querySelector('#currency-select').value;
const amount = document.querySelector('#toAmount').value;
let file

pop.addEventListener('change', (e) => {
  file = e.target.files[0]
})

let formData = new FormData()
let myHeaders = new Headers()

submitDepositButton.addEventListener('click', function () {
  const { email, token, user, wallet, name } = localStorage;

  myHeaders.append("Accept", "multipart/form-data")
  myHeaders.append('Authorization', `Bearer ${token}`)

  formData.append("pop", file)
  formData.append("_id", user)
  formData.append("currency", currency)
  formData.append("amount", amount)
  formData.append("name", name)
  formData.append("wallet", wallet)

  let requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formData,
  }

  fetch("https://trustpaddi-waitlist.herokuapp.com/deposit/add", requestOptions)
    .then(response => response.json())
    .then(response => {
      console.log('response: ', response)
      notification('notification-6', 3000)
    })
    .catch(error => {
      console.log('error: ', error)
    })
})