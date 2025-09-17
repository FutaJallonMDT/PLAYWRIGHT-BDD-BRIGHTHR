import { Browser, BrowserContext, Page } from "@playwright/test";
import { setWorldConstructor, World as CucumberWorld } from "@cucumber/cucumber";

export class World extends CucumberWorld {
  browser?: Browser;
  context?: BrowserContext;
  page?: Page;
}

setWorldConstructor(World);