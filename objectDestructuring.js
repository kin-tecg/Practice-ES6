const address = {
    street: "",
    city: "",
    country: "",
};

//object Desctructuring
const street = address.street;
const city = address.city;
const country = address.country;

const { street, city, country } = address;

//saving the value of address.street into the const st
const { street: st } = address;
