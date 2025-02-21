function user(name,email){
    this.name = name;
    this.email = email;
    this.login = function(){
        console.log(this.email, "has logged in");
    }
}

const userOne = new user("Adnan","adnanchouhan@gmail.com");
const userTwo =  new user("Arbaaz","arbaaz@gmail.com")

// userOne login Method calling and userOne Call
userOne.login();
console.log(userOne);

// userTwo login Method calling and userTwo Call
userTwo.login();
console.log(userTwo);