import { Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test'; 
import { EmployeeHubPage } from '../pages/employeeHubpage';

let employeeHubPage: EmployeeHubPage;


Then('I should Navigate to the employee hub Page', { timeout: 20000 }, async function () {
  employeeHubPage = new EmployeeHubPage(this.page);
  await employeeHubPage.expectOnEmployeeHubPage();
         });

Then('I Click on add employee button', async function () {
         await employeeHubPage.addEmployeeBtn.click()
         });

         Then('I Enter the employee details', { timeout: 20000 }, async function (dataTable) {
          const [ row ] = dataTable.hashes(); 
          const { fname, lname, emailaddress, phoneNo, jobTitle } = row;
           await employeeHubPage.FillEmployeeDetails(fname, lname, emailaddress, phoneNo, jobTitle);
          
         });

         Then('I click save new employee button', async function () {
            await employeeHubPage.saveEployeeBtn.click()
         });

         Then('I click add another employee button', async function () {
           await employeeHubPage.addAnotherEmployee.click()
         });

         Then('I Enter another employee details', async function (dataTable) {
          const [ row ] = dataTable.hashes(); 
          const { fname, lname, emailaddress, phoneNo, jobTitle } = row;
           await employeeHubPage.FillAnotherEmployeeDetails(fname, lname, emailaddress, phoneNo, jobTitle);
         });

          Then('I will success message displayed on the pop up Modal', async function () {
           await employeeHubPage.popupHeader.waitFor({ state: 'visible', timeout: 5000 });
           await expect(employeeHubPage.popupHeader).toContainText('Success! New employee added');
         });

         Then('I will click the X button', async function () {
           await employeeHubPage.XIconBtn.click()
         });

        Then('I should Navigate to the employee tab and verify that both employees are displayed', { timeout: 20000 }, async function () {
         await employeeHubPage.assertEmployeesAddedVisible();
});