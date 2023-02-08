//*Class allow you to create multople objects to have the same method and variable
//*! when a child class inherits a parent class, use super(variable on the parent class)

class Person {
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

class Teacher extends Person {
    constructor(name, degree) {
        super(name);
        this.degree = degree;
    }

    teach() {
        console.log("teach");
    }
}

const teacher = new Teacher("Jeremy", "Information Technology");
console.log(teacher);
teacher.teach();
teacher.walk();
