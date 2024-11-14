// Sample data for assignments
const assignmentsData = [
    {
        id: 1,
        title: "Math Homework",
        dueDate: "Nov 15, 2024",
        description: "Solve problems from chapter 5 and 6.",
        status: "Pending",
        submitted: false
    },
    {
        id: 2,
        title: "Science Project",
        dueDate: "Nov 18, 2024",
        description: "Prepare a report on renewable energy sources.",
        status: "Submitted",
        submitted: true
    },
    {
        id: 3,
        title: "History Essay",
        dueDate: "Nov 20, 2024",
        description: "Write an essay on the Industrial Revolution.",
        status: "Pending",
        submitted: false
    }
];

// Function to load and display assignments
function loadAssignments() {
    const assignmentsList = document.getElementById("assignments-list");
    assignmentsList.innerHTML = "";

    assignmentsData.forEach((assignment) => {
        const card = document.createElement("div");
        card.classList.add("assignment-card");

        // Assignment details
        card.innerHTML = `
            <h3>${assignment.title}</h3>
            <p><strong>Due Date:</strong> ${assignment.dueDate}</p>
            <p><strong>Description:</strong> ${assignment.description}</p>
            <p><strong>Status:</strong> <span class="${assignment.submitted ? 'status-submitted' : 'status-pending'}">
                ${assignment.submitted ? 'Submitted' : 'Pending'}
            </span></p>
        `;

        // Upload container
        const uploadContainer = document.createElement("div");
        uploadContainer.classList.add("upload-container");

        // File input and label
        const fileInput = document.createElement("input");
        fileInput.type = "file";
        fileInput.accept = ".pdf";
        fileInput.id = `upload-${assignment.id}`;
        fileInput.disabled = assignment.submitted;

        const fileLabel = document.createElement("label");
        fileLabel.textContent = assignment.submitted ? "Already Submitted" : "Upload Answer PDF";
        fileLabel.setAttribute("for", `upload-${assignment.id}`);

        // Upload message
        const uploadMessage = document.createElement("p");
        uploadMessage.classList.add("upload-message");
        uploadMessage.id = `message-${assignment.id}`;

        // File input change event
        fileInput.addEventListener("change", (event) => {
            const file = event.target.files[0];
            if (file && file.type === "application/pdf") {
                uploadMessage.textContent = `File "${file.name}" uploaded successfully!`;
                uploadMessage.style.color = "#27ae60";
                assignment.submitted = true;
                fileInput.disabled = true;
                fileLabel.textContent = "Already Submitted";
            } else {
                uploadMessage.textContent = "Please upload a valid PDF file.";
                uploadMessage.style.color = "#e74c3c";
            }
        });

        // Append elements
        uploadContainer.appendChild(fileInput);
        uploadContainer.appendChild(fileLabel);
        uploadContainer.appendChild(uploadMessage);
        card.appendChild(uploadContainer);
        assignmentsList.appendChild(card);
    });
}

// Initialize the assignments page
document.addEventListener("DOMContentLoaded", loadAssignments);
