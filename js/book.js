// Simulate requests (In real-world, fetch these from a server)
const requests = [
    {
        studentName: 'akshay rathod',
        bookName: 'Introduction to Algorithms',
        usageDuration: '1 Month',
        reason: 'For completing my semester project.'
    },
    {
        studentName: 'shubham ',
        bookName: 'Clean Code',
        usageDuration: '2 Weeks',
        reason: 'To improve coding practices.'
    }
];

// Function to populate requests table
function loadRequests() {
    const requestsTable = document.getElementById('requestsTable');
    requestsTable.innerHTML = '';

    requests.forEach((request, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${request.studentName}</td>
            <td>${request.bookName}</td>
            <td>${request.usageDuration}</td>
            <td>${request.reason}</td>
            <td>
                <button onclick="approveRequest(${index})">Approve</button>
                <button onclick="rejectRequest(${index})">Reject</button>
            </td>
        `;

        requestsTable.appendChild(row);
    });
}

// Approve Request
function approveRequest(index) {
    alert(`Request approved for ${requests[index].studentName}`);
    requests.splice(index, 1); // Remove from the list
    loadRequests(); // Refresh table
}

// Reject Request
function rejectRequest(index) {
    alert(`Request rejected for ${requests[index].studentName}`);
    requests.splice(index, 1); // Remove from the list
    loadRequests(); // Refresh table
}

// Load requests on page load
document.addEventListener('DOMContentLoaded', loadRequests);
