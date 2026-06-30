import BasePage from "./BasePage";

class CheckoutPage extends BasePage{

    readonly summaryInfo = this.page.locator('.summary_info');

    async cartPageTitle(){
        return this.page.locator('[data-test="title"]').textContent();
    }

    async addedItemName(){
        return this.page.locator('[data-test="inventory-item-name"]').textContent();
    }

    async clickCheckoutButton(){
        await this.page.getByRole('button', {name: 'checkout'}).click();
    }

    async fillCheckoutDetails(firstname: string, lastname: string, pincode: string){
        await this.page.getByRole('textbox', { name: 'First Name' }).fill(firstname);
        await this.page.getByRole('textbox', { name: 'Last Name' }).fill(lastname);
        await this.page.getByRole('textbox', { name: 'Zip/Postal Code' }).fill(pincode);
        await this.page.locator('[data-test="continue"]').click();

    }

    async finishButton(){
        await this.page.getByRole('button', {name: 'Finish'}).click();

    }

    async orderCompleteStatus(){
        return this.page.locator('[data-test="complete-header"]').textContent();
    }
}


export default CheckoutPage;