# AC1 – Product Overview Investigation

## Purpose

Investigate whether the home page gives visitors a clear overview of the available products.

The focus is on what a visitor sees first: whether products are easy to recognise, whether important product information is visible, and whether the page supports browsing the catalogue.

## What I Investigated

I investigated AC1 from Sprint 1:

> Given I navigate to the home page
> Then a grid of product cards is displayed showing all products.

The objective was to determine whether the home page presented the product overview as described in the acceptance criteria.

## Initial Observation

Products were visible on the home page, but they were not displayed as a grid of product cards.

Instead, they appeared in a table/list-style layout.

## Reproduction

The issue was reproduced on the home page at desktop size.

Environment:

- Desktop viewport
- Chrome

Steps:

1. Open the Sprint 1 application.
2. Navigate to the home page.
3. Observe the product overview section.

Expected result:

- Products are displayed in a grid of product cards.

Actual result:

- Products are displayed in a table/list-style layout instead of a grid of product cards.

## Alternative Explanations Considered

Because the behaviour was reproducible, I then considered whether another explanation could account for the mismatch before treating it as a product defect.

I considered:

- Responsive layout: ruled out. The issue was reproduced at desktop size, not mobile size.
- Browser compatibility: ruled out. I reproduced the behaviour in Firefox and observed the same table/list-style layout.
- Page loading: ruled out. Products loaded successfully and the product overview was fully visible.
- Missing styles or frontend assets: no obvious loading failure was confirmed during this investigation.
- Browser cache: no evidence was found that an outdated cached version caused the layout.
- Requirement mismatch: still possible. The acceptance criteria may describe an intended layout that differs from the current implementation.

## Investigation Result

The behaviour was reproducible.

Products were visible, but the layout did not match the expected grid of product cards described in AC1.

## Current Conclusion

The observed behaviour does not match the acceptance criteria.

The remaining question is whether the acceptance criteria are still valid for the current Sprint 1 application or whether the implementation differs from the documented requirement.

Further clarification is required before raising a defect.

## Next Step

Use this investigation to support AC1 test design and decide whether the mismatch should be recorded as a defect.
