require 'rest-client'

Given(/^I navigate to the application$/) do
  visit config['health_check']
end

Then(/^I am presented with a health check page$/) do
  visit config['health_check']
end

