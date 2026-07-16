# Category Browsing – Review and Refactor

## Status

Completed.

Both implemented scenarios are passing.

## Current implementation

The implementation:

- retrieves category data dynamically from the API
- avoids hardcoded categories and products
- uses accessible locators for category navigation
- retrieves the expected product list directly from the API
- compares the displayed products with the API response using product IDs
- validates both product count and product identity

## Review observations

### Dynamic test data

The implementation retrieves categories and expected products from the API instead of relying on hardcoded values. This improves long-term maintainability and reduces the likelihood of brittle tests.

### Multiple sources of evidence

The test combines API responses with UI validation.

The API provides the expected product set, while the UI provides the actual product links displayed to the user. Comparing both increases confidence that the application behaves correctly.

### Stable identifiers

Products are compared using their IDs extracted from the product links rather than their displayed names.

Using IDs avoids issues caused by duplicate or changing product names.

### Locator strategy

The product locator intentionally targets anchor elements whose `data-test` and `href` attributes identify product links.

This reduces the chance of matching unrelated elements.

## Refactoring opportunities

Both scenarios perform similar setup steps:

- retrieving category data
- selecting a category
- navigating to the category page

No helper methods have been introduced at this stage.

The implementation currently prioritises readability. Common setup can be reviewed for extraction once additional category browsing scenarios have been implemented.
