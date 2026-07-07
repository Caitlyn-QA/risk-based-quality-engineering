# Product Detail Playwright Implementation

## Purpose

Document the Sprint 1 Playwright implementation approach for the Product Detail user story.

---

## Automation Decision Summary

**Implemented**

- AC2 – Product information shown
- AC3 – Related products

**Deferred**

- AC1 – Product detail page is displayed from the Product Overview

AC1 is deferred because it depends on the temporary list-based Product Overview implementation, which will be replaced by the planned card-based layout in a future sprint.

---

## Implementation Approach

Product Detail tests should open a known Product Detail page directly instead of navigating through the Product Overview.

This avoids coupling the tests to the temporary Product Overview UI.

---

## Implemented Scenarios

### Scenario 1 – Product Detail displays required product information

The test verifies that the Product Detail page displays:

- product image
- product name
- product description
- product price
- category badge
- brand badge

---

### Scenario 2 – Related products behaviour

Related products appear to be based on the same child category.

The API can be used to identify suitable test data before running the UI test.

The test data should include:

- a product from a child category that contains other products
- a product from a child category that contains no other products

This avoids relying only on hard-coded examples.

---

### Scenario 3 – Selecting a related product opens its Product Detail page

The test verifies that selecting a related product card navigates to the corresponding Product Detail page.

---

## Technical Notes

- Use Playwright `request` to retrieve product data from the API.
- Use the API response to identify suitable products for related-product scenarios.
- Use direct navigation to the Product Detail URL.
- Avoid using Product Overview locators in these tests.
- Keep assertions focused on Product Detail behaviour.