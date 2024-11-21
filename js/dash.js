// Handle Leave Form Submission
document.getElementById("leave-form").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Leave request submitted successfully!");
  });
  
  // Handle Lab Book Form Submission
  document.getElementById("lab-book-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const bookName = document.getElementById("book-name").value;
    const history = document.getElementById("lab-books-history");
    const listItem = document.createElement("li");
    listItem.textContent = `${bookName} - Pending`;
    history.appendChild(listItem);
    alert("Lab book request submitted successfully!");
  });
  