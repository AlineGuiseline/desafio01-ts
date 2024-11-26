import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { VipAccount } from './class/VipAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
// Cenário de sucesso: valor a ser sacado menor do que o saldo
peopleAccount.withdraw(15);
/* console.log(peopleAccount.balance) */

// Cenário de falha: valor a ser sacado maior do que o saldo
peopleAccount.withdraw(200);
/* console.log(peopleAccount.balance) */

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20);
// Cenário de sucesso: o empréstimo foi recebido e acrescido ao valor do saldo
companyAccount.getLoan(10);

const vipAccount: VipAccount = new VipAccount('Aline', 123);
// Cenário de sucesso: o depósito foi recebido, acrescido ao valor do saldo e aos
// R$10 de bônus recebido por esta categoria de cliente
vipAccount.deposit(5)