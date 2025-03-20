import { AccountRepository } from '../domain/Account/AccountRepository';

export class DepositMoneyToAccountCommandHandler {
  constructor(private accountRepository: AccountRepository) {}

  handle(command: DepositAccountCommand) {
    const account = this.accountRepository.find(command.accountId);
    account!.deposit(command.amount);
    this.accountRepository.save(account!);
  }
}

export class DepositAccountCommand {
  constructor(public accountId: string, public amount: number) {}
}