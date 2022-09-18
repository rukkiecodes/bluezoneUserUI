const email = localStorage.email
const token = localStorage.token;


(async () => {
  const name = document.querySelector('#usersname')

  try {
    const user = await axios({
      method: 'post',
      url: 'https://trustpaddi-waitlist.herokuapp.com/auth/profile',
      headers: { 'Authorization': `Bearer ${token}` },
      data: { email }
    })

    name.innerText = user.data.user.name
  } catch (error) {
    console.log("Error sending get profile requst: ", error.message)
  }
})()