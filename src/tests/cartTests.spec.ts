import test, { Page } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import {ProductPage} from '../pages/productPage';
import { CartPage } from '../pages/cartPage';

test.beforeEach(async ({page})=>{
    await page.goto('https://www.saucedemo.com')
    const loginPage = new LoginPage(page)
    await loginPage.login('standard_user','secret_sauce')
    await loginPage.validateSuccessfulLogin()

})

test('user should be able to add a specific product to cart', async({page})=>{
    const productPage = new ProductPage(page)
    const cartPage = new CartPage(page)
    await productPage.addProductToCart('Sauce Labs Backpack')
    await productPage.getProductNameAndPrice('Sauce Labs Backpack','$29.99')
    await productPage.validateProductIsAddedToCart()
    await cartPage.gotoCartPage()
    await cartPage.validateCartItem('Sauce-Labs-Backpack','Sauce Labs Backpack','$29.99', '1')
});

test('user should be able to remove a specific product from cart', async({page})=>{
    const productPage = new ProductPage(page)
    const cartPage = new CartPage(page)
    await productPage.addProductToCart('Sauce Labs Backpack')
    await productPage.validateProductIsAddedToCart()
    await cartPage.gotoCartPage()
    await cartPage.removeProductFromCart('Sauce-Labs-Backpack')
});