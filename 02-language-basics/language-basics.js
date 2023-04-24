let pi = 3.1415;
let x, y, name = 'Dr. Dave';
let numberOfDigits = 10;
const SETTINGS_EASY = 'EASY';
console.log(pi, x, y, name);

let dlheCislo = 12345678901234567;
console.log(dlheCislo);

const obj = {
    firstName: 'Michaela',
    lastName: 'Bacikova',
    age: 30
};
const array = [1, 2, 3, 4];

obj['gender'] = 'female';
console.log(obj);

// delete obj.firstName;
// console.log(obj);

array.push("ahoj");
array.push(true);
array.push(obj);
array[100] = 'sto';
array["firstName"] = 'Michaela';

console.log(array);

// function getMessage() {
//     const amount = Math.round(Math.random() * 100000);
//     const message =
//         "You won " + amount + "\u20AC! \n" +
//         "To collect you winnings, send your credit card\n" +
//         "and bank details to michaela.bacikova@tuke.sk";
//     return message;
// }

const getMessage = function() {
    const amount = Math.round(Math.random() * 100000);
    const message =
        "You won " + amount + "\u20AC! \n" +
        "To collect you winnings, send your credit card\n" +
        "and bank details to michaela.bacikova@tuke.sk";
    return message;
}

console.log(getMessage);

let a = 4; //4
let b = 5; //6

        //    6 +   5 -   4
// console.log(++b + ++a - --a);
//7

//          4   + 5   -   6
// console.log(a++ + b++ - ++a);

// console.log(a++); //vyhodn a; a = a + 1;
// console.log(++a); //a = a + 1; vyhodn a;
// console.log(a);

console.log(b%a);

a += 10;
a = a + 10;

console.log(a >= 5);

console.log("Audi" + "BMW");

const theDay = 3;
switch (theDay) {
    case 5: document.write("Finally Friday"); break;
    case 6: document.write("Super Saturday"); break;
    case 0: document.write("Sleepy Sunday"); break;
    case 4: case 3: document.write("Weekend is near!"); break;
    default: document.write("I'm looking forward to this weekend!");
}

let i = 0;
while (i < 3) {
    document.write("*");
    i++;
}

i = 0; //4
do {
    document.write("*");
} while (i++ < 3);
// ****

i = 0; //4
do {
    document.write("*");
} while (++i < 3);
// ***

for(let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

console.log(">>> FOR IN <<<");
for (const i in array) {
    console.log(array[i]);
}

console.log(">>> FOR OF <<<");
for (const item of array) {
    console.log(item);
}

document.write(">>> BREAK ");
i = 0;
for (;;) {
    if (i === 5)
        break;
    i++;
    if (i === 3)
        continue;
    document.write(i);
}