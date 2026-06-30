import {test, expect} from '../fixtures/pages';
import {BASE_URL} from '../config/testData';

test('Verify Logout', async({loggedIn, logoutPage, page}) => {
    await expect(page).toHaveURL(`${BASE_URL}/inventory.html`);
    await logoutPage.logOut();
    await expect(page).toHaveURL(`${BASE_URL}/`);
})
