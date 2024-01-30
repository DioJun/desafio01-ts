export abstract class DioAccount {
  private readonly name: string 
  private readonly accountNumber: number
  private balance: number = 0
  private status:  boolean = true
  private withdraw: number = 0
  private deposit: number = 0
  private loan: number = 0

  constructor(name: string, accountNumber: number) {
      this.name = name
      this.accountNumber = accountNumber
  }

  setDeposit = (deposit: number): number => {
      this.deposit = deposit
      this.balance += deposit
      return this.balance
  }

  setWithdraw = (withdraw: number): number => {
      this.withdraw = withdraw
      if(this.status === true && this.balance > withdraw) {
          this.balance -=withdraw
      } else {
          throw new Error('Saldo insuficiente para saque!')
      }
      return this.balance
  }

  setLoan = (loan: number): number => {
      this.loan = loan
      if(this.status === true){
          this.balance += loan
      } else{
          throw new Error("A conta está fechada.")
      }
      return this.balance
  }

  getName = (): string => {
      return this.name
  }

  getBalance = (): number => {
      return this.balance
  }

  setBalance = (): number => {
      return this.balance
  }

  getDeposit = (): number => {
      return this.deposit
  }

  validateStatus = (): boolean => {
      if  (this.status) {
          return this.status
      }
      throw new Error('Conta inválida')
  }
}

