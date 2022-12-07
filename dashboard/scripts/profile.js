const _email = localStorage.email
const _token = localStorage.token;


(async () => {
  const name = document.querySelector('#usersname')
  const name2 = document.querySelector('#greetName')
  const fiatvalue = document.querySelector('#fiatvalue');
  const balvalues = document.querySelector('.balvalues');

  try {
    const user = await axios({
      method: 'post',
      url: 'https://web-production-09d2.up.railway.app/auth/profile',
      headers: { 'Authorization': `Bearer ${_token}` },
      data: { email: _email }
    })

    name.innerText = user.data.user.name;
    name2.innerText = user.data.user.name;
    fiatvalue.value = user.data.user.investment.toFixed(3);
    balvalues.value = user.data.user.earnings.toFixed(3);
  } catch (error) {
    console.log("Error sending get profile requst: ", error.message)
  }
})()