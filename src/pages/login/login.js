let isLoginMode = true;

function toggleForm() {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const formTitle = document.getElementById('form-title');
    const toggleLink = document.getElementById('toggle-link');

    if (isLoginMode) {
        // Switch to signup
        loginForm.classList.add('hidden');
        signupForm.classList.remove('hidden');
        formTitle.textContent = 'Create your account';
        toggleLink.textContent = 'sign in to existing account';
        isLoginMode = false;
    } else {
        // Switch to login
        signupForm.classList.add('hidden');
        loginForm.classList.remove('hidden');
        formTitle.textContent = 'Sign in to your account';
        toggleLink.textContent = 'create a new account';
        isLoginMode = true;
    }
}

// Form submission handlers
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Add your login logic here
    console.log('Login attempt:', { email, password });
    alert('Login functionality would be implemented here');
});

document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;

    // Basic password validation
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    if (password.length < 6) {
        alert('Password must be at least 6 characters long');
        return;
    }

    // Add your signup logic here
    console.log('Signup attempt:', { name, email, password });
    alert('Signup functionality would be implemented here');
});