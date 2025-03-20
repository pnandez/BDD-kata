import { Given, When, Then } from '@cucumber/cucumber';
import assert from 'node:assert';
import { Account } from '../../src/domain/Account/Account';
import { accountRepository } from '../../src/app/api';
import { apiCall } from '../test-helpers/api-call';


Given('I have an account with id {int} a balance of ${int}', function (accountId: string, initialBalance: number) {
  this.accountId = accountId
  accountRepository.save(new Account(accountId, initialBalance));

});

When('I deposit ${int}', function (amount: number) {
  apiCall('depositMoneyToAccount', { accountId: this.accountId, amount });
});

Then('my account balance should be ${int}', function (int) {
  const account = accountRepository.find(this.accountId);
  assert(account!.getBalance() === int);
});
