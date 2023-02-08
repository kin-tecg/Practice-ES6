//* function inside object is a method

const person = {
    name: "",
    walk: function () {},
    talk() {},
};

// *! use only bracket if the key pair can change

person.walk();
person["name"] = "John";
