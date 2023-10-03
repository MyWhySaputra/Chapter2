// class BankAccount {
//     constructor(initialBalance) {
//         this.balance = initialBalance || 0;
//     }

//     deposit(amount) {
//         setTimeout(() => {
//         try {
//             if (amount <= 0) {
//             throw new Error("Invalid deposit amount.");
//             }
//             this.balance += amount;
//             console.log(`Deposit of $${amount} successful.`);
//             console.log(`Current balance: $${this.balance}`);
//         } catch (error) {
//             console.error(error.message);
//         }
//         }, 2000); // Simulate a 2-second delay
//     }

//     withdraw(amount) {
//         setTimeout(() => {
//         try {
//             if (amount <= 0) {
//             throw new Error("Invalid withdrawal amount.");
//             }
//             if (amount > this.balance) {
//             throw new Error("Insufficient balance for withdrawal.");
//             }
//             this.balance -= amount;
//             console.log(`Withdrawal of $${amount} successful.`);
//             console.log(`Current balance: $${this.balance}`);
//         } catch (error) {
//             console.error(error.message);
//         }
//         }, 2000); // Simulate a 2-second delay
//     }
// }

// // Example usage:
// const account = new BankAccount(1000);

// account.deposit(500);
// account.withdraw(200);
// account.deposit(-100); // Invalid deposit amount.
// account.withdraw(1500); // Insufficient balance for withdrawal.

class BankAccount {
    constructor(initialBalance) {
        this.balance = initialBalance || 0;
    }

    deposit(amount) {
            try {
                if (amount <= 0) {
                    throw new Error("Invalid deposit amount.");
                }
                setTimeout(() => {
                this.balance += amount;
                document.getElementById("balance").textContent = this.balance;
                }, 2000);
                alert(`Deposit of $${amount} successful.`);
            } catch (error) {
                console.error(error.message);
            }
    }

    withdraw(amount) {
        setTimeout(() => {
            try {
                if (amount <= 0) {
                    throw new Error("Invalid withdrawal amount.");
                }
                if (amount > this.balance) {
                    throw new Error("Insufficient balance for withdrawal.");
                }
                this.balance -= amount;
                document.getElementById("balance").textContent = this.balance;
                alert(`Withdrawal of $${amount} successful.`);
            } catch (error) {
                console.error(error.message);
            }
        }, 2000); // Simulate a 2-second delay
    }
}

const account = new BankAccount();

function deposit() {
    const depositAmount = parseFloat(document.getElementById("depositAmount").value);
    account.deposit(depositAmount);
}

function withdraw() {
    const withdrawAmount = parseFloat(document.getElementById("withdrawAmount").value);
    account.withdraw(withdrawAmount);
}