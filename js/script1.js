// script.js

// Simulate fetching data and updating the dashboard
document.addEventListener('DOMContentLoaded', () => {
    const assignmentList = document.getElementById('assignment-list');
    const gradesList = document.getElementById('grades-list');
    const scheduleList = document.getElementById('schedule-list');

    // Update the widgets with some data (you can replace this with API data)
    const assignments = [
        'Math Homework - Due: Nov 15',
        'Science Project - Due: Nov 18',
        'History Essay - Due: Nov 20',
    ];

    const grades = ['Math: 90/100', 'Science: 85/100', 'English: 88/100'];
    const schedule = [
        '09:00 AM - Math Class',
        '11:00 AM - Science Class',
        '01:00 PM - History Class',
    ];

    // Populate lists
    assignmentList.innerHTML = assignments.map(item => `<li>${item}</li>`).join('');
    gradesList.innerHTML = grades.map(item => `<li>${item}</li>`).join('');
    scheduleList.innerHTML = schedule.map(item => `<li>${item}</li>`).join('');

    // Logout button functionality
    document.getElementById('logout').addEventListener('click', () => {
        alert('You have been logged out!');
        window.location.href = 'index.html'; // Redirect to login page
    });
});
