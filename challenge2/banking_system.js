class BankAccount {
    constructor(params) {
        if (this.constructor === BankAccount) {
            throw new Error("Cannot Access");
        }
        let { saldo } = params;
        this.saldo = saldo;
    }

    deposit(angka) {
        setTimeout(() => {
            this.saldo += angka;
            document.getElementById("saldo").textContent = this.saldo;
        }, 2000); // Simulate a 2-second delay
    }

    withdraw(angka) {
        setTimeout(() => {
            this.saldo -= angka;
            document.getElementById("saldo").textContent = this.saldo;
        }, 2000); // Simulate a 2-second delay
    }

    #private() {
        console.log("This is private");
    }

    _protected() {
        console.log("This is protected");
    }
}

const Alert = Base => class extends Base {
    deposit(angka) {
        super.deposit(angka);
        setTimeout(() => {
            alert(`Anda deposit sebesar ${angka}, Saldo anda saat ini sebesar ${this.saldo}`);
        }, 4000);
    }

    withdraw(angka) {
        super.withdraw(angka);
        setTimeout(() => {
            alert(`Anda withdraw sebesar ${angka}, Saldo anda saat ini sebesar ${this.saldo}`);
        }, 4000);
    }
}

class TryCatch extends Alert(BankAccount) {
    constructor(params) {
        super(params);
    }

    deposit(angka) {
        try {
            if (isNaN(angka)) {
                throw new Error(alert("Saldo harus berupa angka"));
            }
            if (angka <= 0) {
                throw new Error(alert("Saldo harus lebih besar dari 0"));
            }
            super.deposit(angka);
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
            super.withdraw(angka);
        } catch (error) {
            console.error(error.message);
        }
    }
}

const user = new TryCatch({ saldo: 0 });

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