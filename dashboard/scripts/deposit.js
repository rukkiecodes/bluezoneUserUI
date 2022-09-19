const submitDepositButton = document.querySelector('#validate');
const pop = document.querySelector('#fileuploadInput');

const currency = document.querySelector('#currency-select');
const amount = document.querySelector('#toAmount');
const bitcoin_wallet_address = document.querySelector('.bitcoin_wallet_address').innerText.replace(/\s+/g, '')
const eth_wallet_address = document.querySelector('.eth_wallet_address').innerText.replace(/\s+/g, '')
const usdt_wallet_address = document.querySelector('.usdt_wallet_address').innerText.replace(/\s+/g, '')
const bnb_wallet_address = document.querySelector('.bnb_wallet_address').innerText.replace(/\s+/g, '')

let file
let _currency = currency.value

currency.addEventListener('click', e => {
  _currency = e.target.value
})

pop.addEventListener('change', (e) => {
  file = e.target.files[0]
})

let formData = new FormData()
let myHeaders = new Headers()

submitDepositButton.addEventListener('click', function () {
  const { token, user, name } = localStorage;

  myHeaders.append("Accept", "multipart/form-data")
  myHeaders.append('Authorization', `Bearer ${token}`)

  formData.append("pop", file)
  formData.append("_id", user)
  formData.append("currency", _currency)
  formData.append("amount", amount.value)
  formData.append("name", name)
  formData.append("wallet", _currency == 'Bitcoin' ? bitcoin_wallet_address : _currency == 'Ethereum' ? eth_wallet_address : _currency == 'USDT' ? usdt_wallet_address : _currency == 'BNB smart chain' ? bnb_wallet_address : null)

  let requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formData,
  }

  fetch("https://trustpaddi-waitlist.herokuapp.com/deposit/add", requestOptions)
    .then(response => response.json())
    .then(response => {
      notification('notification-6', 3000)
    }).catch(error => {
      console.log('error: ', error)
    });
})