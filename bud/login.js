// This part is from your existing login.js
const forms = document.querySelector(".forms");
const links = document.querySelectorAll(".link");

links.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault(); 
        forms.classList.toggle("show-signup");
    });
});

const loginForm = document.querySelector('.signup form');

loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.querySelector('.field input[type="email"]').value;
    const password = document.querySelector('.field input[type="password"]').value;

    localStorage.setItem(email, password);

    window.location.href = 'index.html';
});

const signinForm = document.querySelector('.login form');

signinForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.querySelector('.input').value;
    const password = document.querySelector('.password').value;

    const storedPassword = localStorage.getItem(email);

    if (storedPassword && password === storedPassword) {
        window.location.href = 'index.html';
    } else {
        alert('Invalid email or password. Please try again.');
    }
});

// This is the additional code you want to add
const loginFormAdditional = document.getElementById('loginForm');

loginFormAdditional.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const storedPassword = localStorage.getItem(email);

    if (storedPassword && password === storedPassword) {
        const username = email.split('@')[0]; // Extracting username from email
        localStorage.setItem('username', username);
        window.location.href = 'index.html';
    } else {
        alert('Invalid email or password. Please try again.');
    }
});

// Retrieve username from localStorage and display it
const usernameElement = document.getElementById('userGreeting');
const username = localStorage.getItem('username');

if (username) {
    usernameElement.innerText = `Hi, ${username}!`;
} else {
    usernameElement.innerText = `Hi, there!`;
}

