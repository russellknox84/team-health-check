Given(/navigate to the health check form/i) do
  visit config['health_check']
end

When(/input value has been checked for all radio buttons/i) do
    radio_buttons = all('#radio_buttons')
    radio_buttons.each_with_index do |row, index|
      selectorId = index + 1
      choose "Q#{selectorId}-1"
    end
end

And(/3 words have been entered for text input/i) do
  fill_in 'Q10', :with => "one two three"
end

When(/I submit the form/i) do
    click_button 'submit_form'
end

When(/I navigate to the responses page/i) do
  visit config['responses']
end

Given(/I submit a valid response/i) do
  steps %{
    Given I navigate to the health check form
    When an input value has been checked for all radio buttons
    And 3 words have been entered for text input
    When I submit the form
  }
end