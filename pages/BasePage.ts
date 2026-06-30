import { Page } from "@playwright/test";

class BasePage {
    protected readonly page: Page;

    constructor(page: Page){
        this.page = page;
    }

    async navigateTo(url: string) {
        await this.page.goto(url);
    }
}

export default BasePage;