class user {
    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.score = 0;
    }

    login() {
        console.log(this.email, "just logged in");
        return this;
    }

    logout() {
        console.log(this.email, "just logged out");
        return this;
    }

    updateScore() {
      this.score ++ 
      console.log(this.email, "score is now", this.score);
      return this;
    }
}

const userOne = new user("Adnan", "adananchouhan@gmile.com", 21);
const userTwo = new user("Arbaaz", "chouhan@gmile.com", 19);

userOne.login();
userTwo.logout();

userOne.updateScore();  // adananchouhan@gmile.com score is now 1
userOne.updateScore();  // adananchouhan@gmile.com score is now 2

// return this Keyword in class Method use multippe method call in one line
userOne.login().logout().updateScore().updateScore();

