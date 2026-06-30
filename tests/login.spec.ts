import {test, expect} from '../fixtures/pages';
import {BASE_URL, USERS} from '../config/testData';

test('Login with valid credentials', async ({ loginPage, page }) => {
    await loginPage.login(USERS.standard.username, USERS.standard.password);
    await expect(page).toHaveURL(`${BASE_URL}/inventory.html`);
});

test('Login with locked out  credentials', async ({ loginPage }) => {
    await loginPage.login(USERS.lockedOut.username, USERS.lockedOut.password);
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toContain('Epic sadface: Sorry, this user has been locked out.');
});
