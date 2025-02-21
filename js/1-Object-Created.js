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

console.log(userOne.name);  // object Property calling use (.) dot notation
console.log(userOne.email)
userOne.login();            // object Method call   
userOne.logout();