import './lesson11.scss'

// function test() {
//     console.log('Test');
// }
//
// function  greeting (){
//     console.log('Hello my name is, ' + this.name);
// }
//
// const person = {
//     name: 'John',
//     age: 30,
//     greet: greeting,
//
// };
// };
//
// const person2 = {
//     name: 'Jack',
//     age: 30,
//     greet: greeting,
//
// };
// };
//
// person.greet();
// person2.greet();


// function  greeting (){
//     console.log (this);
//     console.log('Hello my name is, ' + this.name, 'I am ' + this.age, 'years old');
// }
//
// function Developer(name, age, language) {
//     this.name = name;
//     this.age = age;
//     this.language = language;
//     this.greet = greeting;
// }
//
// const developer = new Developer('John', 30);
// const developer2 = new Developer('Lola', 19);
// const developer3 = new Developer('Lili', 16);
// const developer4 = new Developer('Monica', 35);
// const developer5 = new Developer('Pusya', 67);
// const developer6 = new Developer('Jacklin', 56);
// const developer7 = new Developer('Jackass', 26);
//
//
// developer.greet();
// developer2.greet();
// developer3.greet();
// developer4.greet();
// developer5.greet();
// developer6.greet();
// developer7.greet();

//
// const products = [
//     {
//         title: 'Test',
//         price: '2500'
//     },
//     {
//         title: 'Test',
//         price: '2500'
//     },
//     {
//         title: 'Test',
//         price: '2500'
//     },
// ];
//
// function calcTotal(param) {
//     let total = 0;
//     for(let i=0; i < param.length; i++) {
//     const number = Number(param[i].price);
//
//     if(isNaN(number) === false) {
//
//     }


//
// }
// return total;
// }
//
//
// const totalPrice = calcTotal(['2500', 350, '45', 87]);

// function  greeting (){
//     console.log (this);
//     console.log('Hello my name is, ' + this.name);
// }
//
//
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.greet = greeting;
//
// }
//
// const person = new Person('John', 30);
// const person2 = new Person('Jack', 20);
//
// person.greet();
// person2.greet();

// function  greeting (){
//     console.log (this);
//     console.log('Hello my name is, ' + this.name);
// }
//
//
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.greet = greeting;
//
// }
//
// const person = new Person('John', 30);
// const person2 = new Person('Jack', 20);
//
// person.greet();
// person2.greet();


function  greeting (){
    console.log (this);
    console.log('Hello! I am  ' + this.name + ' and my owner`s name ' + this.owner);
}

function Animal(name, owner) {
    this.name = name;
    this.owner = owner;
    this.greet = greeting;

}
function Horse(name, owner, place) {
    this.name = name;
    this.owner = owner;
    this.greet = greeting;
    this.place = place;
    this.horse = function () {
        console.log( ' and my favorite place is ' + this.place);
    }
}

function Bird(name, owner, place, weight) {
    this.name = name;
    this.owner = owner;
    this.greet = greeting;
    this.place = place;
    this.weight = weight;
    this.bird = function () {
        console.log( ' and my favorite place is ' + this.place + ' in view of that I am bird, I have a small weight like a ' + this.weight);
    }
}

const animal = new Animal('Kitty', 'Lola');
const animal2 = new Animal('Sharik', 'Jacklin');
const animal3 = new Horse('Baron', 'Lisa', 'San-Francisco');
const animal4 = new Horse('Lucky', 'Happy', 'Arizona');
const animal5 = new Bird('Pippy', 'Carol', 'Ecuador', '200 gr');

animal.greet();
animal2.greet();
animal3.greet();
animal3.horse();
animal4.greet();
animal4.horse();
animal5.greet();
animal5.bird();

