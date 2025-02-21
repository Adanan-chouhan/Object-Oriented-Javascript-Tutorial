// constructore function 
function user(name, email) {
    this.name = name;
    this.email = email;
}

// to use prototype, you need to use prototype Keyword
// Added login method to the user function prototype
user.prototype.login = function () {
    console.log(this.email, "has login in");
}

user.prototype.logout = function () {
    console.log(this.email, "has logged out");
}

const userOne = new user("Adnan", "adnchouhan@gmail.com");
const userTwo = new user("Arbaaz", "chouhan@gmail.com");

// calling Prototype Method login
userOne.login();
console.log(userOne);

// calling Prototype Method logout
userTwo.logout();
console.log(userTwo);
