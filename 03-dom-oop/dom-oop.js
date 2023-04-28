"use strict";

let tasks = [];
let persons = [];
let selectedPerson = null;

// // dvere - objekt, state a color - properties/fields/vlastnosti/clenske premenne
// // open, close - metody = funkcie,
// // ktore su sucastou objektu a menia jeho stav

// let dvere = {
//     state: 'closed',
//     color: brown,
//     open: () => { this.state = 'open'; },
//     close: () => { this.state = 'closed'; }
// };
// dvere.open();
// dvere.close();

document.addEventListener("DOMContentLoaded", async () => {
    getTodoListFromServer();
    persons = await getPersonsFromServer();
    renderTaskList();
    renderPersonTable();
});

function renderTaskList() {
    const taskListElem = document.getElementById("taskList");
    // taskListElem.innerHTML += "<div>ahoj</div>";
    taskListElem.innerHTML = '';
    for (const i in tasks) {
        taskListElem.innerHTML += (`
            <div>
                <div class="label">${tasks[i].title}</div>
                <button class="small" onclick="deleteTask(${i})">x</button>
            </div>
        `);
    }
}

const deleteTask = (taskIndex = 0) => {
    delete tasks[taskIndex];
    renderTaskList();
}

const upperCase = () => {
    let elem = document.getElementById("task").value;
    //let elem = document.taskForm.task.value;
    document.getElementById("task").value = elem.toUpperCase();
}

const addTask = event => {
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
            <tr id="person-${i}"
                onclick="renderPersonDetail(${persons[i].id})">
                <td>${persons[i].name}</td>
                <td>${persons[i].email}</td>
                <td>${persons[i].phone}</td>
                <td>
                    <button class="small" onclick="deletePerson(${i})">
                        <img src="img/icon-delete.png" alt="Delete icon" width="16px">
                        Delete
                    </button>
                </td>
            </tr>
        `);
    }
}

async function renderPersonDetail(personIndex) {
    await getPersonFromServer(personIndex);

    const personElem = document.getElementById("personDetail");
    personElem.innerHTML = '';
    
    if(selectedPerson === null) return;
                                            //name -> Name 
    for (const prop in selectedPerson) {
        const value = selectedPerson[prop];
        const label = `<label><small>${prop[0].toUpperCase()}${prop.substring(1)}:</small></label>`;
        let desc = value;
        
        if(prop === 'address') { desc = `${value.street} ${value.city} ${value.zipcode}`; }
        else if (prop === 'company') { desc = `${value.name} (${value.bs})`}
        
        personElem.innerHTML += (`
            <div>${label}</div>
            <div>${desc}</div>
        `);
    }

    displayPersonDetail();
}

function displayPersonDetail() {
    const personElem = document.getElementById("personDetailContainer");
    const overlayElem = document.getElementById("personOverlay");
    personElem.classList.remove("hidden");
    overlayElem.classList.remove("hidden");
}

function hidePersonDetail() {
    const personElem = document.getElementById("personDetailContainer");
    const overlayElem = document.getElementById("personOverlay");
    personElem.classList.add("hidden");
    overlayElem.classList.add("hidden");
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
    console.log("move element");
    const superWidget = document.getElementById("widget1");
    const ul = superWidget.parentNode;
    ul.appendChild(superWidget);
}

function togglePersonForm() {
    const formElem = document.getElementById("personFormContainer");
    formElem.classList.toggle("hidden");
}

function toggleMenuList() {
    const menuList = document.getElementById("menuList");
    menuList.classList.toggle("hidden");
    const menuOverlay = document.getElementById("menuOverlay");
    menuOverlay.classList.toggle("hidden");
}