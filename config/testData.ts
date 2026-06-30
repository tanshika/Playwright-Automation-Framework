/**
 * Centralized test data and credentials.
 * Values can be overridden via environment variables for different environments.
 */

export const BASE_URL = process.env.BASE_URL ?? 'https://www.saucedemo.com';

export const USERS = {
    standard: {
        username: process.env.STANDARD_USER ?? 'standard_user',
        password: process.env.STANDARD_PASSWORD ?? 'secret_sauce',
    },
    lockedOut: {
        username: 'locked_out_user',
        password: 'secret_sauce',
    },
} as const;

export const PRODUCTS = {
    backpack: 'Sauce Labs Backpack',
    bikeLight: 'Sauce Labs Bike Light',
} as const;

export const CHECKOUT_DETAILS = {
    firstName: 'Tanshika',
    lastName: 'Arora',
    pincode: '110019',
} as const;
