# Browse Products by Category Playwright Implementation

## Purpose

Document the Sprint 1 Playwright implementation approach for the Browse Products by Category user story.

---

## Automation Decision Summary

**Implemented**

- AC1 – Category page is displayed
- AC2 – Category title
- AC3 – Products from selected category

---

## Implementation Approach

Automate the Category Browsing user story through the visible user journey.

The test should start from the home page, select a category from the navigation bar, and verify that the correct category page is displayed.

---

## Implemented Scenarios

### Scenario 1 – Category page opens from category navigation

The test selects a category name from the navigation bar and verifies that the category page opens.

### Scenario 2 – Category page displays the selected category title

The test verifies that the selected category name is displayed as the page title.

### Scenario 3 – Category page displays only products from the selected category

The test verifies that the products displayed on the category page belong to the selected category.

---

## Test Data Strategy

Use a known category available in the Sprint 1 navigation.

The API may be used to confirm which products belong to the selected category before validating the UI.

This helps avoid relying only on visual inspection or hard-coded assumptions.

---

## Technical Notes

- Start from the home page.
- Select the category using a visible category navigation link.
- Verify the category page heading.
- Verify that product results are displayed.
- Use API data where useful to confirm category-product relationships.
- Keep category navigation logic reusable in case the navigation structure changes in a future sprint.
