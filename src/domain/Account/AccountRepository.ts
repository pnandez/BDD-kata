import { Account } from './Account';

export interface AccountRepository {
  find(accountId: string): Account | undefined;
  save(account: Account): void;
}