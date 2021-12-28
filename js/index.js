let form = document.querySelector('#form');




//event listener
form.addEventListener('keyup', validation);


//define function
function validation(e) {

    let username = document.querySelector('#username').value;
    let password = document.querySelector('#password').value;
    let email = document.querySelector('#email').value;
    let phone = document.querySelector('#phone').value;
    let post = document.querySelector('#post').value;

    let usercheck = /^[A-Za-z. ]{3,30}$/;
    let passcheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    let mailcheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let numbercheck = /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/;
    let postcodecheck = /^\d{4}$/;

    //username validation
    if (usercheck.test(username)) {
        document.querySelector('#usernameerror').innerHTML = "";

    } else {
        document.querySelector('#usernameerror').innerHTML = "User Name is Invalid";
        return false;

    }

    //password validation
    if (passcheck.test(password)) {
        document.querySelector('#passworderror').innerHTML = " ";

    } else {
        document.querySelector('#passworderror').innerHTML = "Password is Invalid";
        return false;
    }
    // email validation
    if (mailcheck.test(email)) {
        document.querySelector('#emailerror').innerHTML = " ";

    } else {
        document.querySelector('#emailerror').innerHTML = "Invalid Email ";
        return false;
    }
    // phone validation
    if (numbercheck.test(phone)) {
        document.querySelector('#phoneerror').innerHTML = " ";

    } else {
        document.querySelector('#phoneerror').innerHTML = "Invalid Phone number ";
        return false;
    }
    // post code validation
    if (postcodecheck.test(post)) {
        document.querySelector('#posterror').innerHTML = " ";

    } else {
        document.querySelector('#posterror').innerHTML = "Invalid post code ";
        return false;
    }

    e.preventDefault();
}