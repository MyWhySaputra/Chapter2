// contoh function
/*
// function declaration
function volTabung(r, t) {
    return 3.14 * r**2 * t
}
console.log(`Volume Tabung: ${volTabung(10, 4)}`);
// Volume Tabung: 1256

// function expression
const volTabung2 = function (r, t) {
    return 3.14 * r**2 * t
}
console.log(`Volume Tabung: ${volTabung2(10, 4)}`);
// Volume Tabung: 1256

// arrow function
const volTabung3 = (r, t) => 3.14 * r**2 * t;
console.log(`Volume Tabung: ${volTabung3(10, 4)}`);
// Volume Tabung: 1256
*/

/*
const strArray = [
    'JavaScript', 'Java', 'Python'
];
function forEach(array, callback) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(callback(array[i]));
    }
    return newArray;
}

const lenArray = forEach(strArray, function (item) {
    return item.length;
});
console.log(lenArray);
// Output: [ 10, 4, 6 ]
*/

// Contoh Inheritance
/*
// Class Human sebagai parent class atau super class
// Memiliki:
// ● Attribute : nama, alamat
// ● Constructor dengan parameter
// ● Ada method buat menampilkan attribute
class Human {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }

    introduce() {
        return `Hello, my name is ${this.name}`;
    }

    work() {
        return `Work!`;
    }
}

// Class Programmer sebagai child class atau sub class
// Syntax extends nunjukin bahwa class Human merupakan class Parent dari class Programmer.
// Memiliki:
// ● Attribute : programmingLanguage
// ● Constructor dengan parameter
// ● Ada method buat menampilkan attribute
class Programmer extends Human {
    constructor(name, address, programmingLanguage) {
        super(name, address); // memanggil constructor dari class Human
        this.programmingLanguage = programmingLanguage;
    }
    introduce() {
        // super.introduce(); = memanggil method dari class Human
        return `${super.introduce()}, I can write ${this.programmingLanguage}.`;
    }
    code() {
        return `Code some, ${this.programmingLanguage[Math.floor(Math.random() * this.programmingLanguage.length)]}`;
    }
}

// Bikin objek baru dari kedua class tersebut dan pakai method yang tersedia di class tersebut
let Wahyu = new Human("Wahyu Saputra", "Jawa Timur");
console.log(Wahyu.introduce()); // Hello, my name is Wahyu Saputra

let Saputra = new Programmer("Saputra", "Jawa Timur", ["JavaScript", "Python", "Java", "C++"]);
console.log(Saputra.introduce()); // Hello, my name is Saputra
console.log(Saputra.code()); // Code some, JavaScript
console.log(Saputra.work()); // Work!

try {
    Wahyu.code(); // Error karena tidak bisa memanggil code dari class parent
} catch (err) {
    console.error(err.message);
}

console.log(Saputra instanceof Human); // true
console.log(Saputra instanceof Programmer); // true
*/

// Contoh Overriding method
/*
class Person {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    introduce() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

class Programmer extends Person {
    constructor(name, address, programmingLanguage) {
        super(name, address);
        this.programmingLanguage = programmingLanguage;
    }
    introduce() {
        super.introduce();
        console.log(`I can write ${this.programmingLanguage}.`);
    }
    code() {
        console.log(`Code some, ${this.programmingLanguage[Math.floor(Math.random() * this.programmingLanguage.length)]}`);
    }
}
let Saputra = new Programmer("Saputra", "Jawa Timur", ["JavaScript", "Python", "Java", "C++"]);
Saputra.introduce();
// Hello, my name is Saputra
// I can write JavaScript/Python/Java/C++
// Penjelasan : Class Programmer bisa melakukan override method dari class Person. Jadi, kalau kita memanggil method introduce dari class Programmer, berarti yang bakal terpanggil adalah method introduce dari class Programmer, bukan dari class Person.
*/

// Contoh overloading method
/*
class Person {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    introduce() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

class Programmer extends Person {
    constructor(name, address, programmingLanguage) {
        super(name, address);
        this.programmingLanguage = programmingLanguage;
    }
    introduce(withDetail) {
        super.introduce();
        Array.isArray(withDetail) ? console.log(`I can write ${this.programmingLanguage}.`) : console.log(`Wrong input!`);
    }
    code () {
        console.log(`Code some, ${this.programmingLanguage[Math.floor(Math.random() * this.programmingLanguage.length)]}`);
    }
}
let Saputra = new Programmer("Saputra", "Jawa Timur", ["JavaScript", "Python", "Java", "C++"]);
Saputra.introduce(['Javascript']);
// Saputra.introduce("Javascript") = Hello, my name is Saputra: Wrong input!
// Saputra.introduce("1") = Hello, my name is Saputra: Wrong input!
Saputra.code();
*/

// Contoh Encapsulation

// Contoh Public
/*
class Human {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    // Ini adalah method public
    introduce() {
        return `Hello, my name is ${this.name}`
    }
    // ini adalah static method public
    static isEating(food) {
        let foods = ["plant", "animal"];
        return foods.includes(food.toLowerCase());
    }
}

let Wahyu = new Human("Wahyu Saputra", "Jawa Timur");
console.log(Wahyu)
// Output: Human { name: 'Wahyu Saputra', address: 'Jawa Timur' }
console.log(Wahyu.introduce());
console.log(Human.isEating("plant")); // true
console.log(Human.isEating("meat")); // false
*/

