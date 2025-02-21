class user {
    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
}

const userOne = new user("Adnan","adnchouhan@gmile.com",21);
const userTwo = new user("Arbaaz","chouhan@gmile.com",19);

console.log(userOne);
console.log(userTwo);

// the 'new' Keyword 
// - creates a new empty object {}
// - sets tha value of "this" to be the new empty object
// - calls the constructor method