document.getElementById('signinForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    let errorMessages = '';

    // Username validation
    if (username.trim() === '') {
        errorMessages += 'Username is required.<br>';
    } else if (username.length < 3 || username.length > 20) {
        errorMessages += 'Username must be between 3 and 20 characters long.<br>';
    }

    // Password validation
    if (password.trim() === '') {
        errorMessages += 'Password is required.<br>';
    } else if (password.length < 6) {
        errorMessages += 'Password must be at least 6 characters long.<br>';
    } else if (!/[A-Z]/.test(password)) {
        errorMessages += 'Password must contain at least one uppercase letter.<br>';
    } else if (!/[a-z]/.test(password)) {
        errorMessages += 'Password must contain at least one lowercase letter.<br>';
    } else if (!/[0-9]/.test(password)) {
        errorMessages += 'Password must contain at least one number.<br>';
    } else if (!/[!@#$%^&*]/.test(password)) {
        errorMessages += 'Password must contain at least one special character (!@#$%^&*).<br>';
    }

    const errorMessagesDiv = document.getElementById('errorMessages');
    if (errorMessages) {
        errorMessagesDiv.innerHTML = errorMessages;
    } else {
        errorMessagesDiv.innerHTML = '';
        // Form is valid, proceed with form submission or AJAX request
        alert('Form submitted successfully!');
        // Example of how you might proceed
        // document.getElementById('signinForm').submit();
    }
});
