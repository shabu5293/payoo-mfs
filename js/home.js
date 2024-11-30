
document.getElementById('btn-add-money').addEventListener('click', function(event){
        event.preventDefault();


        const addMoneyInput = document.getElementById('add-money').value;

        const pinNumberInput = document.getElementById('pin-input').value;

        if(pinNumberInput==='1234'){
            // console.log('Adding money to your account');
            const balance = document.getElementById('acc-balance').innerText;

            // const updateBalance = balance + addMoneyInput; 2 tai string tai jok kore lov hobe na.
            const addMoneyNumber = parseFloat(addMoneyInput);
            const balanceNumber = parseFloat(balance);

            const updateBalance = addMoneyNumber + balanceNumber;
            document.getElementById('acc-balance').innerText = updateBalance;
        }
        else{
            alert ('Failed to add money!')
        }
})
