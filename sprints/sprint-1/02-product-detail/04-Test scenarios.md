# Product Detail Test Scenarios

## Purpose

Define the automated test scenarios for the Product Detail user story based on the Sprint 1 automation strategy.

---

## Automation Decision Summary

**Automate**

- AC2 – Product information shown
- AC3 – Related products

**Defer**

- AC1 – Product detail page is displayed

---

## Automated Test Scenarios

### Scenario 1 – Product Detail displays required product information

**Covers:** AC2

**Given** the user opens a known Product Detail page

**Then** the following information is displayed:

- product image
- product name
- product description
- product price
- category badge
- brand badge

---

### Scenario 2 – Related products are displayed when the child category contains other products

**Given** the user opens a Product Detail page for a product whose child category contains other products  
**Then** related products from the same child category are displayed.

---

### Scenario 3 – Related products are not displayed when the child category contains no other products

**Given** the user opens a Product Detail page for a product whose child category contains no other products  
**Then** no related product cards are displayed.

---

### Scenario 4 – Selecting a related product opens its Product Detail page

**Given** the user opens a Product Detail page with related products  
**When** the user selects a related product card  
**Then** the corresponding Product Detail page is displayed.
---

## Deferred Scenario

### Scenario – Product Detail page can be opened from the Product Overview

**Covers:** AC1

This scenario is deferred because accessing the Product Detail page through the Product Overview depends on the temporary list-based implementation.

The scenario should be revisited when the Product Overview reaches its planned card-based implementation.

---

## Test Data

Related products appear to be based on the same child category.

For AC3 automation, test data should include:

- a product from a child category that contains other products
- a product from a child category that contains no other products

The API can be used to identify suitable products before running the UI test.

This avoids relying on hard-coded product examples and makes the test data selection more reliable.