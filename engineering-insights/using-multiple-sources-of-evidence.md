# Using Multiple Sources of Evidence to Verify a Requirement

## Background

This investigation was carried out while exploring **Sprint 1 – Browse Products by Category – AC3: Products from selected category**.

The acceptance criterion stated:

> Given the category page is displayed  
> Then only products belonging to the selected category are shown.

At first, this seemed like a simple UI verification.

However, while testing the feature, I realised that the application did not display enough information for me to confidently confirm the requirement from the user interface alone.

This investigation documents how I gathered additional evidence before reaching a conclusion.

---

## Step 1 – Explore the User Interface

I clicked the **Hand Tools** navigation link in the application's main navigation menu.

The application displayed a category page titled:

> Category: Hand Tools

The page showed a list of products with:

- product name;
- price.

I then opened one of the products from the category page.

On the product detail page, the product showed:

- product name;
- product type, for example **Hammer**;
- brand;
- price;
- description.

The category page identified the selected category as **Hand Tools**, but the product detail page identified products only by their product type, for example **Hammer**.

Because the relationship between **Hammer** and **Hand Tools** was not visible in the UI, I could not confirm the acceptance criterion from the interface alone.

### Question

At this point I asked myself:

> Can I confidently verify that every displayed product belongs to the Hand Tools category?

The answer was:

**Not from the UI alone.**

---

## Step 2 – Investigate the Network Requests

Since the UI did not provide enough evidence, I wanted to understand how the application retrieved the product data.

### What I did

1. Opened the browser's Developer Tools.
2. Selected the **Network** tab.
3. Clicked **Fetch/XHR** to display API requests.
4. Refreshed the page.
5. Clicked the **Hand Tools** navigation link again.
6. Opened the request that loaded the category products.

A request appeared:

```text
GET /products?by_category_slug=hand-tools
```

## Step 3 – Inspect the Product Response

I opened the request and selected the Preview or Response tab.

Each returned product contained category information similar to:
```
{
  "category": {
    "id": 3,
    "parent_id": 1,
    "name": "Hammer",
    "slug": "hammer"
  }
}
```
This was useful, but it did not directly say Hand Tools.

Instead, it showed that the product belonged to the Hammer category, with:

parent_id = 1
New Question

What does parent_id = 1 represent?

## Step 4 – Investigate the Category Hierarchy

To understand what parent_id = 1 represented, I explored the available API endpoints and queried:
```
GET /categories

The response showed:

{
  "id": 1,
  "parent_id": null,
  "name": "Hand Tools",
  "slug": "hand-tools"
}
```
It also showed that product types such as:

- Hammer
- Hand Saw
- Wrench
- Screwdriver
- Pliers

all had: parent_id = 1

This confirmed that these product types are child categories of Hand Tools.

## What This Investigation Proved

The user interface alone did not provide enough evidence to verify the acceptance criterion.

However, combining evidence from multiple sources allowed me to understand how the application represented category relationships.

I used:
- the user interface;
- the Network tab;
- the Products API;
- the Categories API.

Together, these confirmed that selecting Hand Tools returned products belonging to child categories under the Hand Tools parent category.

## Why This Matters

If I had relied only on the user interface, I could not have confidently verified the requirement.

The category page showed Hand Tools, and the product detail page showed Hammer, but the UI did not explain the relationship between them.

Instead of assuming that relationship, I investigated the application data and confirmed it through the API.

This produced a stronger and more reliable testing conclusion.

## Key Takeaway

A QA engineer should not stop investigating simply because the UI does not provide enough information.

When necessary, additional evidence can be gathered from:

- browser Developer Tools;
- network requests;
- API responses;
- application data models.

The goal is not to prove a requirement using one source. The goal is to gather enough reliable evidence to explain the application's behaviour with confidence.