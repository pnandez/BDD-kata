import { Account } from '../../domain/Account/Account';
import { AccountRepository } from '../../domain/Account/AccountRepository';

export class AccountInMemoryRepository implements AccountRepository {
  private accounts: Account[] = [];

    find(accountId: string): Account| undefined {
        return this.accounts.find(acc => acc.getId() === accountId);
    }
    save(account: Account) {
      const index = this.accounts.findIndex(acc => acc.getId() === account.getId());
      if (index === -1) {
        this.accounts.push(account);
      } else {
        this.accounts[index] = account;
      }
    }
}