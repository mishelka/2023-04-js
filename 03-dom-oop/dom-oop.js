"use strict";

let tasks = [];
let persons = [];

document.addEventListener("DOMContentLoaded", async () => {
    getTodoListFromServer();
    persons = await getPersonsFromServer();
    renderTaskList();
    renderPersonTable();
});

function renderTaskList() {
    const taskListElem = document.getElementById("taskList");
    // taskListElem.innerHTML += "<li>ahoj</li>";
    taskListElem.innerHTML = '';
    for (const i in tasks) {
        taskListElem.innerHTML += (`
            <li>
                ${tasks[i].title}
                <button onclick="deleteTask(${i})">X</button>
            </li>
        `);
    }
}

function deleteTask(taskIndex) {
    delete tasks[taskIndex];
    renderTaskList();
}

function upperCase() {
    let elem = document.getElementById("task").value;
    //let elem = document.taskForm.task.value;
    document.getElementById("task").value = elem.toUpperCase();
}

function addTask(event) {
    event.preventDefault();
    // console.log(event);
    const newTaskInput = document.taskForm.task;
    
    tasks.push({
        title: newTaskInput.value
    });
    renderTaskList();
    
    newTaskInput.value = '';
}

function personSubmit() {
    const nameInput = document.personForm.name;
    const emailInput = document.personForm.email;
    const phoneInput = document.personForm.phone;

    const newPersonObject = {
        name: nameInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
    };

    addPersonToServer(newPersonObject);

    console.log(newPersonObject);
    persons.push(newPersonObject);
    
    togglePersonForm();
    renderPersonTable();

    return false;
}

function renderPersonTable() {
    const personTableElem = document.getElementById("personTable");
    personTableElem.innerHTML = '';
    for (const i in persons) {
        personTableElem.innerHTML += (`
            <tr id="person-${i}">
                <td>${persons[i].name}</td>
                <td>${persons[i].email}</td>
                <td>${persons[i].phone}</td>
                <td>
                    <button onclick="deletePerson(${i})">
                        <img src="img/icon-delete.png" alt="Delete icon" width="16px">
                        Delete
                    </button>
                </td>
            </tr>
        `);
    }
}

function deletePerson(personIndex) {
    // prvy pristup - zmazem z HTML konkretny riadok tabulky podla jeho id
    // const personRowElem = document.getElementById("person-" + personIndex);
    // console.log(personRowElem);

    // druhy pristup - zmazem z pola persons a prekreslim celu tabulku
    delete persons[personIndex];
    renderPersonTable();

    console.log("deleting person " + personIndex);
}

function moveElement() {
    const superWidget = document.getElementById("widget1");
    const ul = superWidget.parentNode;
    ul.appendChild(superWidget);
}

function togglePersonForm() {
    const formElem = document.getElementById("personFormContainer");
    formElem.classList.toggle("hidden");
}