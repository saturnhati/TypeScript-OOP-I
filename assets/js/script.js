"use strict";
class MotherAccount {
    constructor(name) {
        this.balanceInit = 0;
        this.name = name;
    }
    deposit(amount) {
        this.balanceInit = this.balanceInit + amount;
        console.log(`Depositati ${amount}$, il saldo dopo il deposito è ${this.balanceInit}$`);
    }
    withdraw(amount) {
        this.balanceInit = this.balanceInit - amount;
        console.log(`Prelevati ${amount}$, il saldo dopo il prelievo è ${this.balanceInit}$`);
    }
    addInterest() {
        this.balanceInit = this.balanceInit * 1.1;
        console.log(`Il saldo dopo gli interessi applicati è ${this.balanceInit}$`);
    }
}
class SonAccount extends MotherAccount {
    addInterest() {
        this.balanceInit = this.balanceInit;
        console.log(`Il saldo è ${this.balanceInit}$, non ci sono interessi applicabili.`);
    }
}
let accountM = new MotherAccount("Mother");
console.log(`${accountM.name} ACCOUNT`);
accountM.deposit(400);
accountM.withdraw(100);
accountM.deposit(600);
accountM.withdraw(400);
accountM.addInterest();
let accountS = new SonAccount("Son");
console.log(`${accountS.name} ACCOUNT`);
accountS.deposit(500);
accountS.withdraw(200);
accountS.deposit(300);
accountS.withdraw(250);
accountS.addInterest();
