document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    
    const table = document.getElementById('contactsTable');
    const row = table.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    
    cell1.textContent = name;
    cell2.textContent = phone;
    
    document.getElementById('contactForm').reset();
});