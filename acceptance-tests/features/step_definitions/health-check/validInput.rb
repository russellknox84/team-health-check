require 'rest-client'

Given(/^I navigate to the health check form$/) do
  visit config['health_check']
end

When(/^an input value has been checked for all radio buttons$/) do
    radio_buttons = all('#radio_buttons')
    radio_buttons.each_with_index do |row, index|
      selectorId = index + 1
      choose "Q#{selectorId}-1"
    end
end

And(/^3 words have been entered for text input$/) do
  fill_in 'Q10', :with => "one two three"
end

When(/^I submit the form$/) do
    click_button 'submit_form'
end

Then(/^I am presented with no error message$/) do
  page.should have_no_content("An input value must be given.")
end



