class Account {
  balanceInit: number = 0;
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  public deposit(amount: number): void {
    this.balanceInit = this.balanceInit + amount;
    console.log(`Depositati ${amount}$, il saldo dopo il deposito è ${this.balanceInit}$`);
  }
  public withdraw(amount: number): void {
    this.balanceInit = this.balanceInit - amount;
    console.log(`Prelevati ${amount}$, il saldo dopo il prelievo è ${this.balanceInit}$`);
  }
}

class MotherAccount extends Account {
  public addInterest(): void {
    this.balanceInit = this.balanceInit * 1.1;
    console.log(`Il saldo dopo gli interessi applicati è ${this.balanceInit}$`);
  }
}

class SonAccount extends Account {
  public addInterest(): void {
    this.balanceInit = this.balanceInit * 1.1;
    console.log(`Non ci sono interessi applicabili`);
  }
}

let motherAccount = new MotherAccount("Mother");
console.log(`${motherAccount.name} ACCOUNT`);
motherAccount.deposit(400);
motherAccount.withdraw(100);
motherAccount.deposit(600);
motherAccount.withdraw(400);
motherAccount.addInterest();

let sonAccount = new SonAccount("Son");
console.log(`${sonAccount.name} ACCOUNT`);
sonAccount.deposit(500);
sonAccount.withdraw(200);
sonAccount.deposit(300);
sonAccount.withdraw(250);
sonAccount.addInterest();
