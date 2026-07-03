# Risk-Based Quality Engineering in Practice

This project follows the **Practice Software Testing** application as it evolves across multiple sprint versions.

Rather than treating each version as an unrelated website, the project approaches it as one product evolving over time. Each new sprint introduces additional functionality, new customer journeys and new opportunities for previously working behaviour to be affected.

The purpose of the project is to develop practical skill in risk-based quality engineering: understanding what could go wrong, why it matters to the customer and the business, and what evidence is needed before the product can be trusted.

The project combines exploratory testing, risk analysis and Playwright automation, with an emphasis on making thoughtful testing decisions rather than simply producing a large number of tests.

## Why This Project Exists

Software testing is not only about checking whether individual buttons, fields or pages work.

A quality engineer must also understand:

- why a feature exists;
- which failures would matter most;
- what information is missing from the requirements;
- what should be investigated through exploratory testing;
- what deserves permanent automated regression coverage;
- what a passing test actually proves;
- what uncertainty still remains before release.

As the website develops from one sprint to the next, the testing approach must evolve with it.

For example, an early sprint may introduce product navigation. A later sprint may add searching and filtering. Testing the later version therefore includes not only checking the new functionality, but also considering whether the changes have affected the original product journey.

This project demonstrates how quality decisions change as software becomes more complex.

## Risk-Based Testing

Not every possible failure carries the same level of risk.

A minor visual inconsistency and an incorrect product price are both defects, but their consequences are very different.

For each feature, the project considers:

- what could fail;
- who would be affected;
- what the consequence could be;
- how likely the failure may be;
- which risks should receive the most testing attention.

This helps prioritise testing around customer impact and business value rather than treating every possible scenario as equally important.

## Requirements and Business Understanding

Before testing a feature, the first question is:

> Why does this feature exist?

For example, a search feature does not exist merely so that a customer can enter text into an input field. Its purpose is to help customers find relevant products efficiently and continue towards a purchase.

Testing should therefore protect the real customer and business outcome, not only confirm that the interface responds.

The project also examines gaps and ambiguity in requirements.

A requirement such as:

> The customer can search for products.

does not explain:

- whether search is case-sensitive;
- whether partial words should return results;
- what happens when no products match;
- whether leading or trailing spaces are ignored;
- whether active filters remain applied;
- how matching results should be ordered.

Identifying questions like these is an important part of quality engineering because unclear expectations can lead to inconsistent implementation, incorrect assumptions and missed defects.

## Exploratory Testing

Exploratory testing is used to understand each new feature before deciding what should be automated.

Testing is guided by focused charters and important risks, but it can adapt as new information is discovered.

During exploration, the project may:

- observe the normal customer journey;
- investigate boundaries and unusual inputs;
- combine features and state changes;
- interrupt or repeat actions;
- follow unexpected results;
- identify new questions and risks;
- gather evidence for automation decisions.

Exploratory testing is treated as structured investigation rather than random clicking.

## Automation Decisions

Not every test should be automated.

Automation decisions consider:

- business importance;
- regression risk;
- repeatability;
- feature stability;
- maintenance cost;
- whether human judgment is required;
- whether UI automation is the most suitable testing level.

A major goal of the project is not only to write Playwright tests, but to decide whether a test should exist and what value it would provide.

For every important automated test, the project asks:

> Which risk does this test protect against?

and:

> What does this test actually prove?

## Reliable Playwright Evidence

Playwright is used as the primary automation tool, but automation is not treated as the goal by itself.

The tests are designed to provide reliable evidence around meaningful product risks.

This includes paying attention to:

- stable and meaningful locators;
- strong assertions;
- test independence;
- application and browser state;
- controlled test data;
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

Failures are investigated by reviewing the failed expectation, inspecting Playwright traces, reproducing the behaviour manually and comparing the result with the intended requirement.

The goal is to understand why the failure occurred rather than changing the test until it becomes green.

## Working with AI

AI is used throughout the project as a working partner.

It may assist with:

- identifying possible risks;
- suggesting exploratory scenarios;
- creating an initial Playwright implementation;
- explaining unfamiliar code;
- proposing debugging approaches;
- simplifying automation;
- reviewing documentation and reasoning.

AI-generated suggestions are treated as proposals rather than final answers.

They are reviewed by asking:

- Did AI understand the actual requirement?
- Did it assume or invent product behaviour?
- Does the suggested test protect an important risk?
- Are the assertions strong enough?
- Could the test pass while the product is incorrect?
- Is the solution unnecessarily complicated?
- Can the final code be understood and explained independently?

The goal is to use AI confidently and efficiently while maintaining the knowledge and judgment required to evaluate and improve its work.

## Communicating Quality

Testing does not remove all product risk.

At the end of each sprint, the project records:

- what was investigated;
- what evidence was gathered;
- which risks are protected by automation;
- which defects were identified;
- what was not tested;
- what remains uncertain;
- how much confidence the available evidence supports.

A quality engineer does not simply report that the tests passed.

The responsibility is to help the team understand what can reasonably be trusted and what risk still remains.
