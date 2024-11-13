document.addEventListener('DOMContentLoaded', function () {
    const authButton = document.querySelector('.button-auth');
    const modal = document.querySelector('.modal-auth');
    const closeAuthButton = document.querySelector('.close-auth');
    const loginInput = document.getElementById('login');
    const passwordInput = document.getElementById('password');
    const loginForm = document.getElementById('logInForm');
    const userNameSpan = document.querySelector('.user-name');
    const buttonText = document.querySelector('.button-text');
    
    if (localStorage.getItem('userLoggedIn')) {
        const userName = localStorage.getItem('userName');
        userNameSpan.textContent = `Привіт, ${userName}`;
        buttonText.textContent = 'Вийти';
    }


    authButton.addEventListener('click', function () {
        if (buttonText.textContent === 'Вийти') {

            localStorage.removeItem('userLoggedIn');
            localStorage.removeItem('userName');
            userNameSpan.textContent = '';
            buttonText.textContent = 'Війти';
            loginInput.value = '';
            passwordInput.value = '';
            return;
        }

        modal.style.display = 'block';
    });

    closeAuthButton.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const login = loginInput.value.trim();

        if (!login) {
            loginInput.style.borderColor = 'red';
            return;
        }

        loginInput.style.borderColor = ''; 

        localStorage.setItem('userLoggedIn', true);
        localStorage.setItem('userName', login);

        userNameSpan.textContent = `Привіт, ${login}`;
        buttonText.textContent = 'Вийти';
        modal.style.display = 'none';
    });
});
