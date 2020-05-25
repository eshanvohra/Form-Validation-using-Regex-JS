console.log("welcome to project 4");

const name = document.getElementById('name');
const email = document.getElementById('email');
const mobile = document.getElementById('mobile');

let validUser = false;
let validEmail = false;
let validMobile = false;
$('#fail').hide();
$('#success').hide();
// console.log(name,email,mobile);

name.addEventListener('blur', () => {
    console.log("name is blurred");
    let regex = /^[a-zA-z]([0-9a-zA-Z]){2,10}$/;
    let str = name.value;
    if (regex.test(str)) {
        console.log("Your name is valid");
        validUser = true;
        name.classList.remove("is-invalid");
    }
    else {
        console.log("Your name is invalid")
        name.classList.add("is-invalid");
        validUser = false;

    }
    // console.log(regex, str);
})
email.addEventListener('blur', () => {
    console.log("email is blurred");
    let regex = /^([_\-\.a-zA-Z0-9]+)@([_\-\.a-zA-Z0-9]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    if (regex.test(str)) {
        console.log("Your email is valid");
        validEmail = true;
        email.classList.remove("is-invalid");
    }
    else {
        console.log("Your email is invalid")
        email.classList.add("is-invalid");
        validEmail = false;
    }
})
mobile.addEventListener('blur', () => {
    console.log("mobile is blurred");

    let regex = /^[0-9]{10}$/;
    let str = mobile.value;
    if (regex.test(str)) {
        console.log("Your phone is valid");
        validMobile = true;
        mobile.classList.remove("is-invalid");
    }
    else {
        console.log("Your phone is invalid")
        mobile.classList.add("is-invalid");
        validMobile = false;
    }
})

let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("you clicked submit");

    if (validEmail && validMobile && validUser) {
        console.log("usename,emal,mobile are valid submitting the form...");
        let success = document.getElementById('success');
        $('#success').show();
        $('#fail').hide();
    }
    else {
        let fail = document.getElementById('fail');
        $('#fail').show();
        $('#success').hide();
    }
})