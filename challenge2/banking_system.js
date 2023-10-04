class BankAccount {
    constructor(saldo) {
        this.saldo = saldo;
    }

    deposit(angka) {
        setTimeout(() => {
            try {
                if (!isNaN(angka) && angka > 0) {
                    this.saldo += angka;
                    document.getElementById("balance").textContent = this.saldo;
                    setTimeout(() => {
                        alert(`Saldo anda sebesar ${angka} telah berhasil ditambahkan.`);
                    }, 2000);
                } else {
                    throw new Error(alert("Saldo harus berupa angka dan lebih besar dari 0."));
                }
            } catch (error) {
                console.error(error.message);
            }
        }, 2000); // Simulate a 2-second delay
    }

    withdraw(angka) {
        setTimeout(() => {
            try {
                if (angka <= 0) {
                    throw new Error("Invalid withdrawal angka.");
                }
                if (angka > this.saldo) {
                    throw new Error("Insufficient balance for withdrawal.");
                }
                this.saldo -= angka;
                document.getElementById("balance").textContent = this.saldo;
                alert(`Withdrawal of $${angka} successful.`);
            } catch (error) {
                console.error(error.message);
            }
        }, 2000); // Simulate a 2-second delay
    }
}

// const account = new BankAccount(0);

class Main extends BankAccount {
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

const account = new Main(0);

function deposit() {
    const depositAmount = parseFloat(prompt("Masukkan jumlah saldo yang ingin ditambahkan"));
    account.deposit(depositAmount);
}

function withdraw() {
    const withdrawAmount = parseFloat(document.getElementById("withdrawAmount").value);
    account.withdraw(withdrawAmount);
}