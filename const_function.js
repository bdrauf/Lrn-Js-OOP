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

const abd = new Person("Abd", "Rauf", "Panam");
abd.sayHello("Budi");

const budi = new Person("Budi", "Sudarsono", "Simpang Tiga");
budi.sayHai("Rauf")

console.log(abd);
console.log(budi);