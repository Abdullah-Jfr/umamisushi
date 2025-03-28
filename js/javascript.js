


  
 

document
.getElementById("reservationForm")
.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const notes = document.getElementById("notes").value;
  const persons = document.getElementById("persons").value;

  const table = document.querySelector("table");
  const newRow = table.insertRow();

  newRow.insertCell(0).textContent = name;
  newRow.insertCell(1).textContent = email;
  newRow.insertCell(2).textContent = phone;
  newRow.insertCell(3).textContent = date;
  newRow.insertCell(4).textContent = time;
  newRow.insertCell(5).textContent = notes;
  newRow.insertCell(6).textContent = persons;

  document.getElementById("reservationForm").reset();
});
