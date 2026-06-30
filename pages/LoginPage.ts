import {Page} from "@playwright/test";
import BasePage from "./BasePage";

class LoginPage extends BasePage {

    async goto() {
    await this.navigateTo('/');
    }

    async login(username: string, password: string) {
        await this.page.getByRole('textbox', { name: 'Username' }).fill(username);
        await this.page.getByRole('textbox', { name: 'Password' }).fill(password);
        await this.page.getByRole('button', { name: 'Login' }).click();
    }

    async getErrorMessage() {
        return this.page.locator('[data-test="error"]').textContent();
    } 
}

export default LoginPage;