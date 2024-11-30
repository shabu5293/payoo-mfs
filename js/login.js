// console.log('button clicking file addded');

// step -1: set event handler
document.getElementById('button-login').addEventListener('click', function(event){

    // step -2: prevent default behavior ( prevent reloading browser)
    event.preventDefault();
    // step -3: get the phone number and pin number
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;

    // Step -4: Validate phone and pin
    // This is temporary. Not proper way
    if(phoneNumber === '5' && pinNumber === '1234'){
        console.log('You are loggeed in');
        window.location.href = '/home.html';
        // Step -5: Allow user to use the website
    }
    else{
        alert ('Did not match');
    }
})