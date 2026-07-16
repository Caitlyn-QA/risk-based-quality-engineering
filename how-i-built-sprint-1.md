# Building Sprint 1 – My Workflow and the Reasoning Behind It

This repository is organised around the way I chose to approach Sprint 1.

Rather than starting with Playwright automation, I wanted to document the thinking and decisions that led to each automated test. Every feature follows the same workflow, allowing a reviewer to understand not only the final implementation but also how I arrived there.

---

## Step 1 – I created the Sprint structure

I organised Sprint 1 into four feature folders:

- `01-product-overview`
- `02-product-detail`
- `03-category-browsing`
- `04-contact-form`

Each feature contains its own documentation and implementation.

**Why I chose this approach:**

Rather than organising the repository by activity, I decided to organise it by feature. My goal was to keep the complete journey of each feature—from understanding the requirements through to the final implementation—in one place.

This allows a reviewer to follow a single feature from beginning to end without needing to jump between multiple folders.

---

## Step 2 – I documented the requirements

Each feature begins with:

```text
01-Understand the requirements.md
```

This document records:

- the acceptance criteria
- what is known from the requirements
- assumptions that should not be made
- questions that remain unanswered

**Why I started here:**

Before exploring the application or writing automation, I wanted to understand exactly what the feature was expected to do.

Starting with the requirements helped me separate confirmed behaviour from assumptions and provided a clear reference point for everything that followed.

---

## Step 3 – I explored the product

After understanding the requirements, I explored the application and documented my observations in:

```text
02-Explore the product.md
```

This document captures:

- actual application behaviour
- observations made during exploration
- differences between the application and the documented requirements
- supporting evidence, including API responses where useful

**Why I explored before automating:**

I wanted my automated tests to verify behaviour I had observed rather than assumptions I had made while reading the requirements.

Exploration also helped me discover details that influenced later automation decisions.

---

## Step 4 – I designed the automation strategy

Once I understood how the feature behaved, I documented my automation decisions in:

```text
03-Automation strategy.md
```

This document explains:

- what I decided to automate
- what I intentionally decided not to automate
- the reasoning behind those decisions

**Why I included this step:**

I wanted the repository to show that automation is a series of engineering decisions rather than simply writing Playwright tests for every acceptance criterion.

Making those decisions visible explains the purpose of each automated test and the reasoning behind what was intentionally left for manual testing.

---

## Step 5 – I designed the test scenarios

Before writing any Playwright code, I documented the automated scenarios in:

```text
04-Test scenarios.md
```

These scenarios describe the expected behaviour without focusing on implementation details.

**Why I separated scenarios from implementation:**

I wanted the expected behaviour to be understandable on its own.

By designing the scenarios first, I could review what each automated test should prove before deciding how to implement it.

---

## Step 6 – I implemented the Playwright tests

Only after completing the earlier stages did I begin writing Playwright automation.

The implementation details are documented in:

```text
05-Playwright implementation.md
```

This document records:

- implementation decisions
- API usage
- locator strategy
- technical observations
- important implementation notes

**Why I documented the implementation:**

Rather than treating the Playwright code as the only deliverable, I wanted to capture some of the technical decisions made while implementing the tests.

This makes it easier to understand not only what the code does, but also why it was written that way.

---

## Step 7 – I reviewed and refined the implementation

Once the implementation was complete and the tests were passing, I reviewed the solution in:

```text
06-Review and refactor.md
```

This document records:

- observations about the implementation
- opportunities for improvement
- possible future refactoring
- the current implementation status

**Why I included a review stage:**

Getting a test to pass is only part of the work.

I wanted to demonstrate the habit of looking back at an implementation, evaluating its readability and maintainability, and recording improvements that could be made in the future.

---

## Step 8 – I published the completed work

After reaching a stable point, I committed and pushed the work to GitHub.

The repository also includes a GitHub Actions workflow that automatically executes the Playwright tests.

**Why I included CI:**

I wanted the repository to demonstrate that the automation runs successfully outside my local development environment.

The GitHub Actions workflow provides visible evidence that the project can be built and executed automatically.

---

# Why I built the repository this way

My goal was not simply to publish Playwright tests.

I wanted the repository to demonstrate the thinking that happens before the first line of automation is written.

For every feature, I followed the same process:

- understand the requirements
- explore the product
- design the automation strategy
- design the test scenarios
- implement the automation
- review the implementation
- publish the completed work

For me, Playwright is not the beginning of the testing process—it is the result of understanding the product well enough to automate it with confidence.

I hope this repository demonstrates not only the ability to write automated tests, but also the importance of understanding the product, making deliberate automation decisions, and continuously reviewing and improving the solution.