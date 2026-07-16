# Risk-Based Quality Engineering in Practice
[![Playwright Tests - V1](https://github.com/Caitlyn-QA/risk-based-quality-engineering/actions/workflows/playwright-v1.yml/badge.svg?branch=main)](https://github.com/Caitlyn-QA/risk-based-quality-engineering/actions/workflows/playwright-v1.yml)

This project follows the Practice Software Testing application as it evolves across multiple sprint versions.

Rather than treating each version as an unrelated website, the project approaches it as one product evolving over time. Each sprint introduces new functionality, expands existing customer journeys, and creates new opportunities for previously working behaviour to be affected.

The purpose of this project is to demonstrate how a QA engineer approaches software quality throughout an entire sprint. Rather than focusing only on writing automated tests, the project shows how requirements are analysed, products are explored, automation decisions are made, and evidence is gathered to support confidence in the product.

The project combines requirements analysis, exploratory testing, risk analysis, Playwright automation, and continuous review, with an emphasis on making thoughtful engineering decisions rather than simply producing a large number of automated tests.

## Why This Project Exists

Software testing is not only about checking whether individual buttons, fields, or pages work.

A quality engineer must also understand:

- why a feature exists;
- which failures would matter most;
- what information is missing from the requirements;
- what should be investigated through exploratory testing;
- what deserves permanent automated regression coverage;
- what a passing test actually proves;
- what uncertainty still remains before release.

As the website develops from one sprint to the next, the testing approach must evolve with it.

For example, an early sprint may introduce product navigation. A later sprint may add searching and filtering. Testing the later version therefore includes not only checking the new functionality, but also considering whether the changes have affected the original customer journey.

This project demonstrates how quality engineering decisions evolve as software becomes more complex.

## QA Workflow

Each user story follows the same engineering workflow:

- Understand the requirements.
- Explore the implemented behaviour.
- Decide whether automation is justified.
- Design automated test scenarios.
- Implement Playwright tests where appropriate.
- Review and refactor the solution.

Each stage builds upon the previous one.

Understanding the requirements influences exploratory testing. Exploration influences automation decisions. Automation decisions determine which test scenarios are created. The implemented tests are then reviewed and refined based on experience gained during development.

Not every user story results in automated tests.

Sometimes the most valuable engineering decision is to defer automation because the implementation is temporary, unstable, or expected to change significantly in the near future.

## Risk-Based Testing

Not every possible failure carries the same level of risk.

A minor visual inconsistency and an incorrect product price are both defects, but their consequences are very different.

For each user story, the project considers:

- what could fail;
- who would be affected;
- what the consequence could be;
- how likely the failure may be;
- which risks deserve the greatest testing effort.

This helps prioritise testing around customer impact and business value rather than treating every possible scenario as equally important.

## Requirements and Business Understanding

Before testing a user story, the first question is:

Why does this functionality exist?

For example, a search feature does not exist merely so that a customer can enter text into an input field. Its purpose is to help customers find relevant products efficiently and continue towards a purchase.

Testing should therefore protect the real customer and business outcome, not only confirm that the interface responds.

The project also examines ambiguity and gaps in the requirements.

A requirement such as:

The customer can search for products.

does not explain:

- whether search is case-sensitive;
- whether partial words should return results;
- what happens when no products match;
- whether leading or trailing spaces are ignored;
- whether active filters remain applied;
- how matching results should be ordered.

Questions like these are documented during requirements analysis as assumptions or clarification requests before exploratory testing begins.

Identifying missing information is an important part of quality engineering because unclear expectations can lead to inconsistent implementation, incorrect assumptions, and missed defects.

## Exploratory Testing

Exploratory testing is used to understand how the current implementation behaves before automation decisions are made.

Testing is guided by focused charters and important risks, but it can adapt as new information is discovered.

During exploration, the project may:

observe the normal customer journey;
investigate boundaries and unusual inputs;
combine features and state changes;
interrupt or repeat actions;
follow unexpected behaviour;
identify new questions and risks;
gather evidence for automation decisions.

Exploration also helps determine whether the implementation is mature enough to justify automation.

Exploratory testing is treated as structured investigation rather than random clicking.

## Automation Decisions

Not every test should be automated.

Automation decisions consider:

- business importance;
- regression risk;
- feature stability;
- maintenance cost;
- repeatability;
- whether human judgement is required;
- whether UI automation is the most appropriate testing level.

Sometimes the correct engineering decision is to defer automation.

Features that are temporary, incomplete, or expected to change significantly may provide little long-term value as automated regression tests.

A major goal of the project is not only to write Playwright tests, but to decide whether a test should exist and what value it would provide.

For every important automated test, the project asks:

- Which risk does this test protect against?

and

- What does this test actually prove?

## Reliable Playwright Evidence

Playwright is used as the primary automation tool, but automation is not treated as the goal by itself.

The tests are designed to provide reliable evidence around meaningful product risks.

This includes paying attention to:

- stable and meaningful locators;
- strong assertions;
- test independence;
- application and browser state;
- controlled test data;
- API-assisted test data where appropriate;
- clear failure messages;
- false-positive risks;
- maintainable test structure.

A passing test is valuable only when it passes for the correct reason and would fail clearly if the protected behaviour were broken.

## Failure Investigation

A failing automated test does not automatically mean that the application contains a defect.

The cause may come from:

- the product;
- the test implementation;
- test data;
- the environment;
- an unclear or incorrect requirement.

Failures are investigated by reviewing the failed expectation, inspecting Playwright traces, reproducing the behaviour manually, and comparing the result with the intended requirement.

The goal is to understand why the failure occurred rather than changing the test until it becomes green.

## Communicating Quality

Testing does not remove all product risk.

At the end of each sprint, the project records:

- what was investigated;
- what evidence was gathered;
- which risks are protected by automation;
- which automation was intentionally deferred;
- which defects were identified;
- what was not tested;
- what remains uncertain;
- how much confidence the available evidence provides.

A quality engineer does not simply report that the tests passed.

The responsibility is to help the team understand what can reasonably be trusted, what evidence supports that confidence, and what risks still remain before release.
