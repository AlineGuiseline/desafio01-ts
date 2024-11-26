import { DioAccount } from "./DioAccount";

export class VipAccount extends DioAccount {
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber);
    }

    deposit = (deposit: number) => {
        let oldBalance = this.balance;
        let newBalance = this.balance += (deposit + 10);
        console.log(`Você fez um depósito de R$${deposit}. O seu saldo era de R$${oldBalance} e por ser um cliente VIP, você recebe R$10 de crédito, por isso o seu novo saldo é de R$${newBalance}`)
    }
}