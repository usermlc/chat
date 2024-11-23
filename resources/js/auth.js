document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            if (!email || !password) {
                alert("Please enter both email and password");
                return;
            }

            axios.post('/login', { email, password })
                .then(response => {
                    console.log('Logged in successfully', response);
                    window.location.href = '/';
                })
                .catch(error => {
                    console.error('Error during login', error);
                    alert('Login failed! Please check your credentials.');
                });
        });
    } else {
        console.log('Login form not found!');
    }

    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const password_confirmation = document.getElementById('password_confirmation').value;

            if (!email || !password || !password_confirmation) {
                alert("Please fill in all fields");
                return;
            }

            if (password !== password_confirmation) {
                alert("Passwords do not match");
                return;
            }

            axios.post('/register', {
                email: email,
                password: password,
                password_confirmation: password_confirmation,
                name: name
            })
                .then(response => {
                    console.log('Registration successful', response);
                    window.location.href = '/login';
                })
                .catch(error => {
                    console.error('Error during registration', error);
                    alert('Registration failed! Please check your inputs.');
                });
        });
    } else {
        console.log('Register form not found!');
    }
});
