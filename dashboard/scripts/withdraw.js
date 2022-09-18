const amount = document.querySelector('#toAmount');
const currency = document.querySelector('#currency-select');
const wallet = document.querySelector('.wallet_address');
const validate = document.querySelector('#validate');

validate.addEventListener('click', async () => {
  const { user, token, name } = localStorage;
  await axios({
    method: 'post',
    url: "https://trustpaddi-waitlist.herokuapp.com/withdraw/withdraw",
    headers: { 'Authorization': `Bearer ${token}` },
    data: {
      _id: user,
      amount: amount.value,
      currency: currency.value,
      wallet: wallet.value,
      name
    }
  })
  notification('notification-6', 3000)
})