import { Page } from '@playwright/test';

export class ProductPage {
    private page: Page;
    private addToCartBtn = '#add-to-cart'
    public cartIconIndicator = '.shopping_cart_badge'
    private removeBtn = '#remove'
    constructor(page: Page) {
        this.page = page;
    }

    async addProductToCart(productName: string): Promise<void>{
        await this.page.getByText(productName).click();
        await this.page.click(this.addToCartBtn);
    }

    async getProductNameAndPrice(productName: string, productPrice: string): Promise<void>
    {
        await this.page.getByText(productName);
        await this.page.getByText(productPrice);
    }

    async validateProductIsAddedToCart()
    {
        await this.page.isVisible(this.cartIconIndicator)
        await (await this.page.locator(this.cartIconIndicator).innerText()).match('1')
        await this.page.isHidden(this.addToCartBtn)
        await this.page.isVisible(this.removeBtn)
    }
}