import { Page } from '@playwright/test';
import { ProductPage } from './productPage';

export class CartPage {
    private page: Page;
    private cartItem = '.cart_item'
    private removeCartItem = '#remove-'
    private cartIcon = '.shopping_cart_link'
    private removedCartItem = '.removed_cart_item'
    constructor(page: Page) {
        this.page = page;
    }
    async gotoCartPage()
    {
        await this.page.click(this.cartIcon)
    }


    async validateCartItem(dashedProductName: string, productName: string, productPrice: string, QTY: string): Promise<void> {
        await this.page.isVisible(this.cartItem);
        await this.page.getByText(productName);
        await this.page.getByText(productPrice);
        await this.page.getByText(QTY);
        await this.page.isVisible(this.removeCartItem + dashedProductName.toLowerCase())
    }
    async removeProductFromCart(dashedProductName: string): Promise<void> {
        let productPage = new ProductPage(this.page)
        await this.page.locator(this.removeCartItem + dashedProductName.toLowerCase()).click()
        await this.page.isVisible(this.removeCartItem)
        await this.page.isHidden(this.cartItem)
        await this.page.isHidden(productPage.cartIconIndicator)


    }

}