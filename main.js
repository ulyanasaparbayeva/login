function openModal() {
  myModal.style.display = "block";
  login.style.display = "none";
}



// Add event listeners for button clicks
document.getElementById("btn").addEventListener("click", openModal);
document.getElementsByClassName("close")[0].addEventListener("click", closeModal);
document.getElementById("addToTableBtn").addEventListener("click", addToTable);

const btn = document.getElementById('btn');
const myModal = document.getElementById('myModal');
const login = document.getElementById('login');
const span = document.getElementsByClassName('close')[0];

function openModal() {
  myModal.style.display = 'block';
  login.style.display = 'none';
}

function closeModal() {
  myModal.style.display = 'none';
  login.style.display = 'block';
}

btn.addEventListener('click', openModal);
span.addEventListener('click', closeModal);

function deleteTable() {
  const table = document.getElementById('data-table');
  table.innerHTML = '';
  tableHeadersGenerated = false;
}

document.getElementById('deleteTableBtn').addEventListener('click', deleteTable);


function addToTable() {
  const nameInput = document.getElementById("nameInput");
  const surnameInput = document.getElementById("surnameInput");
  const startInput = document.getElementById("startInput");
  const ageInput = document.getElementById("ageInput");
  const passwordInput = document.getElementById("passwordInput");
  const countryInput = document.getElementById("countryInput");
  const passwordsInput = document.getElementById("passwordsInput");
  const genderInput = document.getElementById("genderInput");

  const name = nameInput.value;
  const surname = surnameInput.value;
  const start = startInput.value;
  const age = ageInput.value;
  const password = passwordInput.value;
  const country = countryInput.value;
  const passwords = passwordsInput.value;
  const gender = genderInput.value;

  if (
    name.trim() === "" ||
    age.trim() === "" ||
    surname.trim() === "" ||
    start.trim() === "" ||
    password.trim() === "" ||
    country.trim() === "" ||
    passwords.trim() === "" ||
    gender.trim() === ""
  ) {
    alert("Pojaluysta, zapolnite vse polya..");
    return;
  }
  const table = document.getElementById('data-table');
  const newRow = table.insertRow();

  const nameCell = newRow.insertCell(0);
  const ageCell = newRow.insertCell(1);
  const surnameCell = newRow.insertCell(2);
  const startCell = newRow.insertCell(3);
  const passwordCell = newRow.insertCell(4);
  const countryCell = newRow.insertCell(5);
  const passwordsCell = newRow.insertCell(6);
  const genderCell = newRow.insertCell(7);


  nameCell.innerHTML = name;
  ageCell.innerHTML = age;
  surnameCell.innerHTML = surname;
  startCell.innerHTML = start;
  passwordCell.innerHTML = password;
  countryCell.innerHTML = country;
  passwordsCell.innerHTML = passwords;
  genderCell.innerHTML = gender;

  closeModal();
}

document.getElementById('addToTableBtn').addEventListener('click', function (event) {
  event.preventDefault(); // Prevent the default form submission behavior
  addToTable();
  generateTableHeaders(); // Call this function to generate the table headers dynamically
});

let tableHeadersGenerated = false;

function generateTableHeaders() {
  if (!tableHeadersGenerated) {
    const table = document.getElementById('data-table');
    const thead = table.createTHead();
    const row = thead.insertRow();

    const headers = ['Имя', 'возраст', 'Фамилия', 'дата рождения','Номер паспорта' ,'Страна','Серия паспорта','Пол'];

    headers.forEach((headerText) => {
      const th = document.createElement('th');
      th.textContent = headerText;
      row.appendChild(th);
    });

    tableHeadersGenerated = true;
  }
}