class User {
    constructor(name, email, age) {
        this.name = name;
        this.email = email
        this.age = age;
    }

    login() {
        console.log(this.email, "just logged in");
        return this;
    }

    logout() {
        console.log(this.email, "just logged out");
        return this;
    }
}

// use extends Keyword inherit User class
class Admine extends User {
    deleteUser(user) {
        users = users.filter(u => {
            return u.email !== user.email;
        });
    }
}

const userOne = new User("Adnan", "adnchouhan@gmail.com", 21);
const userTwo = new User("Arbaaz", "chouhan@gmail.com", 19);

const admineUser = new Admine("Moodhaise", "moodhaise@gmail", 25);

let users = [userOne, userTwo];

// delete userOne in users Array 
admineUser.deleteUser(userOne);

// not work Because deleteUser Method is a Admine class not User class
// userOne.deleteUser(userTwo);

console.log(users);