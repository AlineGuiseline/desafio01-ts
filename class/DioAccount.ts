export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  balance: number = 100;
  private status: boolean = true;

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  deposit = (deposit: number): void => {
    if(this.validateStatus()){
      let oldBalance = this.balance;
      let newBalance = this.balance += deposit;
      console.log(`Você fez um depósito de R$${deposit}. O seu antigo saldo era de R$${oldBalance} e o seu novo saldo é de R$${newBalance}`)
    }
  }

  withdraw = (withdraw: number): void => {
    if(this.validateStatus()){
      if(this.balance > withdraw){
        this.balance -= withdraw;
        console.log(`Você fez um saque de R$${withdraw}. O seu novo saldo é de R$${this.balance}`)
      } else {
        console.log(`Saque de R$${withdraw} negado. O seu saldo de R$${this.balance} é insuficiente para esta operação`)
      }
    }
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
