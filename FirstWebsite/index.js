console.log('Hello World');

let myName = "Will";
console.log(myName);

let person = {
    age: 20,
    eyeColor: 'brown'
};

console.log(person);

person.eyeColor = 'hazel';
person['age'] = 21;

console.log(person.eyeColor);

let selection = 'eyeColor';
person[selection] = 'green';

console.log(person);
console.log(person.age);

let selectedColors = ['red', 'blue'];
selectedColors[2] = 1;
console.log(selectedColors);            //typeof selectedColors  -> "object"
console.log(selectedColors.length);

function greet(theName){
    console.log('Hello ' + theName);
}

greet('Blake');


