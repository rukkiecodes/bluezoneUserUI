const bitcoin_wallet_address_copy = document.querySelector('.bitcoin_wallet_address_copy')
const eth_wallet_address_copy = document.querySelector('.eth_wallet_address_copy')
const usdt_wallet_address_copy = document.querySelector('.usdt_wallet_address_copy')
const bnb_wallet_address_copy = document.querySelector('.bnb_wallet_address_copy')

bitcoin_wallet_address_copy.addEventListener('click', () => {
  const bitcoin_wallet_address = document.querySelector('.bitcoin_wallet_address')
  navigator.clipboard.writeText(bitcoin_wallet_address.innerText)
})

eth_wallet_address_copy.addEventListener('click', () => {
  const eth_wallet_address = document.querySelector('.eth_wallet_address')
  navigator.clipboard.writeText(eth_wallet_address.innerText)
})

usdt_wallet_address_copy.addEventListener('click', () => {
  const usdt_wallet_address = document.querySelector('.usdt_wallet_address')
  navigator.clipboard.writeText(usdt_wallet_address.innerText)
})

bnb_wallet_address_copy.addEventListener('click', () => {
  const bnb_wallet_address = document.querySelector('.bnb_wallet_address')
  navigator.clipboard.writeText(bnb_wallet_address.innerText)
})