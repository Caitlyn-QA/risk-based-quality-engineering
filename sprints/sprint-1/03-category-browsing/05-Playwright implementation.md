# Browse Products by Category – Playwright Implementation

## Objective

Describe the planned Playwright implementation before writing the automation code.

The goal is to make implementation decisions explicit, keep the automation maintainable, and separate design thinking from the code itself.

---

## Test Structure

The automated test follows a simple Arrange → Act → Assert structure.

### Arrange

- Open the home page.
- Ensure the category navigation is visible.

### Act

- Select a category from the navigation menu.

### Assert

- Verify the category page heading.
- Verify that product results are displayed.
- Verify that the displayed products belong to the selected category.

---

## Page Object Responsibilities

### HomePage

Responsible for:

- opening the application
- navigating to a category

### CategoryPage

Responsible for:

- returning the category heading
- returning the displayed product names

The page objects should encapsulate navigation and page interaction details so future UI changes require minimal updates to the tests.

---

## Test Data Strategy

Use a known category available in the Sprint 1 navigation.

The API may be used to determine which products belong to the selected category before validating the UI.

Using API data avoids relying on hard-coded product names and provides an independent source of expected results.

---

## Locator Strategy

Prefer user-facing locators whenever possible.

Examples include:

- category navigation links
- category heading
- product names

Avoid implementation-specific selectors unless no stable user-facing locator exists.

---

## Assertions

The automation verifies the business behaviour rather than the visual layout.

Assertions include:

- the correct category heading is displayed
- products are displayed for the selected category
- displayed products belong to the selected category

The automation does not verify visual styling or page layout.

---

## Design Decisions

The following implementation decisions have been made:

- Category navigation remains encapsulated within the HomePage page object.
- Expected product data is obtained from the API when appropriate.
- Assertions focus on business behaviour rather than implementation details.
- Navigation logic should remain reusable because the Sprint 2 navigation structure changes.

---

## Maintainability

The implementation should be written so that future UI changes require minimal updates.

Potential future changes include:

- category navigation moving under a dedicated "Categories" menu
- additional product information being displayed
- new category structures

Encapsulating navigation within the page object helps isolate these future changes from the test scenarios.