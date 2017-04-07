Feature: Viewing a response
 
  Submit a response and the response can be viewed

 Scenario: valid submission of the team health check form
    Given I navigate to the health check form
    When an input value has been checked for all radio buttons
    And 3 words have been entered for text input
    When I submit the form
    Then I am taken to the sucess page


