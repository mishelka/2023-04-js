const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

async function getPersonsFromServer() {
    try {
        const response = await fetch(USERS_URL);
        if (response.status === 200) {
            data = await response.json();
            return data;
        }
    } catch (err) {
        console.error("Sorry, an error occured", err);
        return [];
    }
}

async function addPersonToServer(newPerson) {
    try {
        response = await fetch(USERS_URL, {
            method: 'post',
            body: JSON.stringify(newPerson),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        if (response.status === 204) {
            console.log("Person successfully stored!");
        }
        //return await response.json();
    } catch (error) {
        console.error(error);
    }
}