When(/^no input values have been provided$/) do

end

Then(/^I am presented with an error message$/) do  
 expect(page).to have_content "A input value must be given.."
end 