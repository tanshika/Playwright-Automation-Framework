import {test, expect} from '../fixtures/pages';
import {PRODUCTS, CHECKOUT_DETAILS} from '../config/testData';

test('Verify Checkout functionality', async ({ loggedIn, inventoryPage, checkoutPage }) => {
    await inventoryPage.addItemToCart(PRODUCTS.backpack);
    const cartCount = await inventoryPage.getCartCount();
    expect(cartCount).toBe('1');
    await inventoryPage.cartIconClick();
    const cartTitle = await checkoutPage.cartPageTitle();
    expect(cartTitle).toBe('Your Cart');
    const itemName = await checkoutPage.addedItemName();
    expect(itemName).toBe(PRODUCTS.backpack);
    await checkoutPage.clickCheckoutButton();
    await checkoutPage.fillCheckoutDetails(
        CHECKOUT_DETAILS.firstName,
        CHECKOUT_DETAILS.lastName,
        CHECKOUT_DETAILS.pincode,
    );
    await expect(checkoutPage.summaryInfo).toBeVisible();
    await checkoutPage.finishButton();
    const completeMessage = await checkoutPage.orderCompleteStatus();
    expect(completeMessage).toBe('Thank you for your order!');
});
