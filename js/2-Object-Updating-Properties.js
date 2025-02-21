let userOne = {
    name: "Adnan-chouhan",
    email: "adananchouhan@gmail.com",
    login() {
        console.log(this.email, "has logged in");
    },
    logout() {
        console.log(this.email, "has logged out");
    }
};

// Updating object Propeties use (.) notation
userOne.name = "Chouhan";
console.log(userOne.name);  // Chouhan

userOne.email = "chouhanadnan@gmail.com";
console.log(userOne.email);    // chouhanadnan@gmail.com

userOne["name"] = "Adnan-chouhan";
console.log(userOne.name);   // Adnan-chouhan
console.log(userOne["name"]);   // Adnan-chouhan

var Prop = `name`;
console.log(userOne[Prop]);   // Adnan-chouhan

Prop = 'email'
console.log(userOne[Prop]);   // chouhanadnan@gmail.com

// Add object Properties 
userOne.age = 21;
console.log(userOne.age);  // 21

userOne.Study = "BCA";
console.log(userOne.Study);  // BCA
