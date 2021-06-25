// Creating some variables and a constant

let myName = "Jay"; // block scoped
const numOfStates = 50; // block scoped
var isTrue = true; // function scoped

// Operators

let sum = 5 + 4; // 9
let isGreater = 5 > 4; // true
let product = 231 * sum; // 2079
let opposite = -product;

/* creating 
some 
functions */

function sayHello() {
    alert("Hello World!");
}
sayHello();

function checkAge(name, age) {
    if(age < 21) {
        alert(`Sorry ${name}, you aren't old enough to view this page!`);
    }
}
checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);

const myFavoriteVegetables = ["Potatoes", "Tomatoes", "Cucumbers", "Lettuce", "Spinach", "Green Beans"];
for(let i = 0; i < myFavoriteVegetables.length; i++){
        console.log(myFavoriteVegetables[i]);
};
myFavoriteVegetables.forEach(vegetables => {
    console.log(`---${vegetables}---`);    
});

let people = [
    {name: "Jay", age: 53},
    {name: "Justin", age: 26},
    {name: "Ben", age: 18},
    {name: "Sheila", age: 19},
    {name: "Ivan", age: 91}
];
for(let i = 0; i < people.length; i++){
    checkAge(people[i].name, people[i].age);
};

function getLength(word) {
    return word.length;
};

let lengthOfParameter = getLength('Hello World');
if(lengthOfParameter % 2 == 0) {
    console.log("The world is nice and even!");
} else {
    console.log("The world is an odd place!");
};





