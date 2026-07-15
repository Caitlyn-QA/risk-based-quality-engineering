# Category Browsing – Review and Refactor

## Status

In progress.

The first automated test has been implemented and is passing. It covers:

- opening the selected category page from the home page navigation
- confirming that the selected category name is displayed as the page heading

The remaining scenario, which verifies that only products belonging to the selected category are displayed, is still to be implemented.

## Current Implementation

The existing test:

- retrieves the category tree through the API
- selects a root category that contains subcategories
- locates the matching category link using its accessible name
- reads the link destination before clicking
- verifies navigation to the expected category URL
- verifies that the selected category name is displayed as the page heading

## Review Observations

The test avoids hardcoding a specific category and instead retrieves valid test data from the API.

The category link is located using `getByRole`, which reflects how a user identifies the element.

The expected URL is based on the link's actual `href` value rather than duplicating the route structure inside the test.

The URL and heading assertions remain in the same test because they provide two pieces of evidence for one coherent behaviour: the correct category page has opened.

No refactoring is required at this stage.

A final review will be completed after the remaining product-filtering scenario has been implemented.
