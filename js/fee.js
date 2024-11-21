// Function to save edited fee
function saveFee(button) {
    const row = button.closest('tr');
    const feeDate = row.querySelector('.fee-date').value;
    const feeAmount = row.querySelector('.fee-amount').value;
    const feeStatus = row.querySelector('.fee-status').value;
  
    // Check for empty fields
    if (feeAmount && feeDate) {
      row.querySelector('td:nth-child(1)').textContent = feeDate;
      row.querySelector('td:nth-child(2)').textContent = `$${feeAmount}`;
      row.querySelector('td:nth-child(3)').textContent = feeStatus.charAt(0).toUpperCase() + feeStatus.slice(1);
      alert("Fee saved successfully!");
    } else {
      alert("Please fill out all fields!");
    }
  }
  
  // Function to simulate payment
  function payFee(button) {
    const row = button.closest('tr');
    const feeStatus = row.querySelector('.fee-status');
  
    // Simulate payment and mark as paid
    if (feeStatus.value === "pending") {
      feeStatus.value = "paid";
      row.querySelector('td:nth-child(3)').textContent = "Paid";
      row.querySelector('.btn-primary').disabled = true;
      row.querySelector('.btn-primary').textContent = "Paid";
      alert("Payment Successful!");
    } else {
      alert("This fee is already paid.");
    }
  }
  
  // Function to add a new fee entry
  document.getElementById('add-fee-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const feeDate = document.getElementById('new-fee-date').value;
    const feeDescription = document.getElementById('new-fee-description').value;
    const feeAmount = document.getElementById('new-fee-amount').value;
  
    if (!feeDate || !feeDescription || !feeAmount) {
      alert("Please fill out all fields!");
      return;
    }
  
    const table = document.querySelector('.fees-table tbody');
    const newRow = document.createElement('tr');
  
    newRow.innerHTML = `
      <td>${feeDate}</td>
      <td>$${feeAmount}</td>
      <td class="status pending">Pending</td>
      <td>
        <button class="btn-primary" onclick="payFee(this)">Pay Now</button>
        <button class="btn-secondary" onclick="saveFee(this)">Save</button>
      </td>
    `;
  
    table.appendChild(newRow);
    alert('New Fee Added Successfully!');
  });
  