const email = localStorage.email
const token = localStorage.token;


(async () => {
  const name = document.querySelector('#usersname')
  const wallet_address = document.querySelector('#wallet_address')

  try {
    const user = await axios({
      method: 'post',
      url: 'https://trustpaddi-waitlist.herokuapp.com/auth/profile',
      headers: { 'Authorization': `Bearer ${token}` },
      data: { email }
    })

    name.innerText = `${user.data.user.firstName} ${user.data.user.lastName}`
    wallet_address.innerText = `${user.data.user._id}`
  } catch (error) {
    console.log("Error sending get profile requst: ", error.message)
  }
})()