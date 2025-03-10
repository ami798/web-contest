document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.contact-section form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission for demonstration
        alert('Thank you for your message!');
        form.reset(); // Reset the form fields
    });
});
