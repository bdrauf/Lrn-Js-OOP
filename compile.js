function Person(firstName, lastName, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.location = location;
    
    this.sayHello = function (name) {
        console.info(`Hello ${name}, my name is ${this.firstName}, aku tinggal di ${this.location}, kamu tinggal dimana ?`)
    }
    this.sayHai = function (name) {
        console.info(`Hai ${name}, aku tinggal di ${this.location}, kamu ? `)
    }

}

function Manager(firstName, lastName, location) {
    Person.call(this, firstName, this, location);
    this.lastName = lastName;  
}

const abd = new Person("Abd", "Rauf", "Panam");
abd.sayHello("Budi");

const budi = new Person("Budi", "Sudarsono", "Simpang Tiga");
budi.sayHai("Rauf")

const messi = new Manager("Lionel", "Messi", "Gobah")
console.info(messi);


console.log(abd);
console.log(budi);
console.log(messi);