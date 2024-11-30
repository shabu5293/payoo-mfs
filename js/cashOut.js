

document.getElementById('btn-cash-out').addEventListener('click', function(event){

    event.preventDefault();


    const cashOut = document.getElementById('cash-out-input').value;
    const cashOutNumber = parseFloat(cashOut);
    const pinNumber = document.getElementById('pin-input').value;

    if(pinNumber === '1234'){
        const balance = document.getElementById('acc-balance').innerText;
        const balanceNumber = parseFloat(balance);

        const newBalance = balanceNumber - cashOutNumber;

        document.getElementById('acc-balance').innerText = newBalance;

    }
    else{
        alert('Failed to cash out!!!');
    }
})