function Employee(firstName) {
    this.firstName = firstName;
    this.sayHello = function (name) {
        console.info(`Hello ${name}, my name is ${this.firstName}`)
    }
}

function Manager(firstName, lastName) {
    Employee.call(this, firstName);
    this.lastName = lastName;
}

const messi = new Manager("Lionel", "Messi");
console.info(messi);