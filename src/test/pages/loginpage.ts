import { Page, Locator, expect } from '@playwright/test';


export class loginpage {

  readonly page: Page;
  readonly username: Locator;
  readonly password: Locator;
  readonly loginBtn: Locator

   constructor(page: Page) {
    this.page = page;
    this.username = page.locator('#username');
    this.password = page.locator('#password'); 
    this.loginBtn = page.getByRole('button', { name: 'Login' });
    
    
   }
    
   async expectOnLoginPage() {
  await expect(this.username).toBeVisible();

  }

  async EnterUserloginDetails(user: string, pass: string) {
    await this.username.fill(user);
    await this.password.fill(pass);
    await this.loginBtn.click();
  
  }

}

