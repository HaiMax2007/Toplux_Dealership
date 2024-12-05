const eye = document.getElementById('eye');
const hidden = document.getElementById('hidden');
const passwordInput = document.getElementById('password');

eye.addEventListener('click', () => {
    passwordInput.setAttribute('type', 'password');
    eye.style.setProperty('display', 'none');
    hidden.style.setProperty('display', 'block');
})

hidden.addEventListener('click', () => {
    passwordInput.setAttribute('type', 'text');
    hidden.style.setProperty('display', 'none');
    eye.style.setProperty('display', 'block');
})