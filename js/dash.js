document.addEventListener("DOMContentLoaded", () => {
    const feesPendingCount = 2; // Example data
    const labBooksPendingCount = 1; // Example data
    const applicationsPendingCount = 0; // Example data
  
    const feesBadge = document.getElementById("fees-pending-count");
    const labBooksBadge = document.getElementById("lab-books-pending-count");
    const applicationsBadge = document.getElementById("applications-pending-count");
  
    // Update badges dynamically
    if (feesPendingCount > 0) feesBadge.textContent = feesPendingCount;
    else feesBadge.classList.add("hidden");
  
    if (labBooksPendingCount > 0) labBooksBadge.textContent = labBooksPendingCount;
    else labBooksBadge.classList.add("hidden");
  
    if (applicationsPendingCount > 0) applicationsBadge.textContent = applicationsPendingCount;
    else applicationsBadge.classList.add("hidden");
  });
  