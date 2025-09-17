import { Page,Locator, expect } from '@playwright/test';

export class EmployeeHubPage {
  readonly page: Page;
  readonly header: Locator;  
  readonly addEmployeeBtn : Locator
  readonly firstName: Locator
  readonly lastName: Locator
  readonly email: Locator
  readonly phoneNumber: Locator
  readonly jobTit : Locator
  readonly saveEployeeBtn : Locator
  readonly StartdatePicker : Locator
  readonly datePicker: Locator
  readonly goToProfileLink: Locator
  readonly homeLink: Locator
  readonly logoutLink: Locator
  readonly addAnotherEmployee: Locator
  readonly popupHeader : Locator
  readonly XIconBtn: Locator
  readonly maincontentdisplay: Locator


  constructor(page: Page) {
    this.page = page;
    this.header = page.getByRole('heading', { name: 'Employee hub' });  
    this.addEmployeeBtn = page.getByRole('button', { name: 'Add employee' });
    this.firstName = page.getByRole('textbox', { name: 'First name' });
    this.lastName = page.getByRole('textbox', { name: 'Last name' });
    this.email = page.getByRole('textbox', { name: 'Email address' });
    this.phoneNumber = page.getByRole('textbox', { name: 'Phone number (optional)' });
    this.jobTit =  page.getByRole('textbox', { name: 'Job title (optional)' });
    this.saveEployeeBtn = page.getByRole('button', { name: 'Save new employee' });
    this.StartdatePicker= page.locator('#startDate [data-testid="input-selector"]')
    this.datePicker = page.locator("//div[contains(@class, 'DayPicker-Day') and @aria-label='Thu Sep 18 2025']");
    this.goToProfileLink = page.getByRole('link', { name: 'Go to profile' });
    this.homeLink = page.getByRole('link', { name: 'Home' });
    this.logoutLink = page.getByRole('link', { name: 'Logout' });
    this.addAnotherEmployee = page.getByRole('button', { name: 'Add another employee' })
    this.popupHeader = page.locator("//h1[contains(text(), 'Success! New employee added')]");
    this.XIconBtn = page.locator('[aria-label="Close modal"]');
    this.maincontentdisplay = page.locator('#main-content');
    

  }

  async expectOnEmployeeHubPage() {
    await expect(this.header).toBeVisible();
    await expect(this.header).toHaveText('Employee hub');
  }

  async FillEmployeeDetails(firstname: string, lastname: string, emailadd: string, foneNo: string, jobT: string){
   await this.firstName.fill(firstname)
   await this.lastName.fill(lastname)
   await this.email.fill(emailadd)
   await this.phoneNumber.fill(foneNo)
   await this.StartdatePicker.click();
   await this.datePicker.click();
   await this.jobTit.fill(jobT)

  }

   async FillAnotherEmployeeDetails(firstname: string, lastname: string, emailadd: string, foneNo: string, jobT: string){
   await this.firstName.fill(firstname)
   await this.lastName.fill(lastname)
   await this.email.fill(emailadd)
   await this.phoneNumber.fill(foneNo)
   await this.StartdatePicker.click();
   await this.datePicker.click();
   await this.jobTit.fill(jobT)
  
  }

  async assertEmployeesVisible(employeeNames: string[]) {
    for (const name of employeeNames) {
      await expect(this.maincontentdisplay).toContainText(name);
      console.log(`✅ Verified employee is visible: ${name}`);
    }
  
}
}