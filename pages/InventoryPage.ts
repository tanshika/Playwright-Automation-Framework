import { Page } from "@playwright/test";
import BasePage from "./BasePage";
import { expect } from "@playwright/test";

class InventoryPage extends BasePage {       

    async getPageTitle(){
        return this.page.locator('.title').textContent();
    }

    async addItemToCart(itemName: string) {
        const slug = itemName.toLowerCase().replace(/ /g, '-');
        await this.page.locator(`[data-test="add-to-cart-${slug}"]`).click();
    }

    async getCartCount() {
        const badge = this.page.locator('[data-test="shopping-cart-badge"]');
        if (await badge.count() === 0) {
            return '0';
        }
        return (await badge.textContent()) ?? '0';
    }

    async removeItemFromCart(itemName: string) {
        const slug = itemName.toLowerCase().replace(/ /g, '-');
        await this.page.locator(`[data-test="remove-${slug}"]`).click();
    }

    async navigateToProductDetails() {
        await this.page.locator('.inventory_item_name').first().click();
    }

    async getProductName() {
        return this.page.locator('.inventory_details_name').textContent();
    }

    async getProductDesc(){
        return this.page.locator('[data-test="inventory-item-desc"]').textContent();
    }

    async getProductPrice(){
        return this.page.locator('[data-test="inventory-item-price"]').textContent();
    }

    async navigateToCart() {
        await this.page.getByRole('button', {name: 'Back to products'}).click();
    }

    async getTotalProductCount(){
        return this.page.locator('[data-test="inventory-item-name"]').count();
    }

    async verifyAllProductsDisplayed(){
        const products = this.page.locator('.inventory_item');
        await expect(products).toHaveCount(6);
        const count = await products.count();
        for (let i = 0; i < count; i++) {
            const product = products.nth(i);
            await expect(product.locator('[data-test="inventory-item-name"]')).toBeVisible();
            await expect(product.locator('[data-test="inventory-item-desc"]')).toBeVisible();
            await expect(product.locator('[data-test="inventory-item-price"]')).toBeVisible();
            await expect(product.locator('.inventory_item_img img')).toBeVisible();
        }
    }

    async cartIconClick(){
        await this.page.locator('[data-test="shopping-cart-link"]').click();
    }
}

export default InventoryPage;