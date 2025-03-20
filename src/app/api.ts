import { DepositAccountCommand, DepositMoneyToAccountCommandHandler } from '../application/DepositMoneyToAccountCommandHandler';
import { AccountInMemoryRepository } from '../infra/inMemory/AccountInMemoryRepository'

export const accountRepository = new AccountInMemoryRepository();

export const AccountApi = {
  depositMoneyToAccount: function (payload:Record<string, any>) {
    const commandHandler = new DepositMoneyToAccountCommandHandler(accountRepository);

    commandHandler.handle(new DepositAccountCommand(payload.accountId, payload.amount));
  }
}