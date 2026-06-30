import BasePage from "./BasePage";

class SortingFilter extends BasePage{

    async selectFilterValue(value: string){
        await this.page.locator('[data-test="product-sort-container"]')
            .selectOption({ label: value });
    }

    async getProductNames(): Promise<string[]> {
    return await this.page
        .locator('[data-test="inventory-item-name"]')
        .allTextContents();
    }

    async getProductPrices(): Promise<number[]> {
        const prices = await this.page
        .locator('[data-test="inventory-item-price"]')
        .allTextContents();
        return prices.map(price => Number(price.replace('$', '')));
    }

}

export default SortingFilter;