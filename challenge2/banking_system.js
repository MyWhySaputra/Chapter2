class BankAccount {
    constructor(saldo) {
        this.saldo = saldo;
    }

    deposit(angka) {
        setTimeout(() => {
            try {
                if (isNaN(angka)) {
                    throw new Error(alert("Saldo harus berupa angka"));
                }
                if (angka <= 0) {
                    throw new Error(alert("Saldo harus lebih besar dari 0"));
                }
                this.saldo += angka;
                document.getElementById("saldo").textContent = this.saldo;
                setTimeout(() => {
                    alert(`Anda deposit sebesar ${angka}, Saldo anda saat ini sebesar ${this.saldo}`);
                }, 2000);
            } catch (error) {
                console.error(error.message);
            }
        }, 2000); // Simulate a 2-second delay
    }

    withdraw(angka) {
        setTimeout(() => {
            try {
                if (isNaN(angka)) {
                    throw new Error(alert("Saldo harus berupa angka"));
                }
                if (angka <= 0) {
                    throw new Error(alert("Saldo harus lebih besar dari 0"));
                }
                if (angka > this.saldo) {
                    throw new Error(alert("Saldo tidak cukup"));
                }
                this.saldo -= angka;
                document.getElementById("saldo").textContent = this.saldo;
                setTimeout(() => {
                    alert(`Anda withdraw sebesar ${angka}, Saldo anda saat ini sebesar ${this.saldo}`);
                }, 2000);
            } catch (error) {
                console.error(error.message);
            }
        }, 2000); // Simulate a 2-second delay
    }
}

class Proses extends BankAccount {
    constructor(saldo) {
        super(saldo);
    }

    deposit(angka) {
        super.deposit(angka);
    }

    withdraw(angka) {
        super.withdraw(angka);
    }
}

const account = new Proses(0);

function deposit() {
    const depositInput = parseFloat(prompt("Masukkan jumlah saldo yang ingin ditambahkan"));
    account.deposit(depositInput);
}

function withdraw() {
    const withdrawInput = parseFloat(prompt("Masukkan jumlah saldo yang ingin dikurangi"));
    account.withdraw(withdrawInput);
}