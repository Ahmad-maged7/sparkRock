import { Page } from '@playwright/test';

export class LoginPage {
    private page: Page;
    private usernameField = '#user-name';
    private passwordField = '#password';
    private loginBtn = '#login-button';
    private inventoryContainer = '#inventory_container'

    constructor(page: Page) {
        this.page = page;
    }

    async login(username: string, password: string): Promise<void> {
        await this.page.fill(this.usernameField, username);
        await this.page.fill(this.passwordField, password);
        await this.page.click(this.loginBtn);
    }

    async validateSuccessfulLogin()
    {
        await this.page.isVisible(this.inventoryContainer);
    }

    async validateErrorMsgIsDisplayed()
    {
        await this.page.getByText('Epic sadface: Username and password do not match any user in this service')
    }
}