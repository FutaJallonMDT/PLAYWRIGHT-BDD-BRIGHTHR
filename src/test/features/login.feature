Feature: login

Scenario: LoginAndaddEmployee

Given I have accessed the SandBoxBrightHrApp Page
When I enter the username "qaAutomationTechTask@grr.la", the password "A1234567890-", and clicks on login button
Then I should Navigate to the Dashboard Page
And I Click on the employee tab on the left-hand side of the panel
Then I should Navigate to the employee hub Page
And I Click on add employee button
And I Enter the employee details
|fname|lname|emailaddress              |phoneNo    | jobTitle       |
|Owen |olaye|futajallonmdt147@gmail.com|07896643555| Software Tester|
And I click save new employee button
Then I will success message displayed on the pop up Modal
And I click add another employee button
And I Enter another employee details
|fname|lname|emailaddress     |phoneNo    | jobTitle |
|Jason|olaye|dfj8578@gmail.com|07896643554| QA Tester|
And I click save new employee button
Then I will success message displayed on the pop up Modal
And I will click the X button
Then I should Navigate to the employee hub Page
Then I should Navigate to the employee tab and verify that both employees are displayed