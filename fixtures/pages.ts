import { test as base, type Page } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import InventoryPage from '../pages/InventoryPage';
import LogoutPage from '../pages/LogoutPage';
import CheckoutPage from '../pages/CheckoutPage';
import SortingFilter from '../pages/SortingFilter';
import { USERS } from '../config/testData';

type Myfixtures = {
    loginPage: LoginPage;
    inventoryPage: InventoryPage;
    logoutPage: LogoutPage;
    checkoutPage: CheckoutPage;
    sortingFilter: SortingFilter;
    /**
     * Logs in as the standard user and lands on the inventory page.
     * Use this in any test that isn't testing the login flow itself,
     * so each test no longer repeats the login steps.
     */
    loggedIn: void;
};

export const test = base.extend<Myfixtures>({
    loginPage: async ({page}: {page: Page}, use) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await use(loginPage);   
    },

    inventoryPage: async ({page}: {page: Page}, use) => {
        const inventoryPage = new InventoryPage(page);
        await use(inventoryPage);
    },

    logoutPage: async ({page}: {page: Page}, use) => {
        const logoutPage = new LogoutPage(page);
        await use(logoutPage);
    }, 

    checkoutPage: async ({page}: {page: Page}, use) => {
        const checkoutPage = new CheckoutPage(page);
        await use(checkoutPage);
    },

    sortingFilter: async({page}: {page: Page}, use) => {
        const sortingFilter = new SortingFilter(page);
        await use(sortingFilter);
    },

    loggedIn: async ({loginPage}, use) => {
        await loginPage.login(USERS.standard.username, USERS.standard.password);
        await use();
    }

});

export { expect } from '@playwright/test';