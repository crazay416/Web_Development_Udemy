function singSong(){
    console.log("DO")
    console.log("REI")
    console.log("ME")
}

function greet(firstName){
    console.log(`firstName is: ${firstName.toUpperCase()}`);
}


const add = (x) => {
    return (x + x)
}

//console.log(add(5));

//singSong()


const greet1 = (message) =>{
    console.log(`Hey ${message}!`)
}

//greet1("Isaiah")


const isSnakeEyes = (num1, num2) => {
    if(num1 === 1 && num2 === 1){
        console.log("Snake Eyes!");
    }
    else{
        console.log("Not Snake Eyes!");
    }
}

//isSnakeEyes(1,1);


const capitalize = (word) => {
    let newWord = word.replace(word[0], word[0].toUpperCase());
    return newWord;
}
//console.log(capitalize("hello"));

const sumArray = array => {
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum;
}

//let array = [5, 4, 3, 2];
//console.log(sumArray(array));


const returnDay = (numDay) =>{
    numDay = numDay - 1;
    const week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    if(numDay < 0 || numDay > 6){
        return null;
    }
    else{
        return week[numDay];
    }   
}

console.log(returnDay(1));
console.log(returnDay(2));
console.log(returnDay(3));
console.log(returnDay(4));
console.log(returnDay(5));
console.log(returnDay(6));
console.log(returnDay(7));