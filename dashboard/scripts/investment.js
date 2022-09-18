(async () => {
  const fiatvalue = document.querySelector('#fiatvalue');
  let { token, user } = localStorage;
  const investment = await axios({
    method: 'post',
    url: 'https://trustpaddi-waitlist.herokuapp.com/transaction/investment',
    headers: { 'Authorization': `Bearer ${token}` },
    data: { user }
  });

  fiatvalue.value = investment.data.investment;
})()