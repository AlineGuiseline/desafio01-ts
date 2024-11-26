import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (loan: number): void => {
    if(this.validateStatus()){
      let oldBalance = this.balance;
      let newBalance = this.balance += loan;
      console.log(`Você recebeu um empréstimo de R$${loan}. O seu antigo saldo era de R$${oldBalance} e o seu novo saldo é de R$${newBalance}`)
    }
  }
}
