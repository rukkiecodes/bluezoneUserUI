(async () => {
    let getTransactions = document.querySelector('.trans');
    if (!getTransactions) return
    let { token, user } = localStorage;

    const transactions = await axios({
        method: 'post',
        url: 'https://trustpaddi-waitlist.herokuapp.com/transaction/getTransactions',
        headers: { 'Authorization': `Bearer ${token}` },
        data: { user }
    })

    if (transactions.data.transactions.length > 0) {
        let _transactions = transactions.data.transactions.slice(0, 5)
        _transactions.forEach(transaction => {
            getTransactions.innerHTML += `<li>
                                                <a href="#" class="item">
                                                    <div class="icon-box">
                                                        <img src="./assets/img/${transaction.currency == 'Bitcoin' ? 'bitcoin.png' : transaction.currency == 'BTC' ? 'bitcoin.png' : transaction.currency == 'Ethereum' ? 'ethereum.png' : transaction.currency == 'ETH' ? 'ethereum.png' : transaction.currency == 'USD' ? 'usd.png' : transaction.currency == 'ADA' ? 'ada.png' : 'money.png'}" width="30" height="30"/>
                                                    </div>
                                                    <div class="in">
                                                        <div>
                                                            <strong>${transaction.currency}</strong>
                                                            <div class="text-small text-secondary font-weight-bold ${transaction.status == 'PENDING' ? 'text-warning' : 'text-dark'}">${transaction.status}</div>
                                                        </div>
                                                        <div class="text-end">
                                                            <strong>$${transaction.amount}</strong>
                                                            <div class="text-small">${transaction.time}</div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>`
        })
    } else {
        getTransactions.innerHTML += ` <div class="section mt-2" style=" margin: 35%; position: relative; top:5vh; text-align: center;">

                                            <div class="">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" enable-background="new 0 0 32 32" viewBox="0 0 32 32">
                                                    <path fill="#263238" d="M21.5 14.75c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75S21.09 14.75 21.5 14.75zM10.5 14.75c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75S10.09 14.75 10.5 14.75z" />
                                                    <path fill="#455A64" d="M27.5sggg,31h-23C4.224,31,4,30.776,4,30.5v-29C4,1.224,4.224,1,4.5,1h17C21.776,1,22,1.224,22,1.5 S21.776,2,21.5,2H5v28h22V7.5C27,7.224,27.224,7,27.5,7S28,7.224,28,7.5v23C28,30.776,27.776,31,27.5,31z" />
                                                    <path fill="#455A64" d="M27.479 8H21.5C21.224 8 21 7.776 21 7.5V4c0-.276.224-.5.5-.5S22 3.724 22 4v3h4.274l-5.128-5.147c-.195-.195-.194-.512.001-.707.196-.195.513-.195.707.002l5.979 6c.143.143.185.357.108.544C27.863 7.878 27.681 8 27.479 8zM17.5 19c-.276 0-.5-.224-.5-.5 0-.552-.449-1-1-1s-1 .448-1 1c0 .276-.224.5-.5.5S14 18.776 14 18.5c0-1.103.897-2 2-2s2 .897 2 2C18 18.776 17.776 19 17.5 19zM21.5 16.75c-.689 0-1.25-.561-1.25-1.25s.561-1.25 1.25-1.25 1.25.561 1.25 1.25S22.189 16.75 21.5 16.75zM21.5 15.25c-.133 0-.25.117-.25.25s.117.25.25.25.25-.117.25-.25S21.633 15.25 21.5 15.25zM10.5 16.75c-.689 0-1.25-.561-1.25-1.25s.561-1.25 1.25-1.25 1.25.561 1.25 1.25S11.189 16.75 10.5 16.75zM10.5 15.25c-.133 0-.25.117-.25.25s.117.25.25.25.25-.117.25-.25S10.633 15.25 10.5 15.25z" />
                                                    <path fill="#263238" d="M27.5,31h-23C4.224,31,4,30.776,4,30.5v-29C4,1.224,4.224,1,4.5,1h17C21.776,1,22,1.224,22,1.5 S21.776,2,21.5,2H5v28h22V7.5C27,7.224,27.224,7,27.5,7S28,7.224,28,7.5v23C28,30.776,27.776,31,27.5,31z" />
                                                    <path fill="#263238" d="M27.479 8H21.5C21.224 8 21 7.776 21 7.5V4c0-.276.224-.5.5-.5S22 3.724 22 4v3h4.274l-5.128-5.147c-.195-.195-.194-.512.001-.707.196-.195.513-.195.707.002l5.979 6c.143.143.185.357.108.544C27.863 7.878 27.681 8 27.479 8zM17.5 19c-.276 0-.5-.224-.5-.5 0-.552-.449-1-1-1s-1 .448-1 1c0 .276-.224.5-.5.5S14 18.776 14 18.5c0-1.103.897-2 2-2s2 .897 2 2C18 18.776 17.776 19 17.5 19zM21.5 16.75c-.689 0-1.25-.561-1.25-1.25s.561-1.25 1.25-1.25 1.25.561 1.25 1.25S22.189 16.75 21.5 16.75zM21.5 15.25c-.133 0-.25.117-.25.25s.117.25.25.25.25-.117.25-.25S21.633 15.25 21.5 15.25zM10.5 16.75c-.689 0-1.25-.561-1.25-1.25s.561-1.25 1.25-1.25 1.25.561 1.25 1.25S11.189 16.75 10.5 16.75zM10.5 15.25c-.133 0-.25.117-.25.25s.117.25.25.25.25-.117.25-.25S10.633 15.25 10.5 15.25z" />
                                                </svg>
                                                <div class="" style="font-size: 0.8rem ;">No transactions yet</div>
                                            </div>
                                        </div> `
    }
})();

