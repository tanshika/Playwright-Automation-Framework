# Playwright Automation Framework

End-to-end UI test suite for [saucedemo.com](https://www.saucedemo.com), built with
[Playwright](https://playwright.dev) and TypeScript using the Page Object Model.

## Features

- **Page Object Model** — page interactions live in `pages/`, kept separate from test assertions.
- **Custom fixtures** — page objects and an authenticated session are injected via Playwright fixtures.
- **Centralized test data** — credentials, URLs, and product data live in `config/testData.ts` and can be overridden with environment variables.
- **TypeScript** — strict type checking via `tsconfig.json`.

## Project structure

```
config/        Test data and credentials (env-overridable)
fixtures/      Custom Playwright fixtures (page objects + auth)
pages/         Page Object Model classes
tests/         Test specs (login, inventory, sorting, checkout, logout)
playwright.config.ts
tsconfig.json
```

## Prerequisites

- [Node.js](https://nodejs.org) 18 or newer
- npm

## Setup

```bash
npm install
npx playwright install --with-deps
```

## Running tests

```bash
npm test              # run all tests (headless)
npm run test:headed   # run with a visible browser
npm run test:ui       # open the Playwright UI runner
npm run report        # open the last HTML report
npm run typecheck     # type-check without running tests
```

## Configuration

`config/testData.ts` reads the following optional environment variables:

| Variable           | Default                     | Description                |
| ------------------ | --------------------------- | ------------------------- |
| `BASE_URL`         | `https://www.saucedemo.com` | Application under test    |
| `STANDARD_USER`    | `standard_user`             | Username for the standard user |
| `STANDARD_PASSWORD`| `secret_sauce`              | Password for the standard user |

Example:

```bash
BASE_URL=https://staging.example.com npm test
```

## Continuous Integration

Tests run automatically on every push and pull request to `main` via
[GitHub Actions](.github/workflows/playwright.yml). The HTML report is
uploaded as a build artifact.
