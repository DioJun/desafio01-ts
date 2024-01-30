// Dio Banking

import {DioAccount} from  './class/DioAccount';
import {PeopleAccount} from  './class/PeopleAccount';
import {CompanyAccount} from  './class/CompanyAccount';
import { WageAccount } from './class/WageAccount';

//PeopleAccount
const peopleAccount: PeopleAccount = new PeopleAccount(10381153967, 'Dionisio', 757)

peopleAccount.setDeposit(15)

peopleAccount.setWithdraw(7)

console.log(peopleAccount)


//CompanyAccount
const companyAccount: CompanyAccount = new CompanyAccount('Empresa XYZ', 246815)

companyAccount.setLoan(120)

console.log(companyAccount)


//WageAccount
const wageAccount:  WageAccount = new WageAccount("Juan", 123456789)

wageAccount.setDepositWithBonus(15)

console.log(wageAccount)