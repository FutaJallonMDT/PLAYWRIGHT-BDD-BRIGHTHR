import { Before, After } from "@cucumber/cucumber";
import { chromium, firefox, webkit, Browser } from '@playwright/test';
import * as fs from "fs";
import { World } from "../support/world"; 


const browsers = { chromium, firefox, webkit };

const config = JSON.parse(fs.readFileSync('settings.json', 'utf-8'));

Before(async function (this: World) {
  const browserName = config.browser.name.toLowerCase();
  const browserType =  browsers[browserName as keyof typeof browsers];

  if (!browserType) {
    throw new Error(`Unsupported browser: ${config.browser.name}`);
  }

  this.browser = await browserType.launch(config.browser);
  this.context = await this.browser.newContext({ viewport: null });
  this.page = await this.context.newPage();
  await this.page.goto(config.app.url);
});

After(async function (this: World) {
  if (this.browser) {
    await this.browser.close();
  }
});