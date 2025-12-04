document.addEventListener('DOMContentLoaded', function() {
    // Select the form and feedback div
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');
    
    // Add event listener for form submission
    form.addEventListener('submit', function(event) {
        // Prevent form from submitting to server
        event.preventDefault();
        
        // Get and trim input values
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        
        // Initialize validation variables
        let isValid = true;
        let messages = [];
        
        // Username validation (minimum 3 characters)
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }
        
        // Email validation (must contain @ and .)
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push("Please enter a valid email address (must contain '@' and '.').");
        }
        
        // Password validation (minimum 8 characters)
        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }
        
        // Display feedback
        feedbackDiv.style.display = "block";
        
        if (isValid) {
            // Success case
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745";
            feedbackDiv.style.backgroundColor = "#d4edda";
            feedbackDiv.className = "success";
            
            // Optional: Reset form after successful registration
            form.reset();
            
            // Optional: Hide feedback after 3 seconds
            setTimeout(function() {
                feedbackDiv.style.display = "none";
            }, 3000);
        } else {
            // Error case
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = "#dc3545";
            feedbackDiv.style.backgroundColor = "#f8d7da";
            feedbackDiv.className = "";
        }
    });
});
