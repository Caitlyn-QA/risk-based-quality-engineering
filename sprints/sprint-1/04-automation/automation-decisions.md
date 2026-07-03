# Sprint 1 Automation Strategy

## Purpose

Define the automation approach for Sprint 1 based on the product risks, exploratory investigation and test design work.

## Automation Goal

The goal of automation in Sprint 1 is to provide reliable regression coverage for the most important catalogue behaviours.

Automation should support confidence that visitors can:

- view available products;
- recognise key product information;
- open product detail pages;
- continue browsing from product pages.

## Automation Principles

Automated tests should:

- focus on business-critical behaviour;
- avoid duplicating every manual or exploratory check;
- verify stable behaviours that are likely to remain important;
- use clear locators that reflect how users interact with the application;
- fail for meaningful product changes, not fragile implementation details.

## What Should Be Automated

Strong automation candidates include:

- product overview is displayed;
- product information is visible;
- product detail pages can be opened;
- related product navigation works;
- category browsing displays relevant products.

## What Should Not Be Automated Yet

The following should not be automated until the expected behaviour is clarified:

- layout-specific checks where the requirement and implementation may not match;
- checks that depend on uncertain visual presentation details.

## Current Automation Decision

AC1 is a good automation candidate for core product visibility and navigation behaviour.

However, the specific grid/card layout expectation should be clarified before creating an automated check that fails only because of the layout mismatch.