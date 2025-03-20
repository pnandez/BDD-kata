Feature: Bank Account Management  
  As a bank customer  
  I want to deposit and withdraw money from my account  
  So that I can manage my finances effectively  

  Scenario: Depositing money increases the balance  
    Given I have an account with id 1234 a balance of $100  
    When I deposit $50  
    Then my account balance should be $150  

  Scenario: Withdrawing money decreases the balance  
    Given I have an account with id 1234 a balance of $200  
    When I withdraw $30  
    Then my account balance should be $170  

  Scenario: Cannot withdraw more than available balance  
    Given I have an account with id 1234 a balance of $50  
    When I try to withdraw $100  
    Then the withdrawal should be declined  
    And my account balance should still be $50  

  Scenario: Checking account balance  
    Given I have an account with id 1234 a balance of $300  
    When I check my account balance  
    Then I should see that my balance is $300
    


  Scenario Outline: Multiple deposit and withdrawal transactions  
    Given I have an account with id <account_id> a balance of <starting_balance>  
    When I <transaction_type> <amount>  
    Then my account balance should be <expected_balance>  

  Examples:  
    | account_id | starting_balance | transaction_type | amount | expected_balance |  
    | 5678       | 500             | deposit          | 200    | 700              |  
    | 9012       | 300             | withdraw         | 100    | 200              |  
    | 3456       | 150             | deposit          | 50     | 200              |  
    | 7890       | 400             | withdraw         | 250    | 150              |  