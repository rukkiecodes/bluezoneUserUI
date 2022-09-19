const email = localStorage.email
const token = localStorage.token;


(async () => {
  const name = document.querySelector('#usersname')
  const fiatvalue = document.querySelector('#fiatvalue');
  const balvalues = document.querySelector('.balvalues');

  try {
    const user = await axios({
      method: 'post',
      url: 'https://trustpaddi-waitlist.herokuapp.com/auth/profile',
      headers: { 'Authorization': `Bearer ${token}` },
      data: { email }
    })

    name.innerText = user.data.user.name;
    fiatvalue.value = user.data.user.investment.toFixed(3);
    balvalues.value = user.data.user.earnings.toFixed(3);
  } catch (error) {
    console.log("Error sending get profile requst: ", error.message)
  }
})()