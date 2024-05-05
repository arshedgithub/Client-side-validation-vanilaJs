var usernameField = document.getElementById('username');
var emailField = document.getElementById('email');
var passwordField = document.getElementById('password');
var retypeField = document.getElementById('re_password');
var pwdErr = document.getElementById('pwdErr');

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
        console.log('Required Field empty');
    } else if (passwordField.value != retypeField.value){
        console.log("Password did not match");
    } else {
        console.log("Form submitted");
    }
}
