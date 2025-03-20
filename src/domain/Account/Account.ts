export class Account {
  private balance: number;
  private readonly id: string

  constructor(id: string, initialBalance: number) {
    this.id = id;
    this.balance = initialBalance;
  }

  getId() {
    return this.id;
  }

  deposit(amount: number) {
    this.balance += amount;
  }

  getBalance() {
    return this.balance;
  }
}