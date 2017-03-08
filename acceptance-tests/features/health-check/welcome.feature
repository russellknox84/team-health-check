Feature: Welcome
 
  Presented with Health Check Page

  Scenario: valid submission of the team health check form
    Given I navigate to the health check form
    When an input value has been checked for all radio buttons
    And 3 words have been entered for text input
    When I submit the form
    Then I am presented with no error message
    
  Scenario: invalid submission of the team health check form
    Given I navigate to the health check form
    When no input values have been provided
    When I submit the form
    Then I am presented with an error message


