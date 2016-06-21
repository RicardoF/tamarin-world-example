Feature: Do a Google Search
  Using a web browser
  I want to perform a Google search

  Scenario: Google Search
    Given I visit http://google.com
    When I search for "Ben Surgison"
    When I click the "Images" menu link
    Then I expect to see some "Image" results