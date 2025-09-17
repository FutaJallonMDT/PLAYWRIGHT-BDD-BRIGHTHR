import { Given, When, Then } from '@cucumber/cucumber';
import {Page, Browser, ChromiumBrowser, expect, chromium } from '@playwright/test'
import { loginpage } from '../pages/loginpage';

let lpage : loginpage;

Given('I have accessed the SandBoxBrightHrApp Page', async function () {
       lpage = new loginpage(this.page);
           await lpage.expectOnLoginPage();
         });

 When('I enter the username {string}, the password {string}, and clicks on login button', async function (user,pass) {
        await lpage.EnterUserloginDetails(user, pass)

         });

