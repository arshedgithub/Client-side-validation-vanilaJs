var usernameField = document.getElementById('username');
var emailField = document.getElementById('email');
var passwordField = document.getElementById('password');
var retypeField = document.getElementById('re_password');
var errDisplay = document.getElementsByClassName('errDisplay')[0];
var pwdErr = document.getElementById('pwdErr');
var errMessage = document.getElementById('errMessage');
var errCloseBtn = document.getElementById('errCloseBtn');

errCloseBtn.addEventListener('click', closeErrorMessage);

function validatePassword(){
    if(passwordField.value.length < 8){
        passwordField.style.backgroundColor = "pink";
        pwdErr.innerHTML = "Weak Password";
    } else {
        passwordField.style.backgroundColor = "lightGreen";
        pwdErr.innerHTML = "";
    }
}

function submitForm(){
    if (usernameField.value == "" || emailField.value == "" || passwordField.value == "" ) {
        errDisplay.style.display = "block";
        errMessage.innerHTML = 'Required Field empty';
    } else if (passwordField.value != retypeField.value){
        errDisplay.style.display = "block";
        errMessage.innerHTML = "Password did not match";
    } else {
        console.log("submitting form...");
        closeErrorMessage();
    }
}

function closeErrorMessage(){
    errDisplay.style.display = "none";
}
