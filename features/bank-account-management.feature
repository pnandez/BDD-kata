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


