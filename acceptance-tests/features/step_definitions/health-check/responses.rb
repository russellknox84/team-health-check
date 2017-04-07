Then(/presented with my submitted response/i) do
  page.should have_content("Your response has been submitted")
end

Then(/^I am taken to the sucess page$/) do
  current_path.should == '/'
end
