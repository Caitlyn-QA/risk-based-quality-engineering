# Category Browsing – Playwright Implementation

## Implemented scenarios

### Scenario 1 – Category page opens from category navigation

Implemented.

The test:

- retrieves the category tree through the API
- selects a root category containing subcategories
- navigates to the application
- selects the category using its accessible name
- verifies navigation to the expected URL
- verifies that the selected category name is displayed as the page heading

---

### Scenario 2 – Only products from the selected category are displayed

Implemented.

The test combines API and UI validation to verify that only the correct products are displayed.

Implementation steps:

- retrieves the category tree through the API
- selects a root category containing subcategories
- retrieves the expected products using the selected category slug
- navigates to the category page
- locates all displayed product links
- verifies that the number of displayed products matches the API response
- extracts product IDs from the displayed product links
- compares the displayed product IDs with the expected product IDs returned by the API

## Implementation notes

The test intentionally compares product IDs rather than product names.

Product IDs provide a stable identifier and avoid relying on UI text.

The expected product set is retrieved through the API using the selected category slug, avoiding hardcoded test data while keeping the test aligned with the application's business logic.