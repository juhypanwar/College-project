document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Get username and password from the form
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Simulated authentication (replace with your actual authentication logic)
        if (username === "anirudh" && password === "juhy") {
            // Redirect to home page
            window.location.href = "index.html";
        } else {
            // Show error message (replace with your actual error handling)
            alert("Invalid username or password. Please try again.");
        }
    });
});
document.addEventListener('DOMContentLoaded', (event) => {
    const pageSelect = document.getElementById('pageSelect');

    pageSelect.addEventListener('change', function() {
        const selectedPage = pageSelect.value;
        if (selectedPage) {
            window.location.href = selectedPage;
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('vendorForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const address = document.getElementById('address').value.trim();
        const category = document.getElementById('category').value;
        const password = document.getElementById('password').value.trim();

        // Basic validation
        if (name === '' || email === '' || phone === '' || address === '' || category === '' || password === '') {
            alert('Please fill in all fields.');
            return;
        }

        // Here, you would normally send the data to the server
        // For this example, we'll just log it to the console
        console.log({
            name,
            email,
            phone,
            address,
            category,
            password
        });

        alert('Vendor registered successfully!');

        // Optionally, reset the form
        form.reset();
    });
});