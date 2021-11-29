/*
We use the setTimeout to let the Browser know to remind JavScript to
come back to that line of code when the amount of time that was
given to the setTimeout function is up
*/

console.log("Sending request to server!");

setTimeout(() => {
    console.log("Here is your data from the server..");
}, 3000);

console.log("I AM AT THE END OF THE FILE!!!");