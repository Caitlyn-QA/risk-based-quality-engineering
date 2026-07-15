# Browse Products by Category Test Scenarios

## Purpose

Define the automated test scenarios for the Browse Products by Category user story based on the Sprint 1 automation strategy.

---

## Automation Decision Summary

**Automate**

- AC1 – Category page is displayed
- AC2 – Category title
- AC3 – Products from selected category

---

## Automated Test Scenarios

### Scenario 1 – Category page opens from category navigation

**Covers:** AC1 & AC2

**Given** the user is on the home page  
**When** the user selects a category name  
**Then** the corresponding category page is displayed
**And** the selected category name is shown as the page title.
---

### Scenario 2 – Category page displays only products from the selected category

**Covers:** AC3

**Given** the user opens a category page  
**Then** only products belonging to the selected category are displayed.

---

## Test Data

Use at least one known category from the Sprint 1 navigation.

The API may be used to confirm which products belong to the selected category before validating the UI results.