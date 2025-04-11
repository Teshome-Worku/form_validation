let form = document.querySelector('.form');
let err1 = document.getElementById('error1');
let err2 = document.getElementById('error2');
let err3 = document.getElementById('error3');
let name = document.getElementById('text');
let pass = document.getElementById('password');
let mail = document.getElementById('email');
let message = document.querySelector('#div1');
let container = document.querySelector('.container');

function success() {
    message.style.display = 'block';
    container.style.display = 'none';
}
form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (name.value === '' || name.value === null) {
        err1.innerHTML = 'name required';
        err1.style.color = 'red';
    }
    if (name.value !== '') {
        err1.innerHTML = '';
    }
    if (pass.value === '' || pass.value.length <= 5 || pass.value.length > 20) {
        err2.innerHTML = "valid password required";
        err2.style.color = 'red';
        pass.value = '';
    } else {
        err2.innerHTML = '';
    }

    if (mail.value === '') {
        err3.innerHTML = ' valid email address required';
        err3.style.color = 'red';
    }
    if (mail.value !== '') {
        err3.innerHTML = '';

    }
    if (name.value !== '' && pass.value !== '' && mail.value !== '') {
        success();
    }
});
