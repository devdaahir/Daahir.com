// Utility functions for localStorage
function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}
function loadData(key) {
    return JSON.parse(localStorage.getItem(key) || '[]');
}
function renderTable(tableBody, data, columns) {
    tableBody.innerHTML = '';
    data.forEach(item => {
        const row = tableBody.insertRow();
        columns.forEach(col => {
            row.insertCell().textContent = item[col];
        });
    });
}

// Employees form
const addEmployeeForm = document.getElementById('addEmployeeForm');
const employeesTable = document.getElementById('employeesTable').querySelector('tbody');
let employeesData = loadData('employees');
renderTable(employeesTable, employeesData, ['name', 'phone']);
addEmployeeForm.onsubmit = function(e) {
    e.preventDefault();
    const [name, phone] = addEmployeeForm.querySelectorAll('input');
    const employee = { name: name.value, phone: phone.value };
    employeesData.push(employee);
    saveData('employees', employeesData);
    renderTable(employeesTable, employeesData, ['name', 'phone']);
    addEmployeeForm.reset();
};
// Simple SPA navigation: show only the selected section
function showSection(id) {
    document.querySelectorAll('main section').forEach(sec => {
        sec.classList.remove('active');
        sec.style.display = 'none';
    });
    const activeSection = document.getElementById(id);
    activeSection.classList.add('active');
    activeSection.style.display = 'block';
}

// Book form
const addBookForm = document.getElementById('addBookForm');
const booksTable = document.getElementById('booksTable').querySelector('tbody');
let booksData = loadData('books');
renderTable(booksTable, booksData, ['title', 'author']);
addBookForm.onsubmit = function(e) {
    e.preventDefault();
    const [title, author] = addBookForm.querySelectorAll('input');
    const book = { title: title.value, author: author.value };
    booksData.push(book);
    saveData('books', booksData);
    renderTable(booksTable, booksData, ['title', 'author']);
    addBookForm.reset();
};

// Member form
const addMemberForm = document.getElementById('addMemberForm');
const membersTable = document.getElementById('membersTable').querySelector('tbody');
let membersData = loadData('members');
renderTable(membersTable, membersData, ['name', 'phone']);
addMemberForm.onsubmit = function(e) {
    e.preventDefault();
    const [name, phone] = addMemberForm.querySelectorAll('input');
    const member = { name: name.value, phone: phone.value };
    membersData.push(member);
    saveData('members', membersData);
    renderTable(membersTable, membersData, ['name', 'phone']);
    addMemberForm.reset();
};

// Donation form
const addDonationForm = document.getElementById('addDonationForm');
const donationsTable = document.getElementById('donationsTable').querySelector('tbody');
let donationsData = loadData('donations');
renderTable(donationsTable, donationsData, ['donor', 'book']);
addDonationForm.onsubmit = function(e) {
    e.preventDefault();
    const [donor, book] = addDonationForm.querySelectorAll('input');
    const donation = { donor: donor.value, book: book.value };
    donationsData.push(donation);
    saveData('donations', donationsData);
    renderTable(donationsTable, donationsData, ['donor', 'book']);
    addDonationForm.reset();
};

// Customers form
const addCustomerForm = document.getElementById('addCustomerForm');
const customersTable = document.getElementById('customersTable').querySelector('tbody');
let customersData = loadData('customers');
renderTable(customersTable, customersData, ['name', 'phone']);
addCustomerForm.onsubmit = function(e) {
    e.preventDefault();
    const [name, phone] = addCustomerForm.querySelectorAll('input');
    const customer = { name: name.value, phone: phone.value };
    customersData.push(customer);
    saveData('customers', customersData);
    renderTable(customersTable, customersData, ['name', 'phone']);
    addCustomerForm.reset();
};