// Contoh Private
/*
class Human {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    // membuat method private
    #doGossip = () => {
        console.log(`My address is ${this.address}`);
    }
    talk() {
        return `${this.#doGossip()}`; // memanggil method private
    }
    static #isHidingArea = true; // tidak bisa diakses
}

let Wahyu = new Human("Wahyu Saputra", "Jawa Timur");
console.log(Wahyu.talk()); // will run, won't return error!
// output: My address is Jawa Timur
console.log(Wahyu.#doGossip()); // error
*/

// Contoh Protected
/*
class Human {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    _call() {
        console.log(`Call me as a ${this.name}`);
    }
}

class Programmer extends Human {
    constructor(name, address, task, salary) {
        super(name, address);
        this.task = task;
        this.salary = salary;
    }
    docall() {
        super._call();
    }
}

let Wahyu = new Human("Wahyu Saputra", "Jawa Timur");
let Saputra = new Programmer("Saputra", "Jawa Timur", "Programmer", 1000000);
Saputra.docall(); // Call me as a Saputra
console.log(Wahyu._call()); // Call me as a Wahyu Saputra
// Meskipun ini gak error ketika kita paggil protected secara public. tapi, kita harus paham method ini protected, yang semestinya hanya boleh dipanggil di dalam class declaration atau sub-classnya
*/

// Contoh Implementasi Encapsulation
/*
class User {
    // props is object, because it is better that way
    constructor(props) {
        let { email, password } = props; // Destruct
        this.email = email;
        this.encryptedPassword = this.#encrypt(password);
        // we wont't save the plain password
    }
    // private method
    #encrypt = (password) => {
        return `encrypted-version-of-${password}`;
    }
    // Getter
    #decrypt = () => {
        return this.encryptedPassword.split(`encrypted-version-of-`)[1];
    }
    authenticate(password) {
        return this.#decrypt() === password; // will return true or false
    }
}
let Bot = new User({
    email: "bot@bot",
    password: "bot123"
})
const isAuthenticated = Bot.authenticate("bot123");
console.log(isAuthenticated);
// Output: true
*/

// Contoh Abstraction
/*
class Human {
    constructor(props) {
        if (this.constructor === Human) {
            throw new Error("Cannot instantiate from abstract class");
            // Because it's abstract
        }
        let { name, address } = props;
        this.name = name;
        this.address = address;
        this.profession = this.constructor.name;
    }
    work() {
        console.log(`Working...`);
    }
    introduce() {
        console.log(`Hello, my name is ${this.name}`);
    }
}
//Kalau kita coba melakukan instansiasi class Human, yang memang udah ada kondisi buat abstraction, berarti kita bakal dapat pesan error.
try {
    let Saputra = new Human({
        name: "Saputra",
        address: "Jawa Timur"
    })
} catch (error) {
    console.log(error.message);
    // Output: Cannot instantiate from abstract class
}

class Police extends Human {
    constructor(props) {
        super(props);
        this.rank = props.rank;
    }
    work() {
        console.log(`Go to the police station!`);
        super.work();
    }
}

const wiranto = new Police({
    name: "Wiranto",
    address: "Jawa Timur",
    rank: "Sergeant"
})
console.log(wiranto.profession); // output: Police karena nama class ini adalah Police
*/

// Contoh Polymorphism
/*
class Human {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    introduce() {
        console.log(`Hello, my name is ${this.name}`);
    }
    work() {
        console.log(`${this.constructor.name} : Working!`);
    }
}

const PublicServer = Base => class extends Base {
    save() {
        console.log("SFX: Thank You!")
    }
}

const Military = Base => class extends Base {
    shoot() {
        console.log("DOR!")
    }
}

class Doctor extends PublicServer(Human) {
    constructor(props) {
        super(props);
    }
    work() {
        super.work(); // From Human Class
        super.save(); // From PublicServer Class
    }
}

class Police extends PublicServer(Military(Human)) {
    static workplace = "Police Station";
    constructor(props) {
        super(props);
        this.rank = props.rank;
    }
    work() {
        super.work();
        super.shoot(); // From Military Class
        super.save(); // From PublicServer Class
    }
}

class Army extends PublicServer(Military(Human)) {
    static workplace = "Police Station";
    constructor(props) {
        super(props);
        this.rank = props.rank;
    }
    work() {
        super.work();
        super.shoot(); // From Military Class
        super.save(); // From PublicServer Class
    }
}

class Writer extends Human {
    work() {
        console.log("Write books");
        super.work();
    }
}

const Wiranto = new Police({
    name: "Wiranto",
    address: "Jawa Timur",
    rank: "Sergeant"
})

const Prabowo = new Army({
    name: "Prabowo",
    address: "Jawa Barat",
    rank: "Sergeant"
})

const Saputra = new Doctor({
    name: "Saputra",
    address: "Jawa Tengah",
})

const Wahyu = new Writer({
    name: "Wahyu",
    address: "Jawa Barat"
})

Wiranto.shoot(); // DOR!
Prabowo.shoot(); // DOR!

Wiranto.save(); // SFX: Thank You!
Prabowo.save(); // SFX: Thank You!
Saputra.save(); // SFX: Thank You!

Wiranto.work(); // Police : Working! DOR! SFX: Thank You!
Prabowo.work(); // Army : Working! DOR! SFX: Thank You!
Saputra.work(); // Doctor : Working! SFX: Thank You!
Wahyu.work(); // Write books Writer : Working!
*/