document.getElementById('bookRequestForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form values
    const studentName = document.getElementById('studentName').value;
    const bookName = document.getElementById('bookName').value;
    const usageDuration = document.getElementById('usageDuration').value;
    const reason = document.getElementById('reason').value;

    // Basic validation check
    if (studentName && bookName && usageDuration && reason) {
        // Display success message
        document.getElementById('successMessage').innerText = `Request submitted successfully! 
        Admin will review your request for "${bookName}" for a duration of "${usageDuration}".`;
        // Reset form
        document.getElementById('bookRequestForm').reset();
    } else {
        alert('Please fill out all the fields.');
    }
});
