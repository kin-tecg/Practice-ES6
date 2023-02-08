//* Objects are functions
//* when bind, it will set the value of this permanently

const person = {
    name: "Mohn",
    talk: function () {},
    walk() {
        console.log(this);
    },
};

person.walk();

let walk = person.walk;
walk(); // when calling a method without using the object, you will get the windows object

walk = person.walk.bind(person);
walk(); // after binding with the original object ,it will read the person object
