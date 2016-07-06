Feature: Authentication

  Scenario: Successful login
    Given I see the home page
    When I login with valid credentials
    #Then I'm logged in