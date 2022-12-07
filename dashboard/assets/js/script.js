

$(document).ready(function() {
// $('#depo').click(function () {
    // 
    // $.ajax({
        // 
        // mode: 'cors',
        // type: 'POST',
        // url: 'https://web-production-09d2.up.railway.app/deposit/add',
        // contentType: 'application/json',
        // headers:{
            // Authorization: 'Bearer'  + localStorage.token
        // },
        // data: {
            // user:localStorage.user,
            // amount: "30000",
            // currency: "ethereuem",
            // description: "desciption"
        // },
        // success: function (data) {
            // console.log(data);
        // },
        // error: function () {
            // alert("Sorry, you are not logged in.");
        // }
    // });
// });

  $('#logout').click(function() {
    localStorage.clear();
  });
});