class BankAccount {
    constructor(params) {
        // implementasi Abstraction
        if (this.constructor === BankAccount) {
            throw new Error("Cannot Access");
        }
        let { saldo } = params;
        this.saldo = saldo;
    }

    deposit(angka) {
        setTimeout(() => {
            this.saldo += angka; // rumus
            document.getElementById("saldo").textContent = this.saldo; // mengirim saldo setelah deposit
        }, 2000); // setTimeout 2 detik
    }

    withdraw(angka) {
        setTimeout(() => {
            this.saldo -= angka; // rumus
            document.getElementById("saldo").textContent = this.saldo; // mengirim saldo setelah withdraw
        }, 2000); // setTimeout 2 detik
    }

    // implementasi private
    #private() {
        console.log("This is private");
    }

    // implementasi protected
    _protected() {
        console.log("This is protected");
    }
}

// implementasi Polymorphism
// class Alert
const Alert = Base => class extends Base {
    deposit(angka) {
        super.deposit(angka); // class BankAccount
        setTimeout(() => {
            alert(`Anda deposit sebesar ${angka}, Saldo anda saat ini sebesar ${this.saldo}`);
        }, 4000); // setTimeout 4 detik
    }

    withdraw(angka) {
        super.withdraw(angka); // class BankAccount
        setTimeout(() => {
            alert(`Anda withdraw sebesar ${angka}, Saldo anda saat ini sebesar ${this.saldo}`);
        }, 4000); // setTimeout 4 detik
    }
}

// Implementasi Polymorphism & Inheritance
class TryCatch extends Alert(BankAccount) {
    constructor(params) {
        super(params); // class BankAccount
    }

    deposit(angka) {
        try {
            if (isNaN(angka)) {
                throw new Error(alert("Saldo harus berupa angka"));
            }
            if (angka <= 0) {
                throw new Error(alert("Saldo harus lebih besar dari 0"));
            }
            super.deposit(angka); // class Alert
        } catch (error) {
            console.error(error.message);
        }
    }

    withdraw(angka) {
        try {
            if (isNaN(angka)) {
                throw new Error(alert("Saldo harus berupa angka"));
            }
            if (angka <= 0) {
                throw new Error(alert("Saldo harus lebih besar dari 0"));
            }
            if (angka > saldo) {
                throw new Error(alert(`Saldo tidak cukup. Saldo saat ini sebesar ${saldo}`));
            }
            super.withdraw(angka); // class Alert
        } catch (error) {
            console.error(error.message);
        }
    }
}

const user = new TryCatch({ saldo: 0 }); // deklarasi class TryCatch dengan parameter { saldo: 0 }

function deposit() {
    try {
        const depositInput = parseFloat(prompt("Masukkan jumlah saldo yang ingin ditambahkan"));
        user.deposit(depositInput);
    } catch (error) {
        console.error(error.message);
    }
}

function withdraw() {
    try {
        const withdrawInput = parseFloat(prompt("Masukkan jumlah saldo yang ingin dikurangi"));
        user.withdraw(withdrawInput);
    } catch (error) {
        console.error(error.message);
    }
}