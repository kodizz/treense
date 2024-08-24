function toggleForm() {
    const signInForm = document.getElementById('sign-in-form');
    const signUpForm = document.getElementById('sign-up-form');
    signInForm.style.display = signInForm.style.display === 'none' ? 'block' : 'none';
    signUpForm.style.display = signUpForm.style.display === 'none' ? 'block' : 'none';
}

function togglePasswordVisibility() {
    const signUpPassword = document.getElementById('sign-up-password');
    const confirmPassword = document.getElementById('confirm-password');
    if (signUpPassword.type === 'password') {
        signUpPassword.type = 'text';
        confirmPassword.type = 'text';
    } else {
        signUpPassword.type = 'password';
        confirmPassword.type = 'password';
    }
}

function createAccount() {
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('sign-up-email').value;
    const password = document.getElementById('sign-up-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    alert(`Account created successfully for ${firstName} ${lastName} with email ${email}!`);
    toggleForm();
}

function signIn() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        alert(`Logged in with email: ${email}`);
    } else {
        alert("Please enter both email and password.");
    }
}
