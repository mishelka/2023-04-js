//array
let tasks = ["Nakupit", "Povysavat", "Naprogramovat", "Kupit auto"];
/*
// document.write(tasks);
// document.write('<br/><br/>');
// document.write('<ul>');
// for (const t of tasks) {
//     document.write('<li>' + t + '</li>');
// }

// for (const i in tasks) {
//     document.write(`<li id="task-${i}">${tasks[i]}</li>`);
// }
// document.write('</ul>');
*/

let persons = [
    { name: "Jano", lastName: "Hrach", age: 18 },
    { name: "Miro", lastName: "Kolesar", age: 25 },
    { name: "Miska", lastName: "Bacikova", age: 38 },
    { name: "Peto", lastName: "Bacik", age: 39 },
];

document.addEventListener("DOMContentLoaded", () => {
    const taskListElem = document.getElementById("taskList");
    // taskListElem.innerHTML += "<li>ahoj</li>";
    taskListElem.innerHTML = '';
    for (const t of tasks) {
        taskListElem.innerHTML += ('<li>' + t + '</li>');
    }

    const personTableElem = document.getElementById("personTable");
    
    personTableElem.innerHTML = '';
    for (const p of persons) {
        personTableElem.innerHTML += (`
            <tr>
                <td>${p.name}</td>
                <td>${p.lastName}</td>
                <td>${p.age}</td>
            </tr>
        `);
    }
});

function addTask(event) {
    event.preventDefault();
    // console.log(event);
    const newTaskElem = document.taskForm.task;
    
    const taskListElem = document.getElementById("taskList");
    taskListElem.innerHTML += ('<li>' + newTaskElem.value + '</li>');

    newTaskElem.value = '';
}