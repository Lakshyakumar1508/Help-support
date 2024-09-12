document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the default way

    // Retrieve form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const feedback = document.getElementById('feedback').value;

    // Simulate form submission
    setTimeout(() => {
        // Display a success message
        document.getElementById('responseMessage').innerText = `Thank you, ${name}! Your feedback has been received.`;
        
        // Clear the form
        document.getElementById('feedbackForm').reset();
    }, 200);
});
