import {test, expect} from '../fixtures/pages';
import {PRODUCTS} from '../config/testData';

test('Verify Product list display after succesful login', async ({ loggedIn, inventoryPage }) => {
    const pageTitle = await inventoryPage.getPageTitle();
    expect(pageTitle).toBe('Products');
    await inventoryPage.verifyAllProductsDisplayed();
});

test('Verify adding single product to cart', async ({ loggedIn, inventoryPage }) => {
    await inventoryPage.addItemToCart(PRODUCTS.backpack);
    const cartCount = await inventoryPage.getCartCount();
    expect(cartCount).toBe('1');
});

test('Verify adding multiple products to cart', async ({ loggedIn, inventoryPage }) => {
    await inventoryPage.addItemToCart(PRODUCTS.backpack);
    await inventoryPage.addItemToCart(PRODUCTS.bikeLight);
    const cartCount = await inventoryPage.getCartCount();
    expect(cartCount).toBe('2');
});

test('Verify removing a product from cart', async ({ loggedIn, inventoryPage }) => {
    await inventoryPage.addItemToCart(PRODUCTS.backpack);
    await inventoryPage.removeItemFromCart(PRODUCTS.backpack);
    const cartCount = await inventoryPage.getCartCount();
    expect(cartCount).toBe('0');
});

test('Verify product details page navigation', async ({ loggedIn, inventoryPage }) => {
    await inventoryPage.navigateToProductDetails();
    const productName =  await inventoryPage.getProductName();
    expect(productName).toBe('Sauce Labs Backpack');
    const productDescription = await inventoryPage.getProductDesc();
    expect(productDescription).toBe('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');
    const productPrice = await inventoryPage.getProductPrice();
    expect(productPrice).toContain('29.99');
    await inventoryPage.navigateToCart();
    const pageTitle = await inventoryPage.getPageTitle();
    expect(pageTitle).toBe('Products');
});
