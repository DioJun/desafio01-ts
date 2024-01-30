import { DioAccount } from "./DioAccount";

export class WageAccount extends  DioAccount{
    
    constructor(name: string, accountNumber: number) {
        super(name,  accountNumber);
    }

    // Método adicional que acrescenta +10 ao valor do depósito
    setDepositWithBonus = (deposit: number): number => {
        const bonus = 10;
        const totalDeposit = deposit + bonus;
        this.setDeposit(totalDeposit); // Chamando o método setDeposit da classe base
        return this.getBalance(); // Retornando o novo saldo
    }

    
}