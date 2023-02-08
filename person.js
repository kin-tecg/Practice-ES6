export class Person {
    constructor(name) {
        this.name = name;
    }

    walk() {
        console.log("walk");
    }
}

const person = new Person("Kane");
console.log(person);
person.walk();
