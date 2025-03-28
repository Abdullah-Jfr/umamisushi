document.getElementById("vacatureForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;


    
    const table = document.querySelector("table");
    const newRow = table.insertRow();
    
  
    newRow.insertCell(0).textContent = name;
    newRow.insertCell(1).textContent = email;
 

    document.getElementById("vacatureForm").reset();
});