class BankAccount {
    constructor(params) {
        // implementasi Abstraction
        if (this.constructor === BankAccount) {
            throw new Error("Cannot Access");
        }
        let { saldo } = params;
        this._saldo = saldo;
    }

    deposit(angka) {
        setTimeout(() => {
            this._saldo += angka; // rumus
            document.getElementById("saldo").textContent = this._saldo; // mengirim saldo setelah deposit
        }, 2000); // setTimeout 2 detik
    }

    withdraw(angka) {
        setTimeout(() => {
            this._saldo -= angka; // rumus
            document.getElementById("saldo").textContent = this._saldo; // mengirim saldo setelah withdraw
        }, 2000); // setTimeout 2 detik
    }
}

// implementasi Polymorphism
// class Alert
const ImplAlert = Base => class extends Base {
    deposit(angka) {
        super.deposit(angka); // class BankAccount
        setTimeout(() => {
            alert(`Anda deposit sebesar ${angka}, Saldo anda saat ini sebesar ${this._saldo}`);
        }, 4000); // setTimeout 4 detik
    }

    withdraw(angka) {
        super.withdraw(angka); // class BankAccount
        setTimeout(() => {
            alert(`Anda withdraw sebesar ${angka}, Saldo anda saat ini sebesar ${this._saldo}`);
        }, 4000); // setTimeout 4 detik
    }
}

// Implementasi Polymorphism & Inheritance
class ImplPoly extends ImplAlert(BankAccount) {
    constructor(params) {
        super(params); // class BankAccount
    }

    deposit(angka) {
        try {
            if (isNaN(angka)) {
                throw new Error(alert("Input harus berupa angka"));
            }
            if (angka <= 0) {
                throw new Error(alert("Input harus lebih besar dari 0"));
            }
            super.deposit(angka); // class Alert
            return
        } catch (error) {
            console.error(error.message);
        }
    }

    withdraw(angka) {
        try {
            if (isNaN(angka)) {
                throw new Error(alert("Input harus berupa angka"));
            }
            if (angka <= 0) {
                throw new Error(alert("Input harus lebih besar dari 0"));
            }
            if (angka > this._saldo) {
                throw new Error(alert(`Saldo tidak cukup. Saldo saat ini sebesar ${this._saldo}`));
            }
            super.withdraw(angka); // class Alert
            return
        } catch (error) {
            console.error(error.message);
        }
    }
}

const user = new ImplPoly({ saldo: 0 }); // deklarasi class TryCatch dengan parameter { saldo: 0 }

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