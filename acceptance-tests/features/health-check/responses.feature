Feature: Viewing a response
 
  Submit a response and the response can be viewed

  Scenario: Response is submitted and can be viewed
    Given I submit a valid response
    And I navigate to the responses page
    Then I am presented with my submitted response