(async () => {
    let getTransactions = document.querySelector('.allTrans');
    if (!getTransactions) return
    let { token, user } = localStorage;

    const transactions = await axios({
        method: 'post',
        url: 'https://trustpaddi-waitlist.herokuapp.com/transaction/getTransactions',
        headers: { 'Authorization': `Bearer ${token}` },
        data: { user }
    })

    if (transactions.data.transactions.length > 0) {
        transactions.data.transactions.forEach(transaction => {
            getTransactions.innerHTML += `<li>
                                            <a href="#" class="item">
                                                <div class="icon-box">
                                                    <img src="./assets/img/${transaction.currency == 'Bitcoin' ? 'bitcoin.png' : transaction.currency == 'BTC' ? 'bitcoin.png' : transaction.currency == 'Ethereum' ? 'ethereum.png' : transaction.currency == 'ETH' ? 'ethereum.png' : transaction.currency == 'USD' ? 'usd.png' : transaction.currency == 'ADA' ? 'ada.png' : 'money.png'}" width="30" height="30"/>
                                                </div>
                                                <div class="in">
                                                    <div>
                                                        <strong>${transaction.currency}</strong>
                                                        <div class="text-small text-secondary font-weight-bold ${transaction.status == 'PENDING' ? 'text-warning' : 'text-dark'}">${transaction.status}</div>
                                                    </div>
                                                    <div class="text-end">
                                                        <strong>$${transaction.amount}</strong>
                                                        <div class="text-small">${transaction.time}</div>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>`
        })
    } else {
        getTransactions.innerHTML += ` <div class="section mt-2" style=" margin: 35%; position: relative; top:5vh; text-align: center;">
                                            <div class="">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" enable-background="new 0 0 32 32" viewBox="0 0 32 32">
                                                    <path fill="#263238" d="M21.5 14.75c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75S21.09 14.75 21.5 14.75zM10.5 14.75c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75S10.09 14.75 10.5 14.75z" />
                                                    <path fill="#455A64" d="M27.5sggg,31h-23C4.224,31,4,30.776,4,30.5v-29C4,1.224,4.224,1,4.5,1h17C21.776,1,22,1.224,22,1.5 S21.776,2,21.5,2H5v28h22V7.5C27,7.224,27.224,7,27.5,7S28,7.224,28,7.5v23C28,30.776,27.776,31,27.5,31z" />
                                                    <path fill="#455A64" d="M27.479 8H21.5C21.224 8 21 7.776 21 7.5V4c0-.276.224-.5.5-.5S22 3.724 22 4v3h4.274l-5.128-5.147c-.195-.195-.194-.512.001-.707.196-.195.513-.195.707.002l5.979 6c.143.143.185.357.108.544C27.863 7.878 27.681 8 27.479 8zM17.5 19c-.276 0-.5-.224-.5-.5 0-.552-.449-1-1-1s-1 .448-1 1c0 .276-.224.5-.5.5S14 18.776 14 18.5c0-1.103.897-2 2-2s2 .897 2 2C18 18.776 17.776 19 17.5 19zM21.5 16.75c-.689 0-1.25-.561-1.25-1.25s.561-1.25 1.25-1.25 1.25.561 1.25 1.25S22.189 16.75 21.5 16.75zM21.5 15.25c-.133 0-.25.117-.25.25s.117.25.25.25.25-.117.25-.25S21.633 15.25 21.5 15.25zM10.5 16.75c-.689 0-1.25-.561-1.25-1.25s.561-1.25 1.25-1.25 1.25.561 1.25 1.25S11.189 16.75 10.5 16.75zM10.5 15.25c-.133 0-.25.117-.25.25s.117.25.25.25.25-.117.25-.25S10.633 15.25 10.5 15.25z" />
                                                    <path fill="#263238" d="M27.5,31h-23C4.224,31,4,30.776,4,30.5v-29C4,1.224,4.224,1,4.5,1h17C21.776,1,22,1.224,22,1.5 S21.776,2,21.5,2H5v28h22V7.5C27,7.224,27.224,7,27.5,7S28,7.224,28,7.5v23C28,30.776,27.776,31,27.5,31z" />
                                                    <path fill="#263238" d="M27.479 8H21.5C21.224 8 21 7.776 21 7.5V4c0-.276.224-.5.5-.5S22 3.724 22 4v3h4.274l-5.128-5.147c-.195-.195-.194-.512.001-.707.196-.195.513-.195.707.002l5.979 6c.143.143.185.357.108.544C27.863 7.878 27.681 8 27.479 8zM17.5 19c-.276 0-.5-.224-.5-.5 0-.552-.449-1-1-1s-1 .448-1 1c0 .276-.224.5-.5.5S14 18.776 14 18.5c0-1.103.897-2 2-2s2 .897 2 2C18 18.776 17.776 19 17.5 19zM21.5 16.75c-.689 0-1.25-.561-1.25-1.25s.561-1.25 1.25-1.25 1.25.561 1.25 1.25S22.189 16.75 21.5 16.75zM21.5 15.25c-.133 0-.25.117-.25.25s.117.25.25.25.25-.117.25-.25S21.633 15.25 21.5 15.25zM10.5 16.75c-.689 0-1.25-.561-1.25-1.25s.561-1.25 1.25-1.25 1.25.561 1.25 1.25S11.189 16.75 10.5 16.75zM10.5 15.25c-.133 0-.25.117-.25.25s.117.25.25.25.25-.117.25-.25S10.633 15.25 10.5 15.25z" />
                                                </svg>
                                                <div class="" style="font-size: 0.8rem ;">No transactions yet</div>
                                            </div>
                                        </div> `
    }
})()