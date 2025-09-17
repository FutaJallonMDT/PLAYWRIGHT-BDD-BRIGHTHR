import { Page,Locator, expect } from '@playwright/test';

export class DashboardPage {
  readonly page: Page;
  readonly header: Locator;
  readonly employeetabsidePanel : Locator

  constructor(page: Page) {
    this.page = page;
    this.header = page.locator('h1');
    this.employeetabsidePanel = page.getByTestId('sideBar').getByRole('link', { name: 'Employees' })
  }

  async expectOnDashboardPage() {
    
    await expect(this.page).toHaveURL(/\/dashboard$/);
    await expect(this.header).toContainText('rota update');

  }
}