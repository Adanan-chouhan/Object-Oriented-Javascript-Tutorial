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

function admin(...args){
    user.apply(this,args);
    this.role = "Super admin";
}

// inherite user class prototype
admin.prototype = Object.create(user.prototype);

// Add adminInfo Method in admin prototype
admin.prototype.adminInfo = function(){
    console.log(`admin Name is ${this.name} and admin email is ${this.email}`)
}

const userOne = new user("Adnan", "adnchouhan@gmail.com");
const userTwo = new user("Arbaaz", "chouhan@gmail.com");
const adminUser = new admin("Moodhaise","moodhaise@gmail.com");

console.log(adminUser);

// adminUser prototype method call
adminUser.login(); 
adminUser.logout();
adminUser.adminInfo();