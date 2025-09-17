import { Then } from '@cucumber/cucumber';
import { DashboardPage } from '../pages/dashboardpage'; 

let dashboardPage: DashboardPage

 Then('I should Navigate to the Dashboard Page', { timeout: 20000 }, async function () {
  dashboardPage = new DashboardPage(this.page); 
  await dashboardPage.expectOnDashboardPage();
         });

 Then('I Click on the employee tab on the left-hand side of the panel', { timeout: 20000 }, async function () {
          await dashboardPage.employeetabsidePanel.click()
         });

         