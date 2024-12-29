import test, { Page } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

test.beforeEach(async ({page})=>{
    await page.goto('https://www.saucedemo.com')
})

test('user should be logged in successfully with valid credentials', async({page})=>{
    const loginPage = new LoginPage(page)
    await loginPage.login('standard_user','secret_sauce')
    await loginPage.validateSuccessfulLogin()
});

test('error msg should be displayed upon using incorrect username & password', async({page})=>{
    const loginPage = new LoginPage(page)
    await loginPage.login('test','test')
    await loginPage.validateErrorMsgIsDisplayed()
});
test('error msg should be displayed upon using incorrect username & correct password', async({page})=>{
    const loginPage = new LoginPage(page)
    await loginPage.login('test','secret_sauce')
    await loginPage.validateErrorMsgIsDisplayed()
});
test('error msg should be displayed upon using correct username & incorrect password', async({page})=>{
    const loginPage = new LoginPage(page)
    await loginPage.login('standard_user','test')
    await loginPage.validateErrorMsgIsDisplayed()
});