// Form Validation and Submission
document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signupForm');
    const loginForm = document.getElementById('loginForm');

    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                contact: document.getElementById('contact').value,
                password: document.getElementById('password').value,
                dob: document.getElementById('dob').value,
                gender: document.getElementById('gender').value,
                college: document.getElementById('college').value,
                terms: document.getElementById('terms').checked
            };

            // Simple validation
            if (!formData.terms) {
                alert('Please accept the terms and conditions');
                return;
            }

            // Store user data in localStorage
            localStorage.setItem('user', JSON.stringify(formData));
            alert('Account created successfully!');
            window.location.href = 'login.html';
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Get stored user data
            const userData = JSON.parse(localStorage.getItem('user'));

            if (userData && userData.email === email && userData.password === password) {
                localStorage.setItem('isAuthenticated', 'true');
                alert('Login successful!');
                window.location.href = 'dashboard.html';
            } else {
                alert('Invalid credentials. Please try again.');
            }
        });
    }
});

// Check Authentication Status
function isAuthenticated() {
    return localStorage.getItem('isAuthenticated') === 'true';
}

// Logout Function
function logout() {
    localStorage.removeItem('isAuthenticated');
    window.location.href = 'login.html';
}
