Feature: Viewing a response
 
  Submit a response and the response can be viewed

  Scenario: Response is submitted and can be viewed
    Given I navigate to the health check form
    When an input value has been checked for all radio buttons
    And 3 words have been entered for text input
    When I submit the form
    And I navigate to the responses page
    Then I am presented with my submitted response


