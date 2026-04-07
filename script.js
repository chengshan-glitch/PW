document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Clear previous errors
        clearErrors();
        
        // Validate inputs
        let isValid = true;
        
        if (!usernameInput.value.trim()) {
            showError(usernameInput, usernameError, 'Username or email is required');
            isValid = false;
        } else if (!isValidUsername(usernameInput.value)) {
            showError(usernameInput, usernameError, 'Please enter a valid email or username');
            isValid = false;
        }
        
        if (!passwordInput.value) {
            showError(passwordInput, passwordError, 'Password is required');
            isValid = false;
        } else if (passwordInput.value.length < 6) {
            showError(passwordInput, passwordError, 'Password should be at least 6 characters');
            isValid = false;
        }
        
        if (isValid) {
            handleSignIn(usernameInput.value, passwordInput.value);
        }
    });

    // Real-time validation on input
    usernameInput.addEventListener('blur', function() {
        if (this.value.trim() && !isValidUsername(this.value)) {
            showError(this, usernameError, 'Please enter a valid email or username');
        } else {
            clearFieldError(this, usernameError);
        }
    });

    passwordInput.addEventListener('blur', function() {
        if (this.value && this.value.length < 6) {
            showError(this, passwordError, 'Password should be at least 6 characters');
        } else {
            clearFieldError(this, passwordError);
        }
    });

    function isValidUsername(username) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const usernameRegex = /^[a-zA-Z0-9_-]{1,39}$/;
        
        return emailRegex.test(username) || usernameRegex.test(username);
    }

    function showError(inputElement, errorElement, message) {
        inputElement.classList.add('error');
        errorElement.textContent = message;
        errorElement.classList.add('show');
    }

    function clearFieldError(inputElement, errorElement) {
        inputElement.classList.remove('error');
        errorElement.textContent = '';
        errorElement.classList.remove('show');
    }

    function clearErrors() {
        usernameInput.classList.remove('error');
        passwordInput.classList.remove('error');
        usernameError.textContent = '';
        passwordError.textContent = '';
        usernameError.classList.remove('show');
        passwordError.classList.remove('show');
    }

    function handleSignIn(username, password) {
        // Simulate sign in process
        const signinBtn = loginForm.querySelector('.signin-btn');
        const originalText = signinBtn.textContent;
        
        signinBtn.disabled = true;
        signinBtn.textContent = 'Signing in...';
        
        setTimeout(function() {
            alert('Welcome, ' + username + '!\n\nThis is a demo page. Sign in successful!');
            signinBtn.disabled = false;
            signinBtn.textContent = originalText;
            loginForm.reset();
        }, 1000);
    }
});
