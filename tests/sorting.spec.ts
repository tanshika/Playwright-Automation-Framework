import {test, expect} from '../fixtures/pages';

test('Verify Product sorting in alpabetical order A-Z', async({loggedIn, inventoryPage, sortingFilter }) => {
    const pageTitle = await inventoryPage.getPageTitle();
    expect(pageTitle).toBe('Products');
    await inventoryPage.verifyAllProductsDisplayed();
    await sortingFilter.selectFilterValue('Name (A to Z)');
    const productNames = await sortingFilter.getProductNames();
    const expected = [...productNames].sort();
    expect(productNames).toEqual(expected);
})

test('Verify Product sorting in alpabetical order Z-A', async({loggedIn, inventoryPage, sortingFilter }) => {
    const pageTitle = await inventoryPage.getPageTitle();
    expect(pageTitle).toBe('Products');
    await inventoryPage.verifyAllProductsDisplayed();
    await sortingFilter.selectFilterValue('Name (Z to A)');
    const productNames = await sortingFilter.getProductNames();
    const expected = [...productNames].sort().reverse();
    expect(productNames).toEqual(expected);
})

test('Verify Product sorting as per price low to high', async({loggedIn, inventoryPage, sortingFilter }) => {
    const pageTitle = await inventoryPage.getPageTitle();
    expect(pageTitle).toBe('Products');
    await inventoryPage.verifyAllProductsDisplayed();
    await sortingFilter.selectFilterValue('Price (low to high)');
    const actualPrices = await sortingFilter.getProductPrices();
    const expectedPrices = [...actualPrices].sort((a, b) => a - b);
    expect(actualPrices).toEqual(expectedPrices);
})

test('Verify Product sorting as per price high to low', async({loggedIn, inventoryPage, sortingFilter }) => {
    const pageTitle = await inventoryPage.getPageTitle();
    expect(pageTitle).toBe('Products');
    await inventoryPage.verifyAllProductsDisplayed();
    await sortingFilter.selectFilterValue('Price (high to low)');
    const actualPrices = await sortingFilter.getProductPrices();
    const expectedPrices = [...actualPrices].sort((a, b) => b - a);
    expect(actualPrices).toEqual(expectedPrices);
})
