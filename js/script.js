// Handle button clicks to show different forms
document.getElementById('student-login-btn').addEventListener('click', function() {
    showForm('student-login-form');
});
document.getElementById('admin-login-btn').addEventListener('click', function() {
    showForm('admin-login-form');
});
document.getElementById('register-btn').addEventListener('click', function() {
    showForm('student-registration-form');
});

// Function to show the appropriate form and hide others
function showForm(formId) {
    // Hide all forms first
    document.getElementById('student-login-form').style.display = 'none';
    document.getElementById('admin-login-form').style.display = 'none';
    document.getElementById('student-registration-form').style.display = 'none';
    
    // Show the selected form
    document.getElementById(formId).style.display = 'block';
}

// Student login form submission (add authentication logic here)
document.getElementById('student-login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    
    // Simple validation (expand as necessary)
    if (username === "" || password === "") {
        document.getElementById('login-message').textContent = "Please enter both username and password.";
    } else {
        document.getElementById('login-message').textContent = "";

        // Here, we would add authentication logic, e.g., checking the credentials against a database
        // For now, let's assume that the credentials are correct if username is 'student' and password is 'password123'
        if (username === "student" && password === "password123") {
            document.getElementById('login-message').textContent = "";
            // Redirect to the student dashboard page
            window.location.href = "studentdash.html"; // Replace with actual URL of the student dashboard page
        } else {
            document.getElementById('login-message').textContent = "Invalid username or password.";
        }
    }
});

// Admin login form submission (add authentication logic here)
document.getElementById('admin-login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let adminUsername = document.getElementById('admin-username').value;
    let adminPassword = document.getElementById('admin-password').value;

    // Simple validation (expand as necessary)
    if (adminUsername === "" || adminPassword === "") {
        document.getElementById('admin-login-message').textContent = "Please enter both username and password.";
    } else {
        document.getElementById('admin-login-message').textContent = "";

        // Here, we would add authentication logic, e.g., checking the credentials against a database
        // For now, let's assume that the credentials are correct if admin username is 'admin' and password is 'admin123'
        if (adminUsername === "admin" && adminPassword === "admin123") {
            document.getElementById('admin-login-message').textContent = "";
            // Redirect to the admin dashboard page
            window.location.href = "admin.html"; // Replace with actual URL of the admin dashboard page
        } else {
            document.getElementById('admin-login-message').textContent = "Invalid admin username or password.";
        }
    }
});

// Student registration form submission (for demo, no actual registration logic implemented here)
document.getElementById('student-registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let firstName = document.getElementById('first-name').value;
    let lastName = document.getElementById('last-name').value;
    let phoneNumber = document.getElementById('phone-number').value;
    let rollNumber = document.getElementById('roll-number').value;
    let studentClass = document.getElementById('class').value;
    let feeSlip = document.getElementById('fee-slip').value;

    // Simple validation (expand as necessary)
    if (firstName === "" || lastName === "" || phoneNumber === "" || rollNumber === "" || studentClass === "" || feeSlip === "") {
        document.getElementById('registration-message').textContent = "Please fill in all the fields.";
    } else {
        document.getElementById('registration-message').textContent = "";
        
        // Here, we would add registration logic to send the data to the server
        // For now, let's assume the registration is successful
        document.getElementById('registration-message').textContent = "Registration successful!";
        // Redirect the user to a confirmation or dashboard page
        window.location.href = "student-dashboard.html"; // Replace with actual URL for the student dashboard
    }
});
