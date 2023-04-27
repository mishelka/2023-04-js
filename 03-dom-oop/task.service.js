const TASK_URL = 'https://jsonplaceholder.typicode.com/todos';

function getTodoListFromServer() {
    fetch(TASK_URL)
        .then(response => {
            response.json().then(data => {
                tasks = data;
            });
        })
        .catch(err => {
            console.error("Sorry, an error occured", err)
            tasks = [];
        });
    // try {
    //     const response = await fetch(TASK_URL);
    //     if (response.status === 200) {
    //         tasks = await response.json();
    //         return tasks;
    //     }
    // } catch (err) {
    //     console.error("Sorry, an error occured", err);
    //     return [];
    // }
}