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
            setTimeout(() => {
                alert(`Anda deposit sebesar ${angka}, Saldo anda saat ini sebesar ${this.saldo}`);
            }, 2000);
        }, 2000); // Simulate a 2-second delay
    }

    withdraw(angka) {
        setTimeout(() => {
            this.saldo -= angka;
            document.getElementById("saldo").textContent = this.saldo;
            setTimeout(() => {
                alert(`Anda withdraw sebesar ${angka}, Saldo anda saat ini sebesar ${this.saldo}`);
            }, 2000);
        }, 2000); // Simulate a 2-second delay
    }
}

class Proses extends BankAccount {
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
            if (angka > this.saldo) {
                throw new Error(alert(`Saldo tidak cukup untuk withdraw sebesar ${angka}`));
            }
            super.withdraw(angka);
        } catch (error) {
            console.error(error.message);
        }
    }
}

const account = new Proses({saldo:0});

function deposit() {
    try {
        const depositInput = parseFloat(prompt("Masukkan jumlah saldo yang ingin ditambahkan"));
        account.deposit(depositInput);
    } catch (error) {
        console.error(error.message);
    }
}

function withdraw() {
    try {
        const withdrawInput = parseFloat(prompt("Masukkan jumlah saldo yang ingin dikurangi"));
        account.withdraw(withdrawInput);
    } catch (error) {
        console.error(error.message);
    }
}