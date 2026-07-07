# Browse Products by Category

## Purpose

Explore the current implementation of category browsing and compare the observed behaviour with the documented requirements.

---

## Environment

- Practice Software Testing
- Sprint 1

---

## Exploration Findings

### AC1 – Category page is displayed

**Expected**

Selecting a category displays a page containing products from that category.

**Observed**

Selecting a category from the navigation bar opens the corresponding category page.

The page loads successfully and displays products for the selected category.

**Result**

✓ Matches the acceptance criteria.

---

### AC2 – Category title

**Expected**

The category name is displayed as the page title.

**Observed**

The selected category name is displayed as the page heading.

**Result**

✓ Matches the acceptance criteria.

---

### AC3 – Products from selected category

**Expected**

Only products belonging to the selected category are displayed.

**Observed**

The displayed products belong to the selected category.

No products from other categories were observed during exploration.

**Result**

✓ Matches the acceptance criteria.

---

## Overall Observations

Category Browsing appears to be implemented as described in the Sprint 1 requirements.

No differences between the documented requirements and the observed behaviour were identified during exploration.

---

## Evidence

### User Interface

Verified that:

- selecting a category opens the corresponding category page
- the category title matches the selected category
- only products from the selected category are displayed

---

## Impact on Test Design

The Category Browsing implementation appears stable and aligns with the documented requirements.

The user journey is clear, and no temporary implementation was identified during exploration.

The feature is a suitable candidate for UI automation in Sprint 1.