# Why a Mismatch Is Not Always a Product Defect

## The Question

During the AC1 investigation, I found that the application's behaviour did not match the documented acceptance criteria.

At first glance, this looked like a product defect.

However, before reporting it, I considered whether other explanations could account for the mismatch.

---

## Why This Matters

Acceptance criteria describe the expected behaviour.

The application shows the implemented behaviour.

When those two do not match, it is tempting to immediately conclude that the application is wrong.

In reality, there are several possible explanations.

A QA investigation should aim to identify the most likely explanation before raising a defect.

---

## Possible Explanation 1 – The Implementation Is Incorrect

The most obvious possibility is that the application does not behave as intended.

For example:

- the wrong component was implemented;
- a regression changed the behaviour;
- a developer misunderstood the requirement.

If this is confirmed, the issue should be reported as a product defect.

---

## Possible Explanation 2 – The Acceptance Criteria Are Outdated

Requirements can become outdated.

The product may have evolved while the documentation was never updated.

In this situation:

- the application may be correct;
- the documentation may be wrong.

Reporting a product defect would not be appropriate.

Instead, the requirement should be clarified or updated.

---

## Possible Explanation 3 – Feature Flags or Configuration

Modern applications often enable or disable functionality through configuration.

Different users may legitimately see different behaviour because of:

- feature flags;
- customer-specific configuration;
- user permissions;
- A/B testing.

Before raising a defect, it is worth considering whether the observed behaviour could be intentional.

---

## Possible Explanation 4 – Deployment Issues

Sometimes the deployed application does not contain the expected version of the software.

Examples include:

- an incomplete deployment;
- an older build running in one environment;
- deployment failures that left part of the application unchanged.

In these situations, the application may differ from the documented behaviour without the underlying code being incorrect.

---

## Possible Explanation 5 – Environment Differences

Different environments do not always behave identically.

For example:

- Development
- Test
- Staging
- Production

may contain different:

- application versions;
- configuration values;
- test data;
- integrations;
- feature flags.

A behaviour that appears incorrect in one environment may be expected in another.

---

## Key Takeaway

Finding a mismatch between the application and the acceptance criteria is only the beginning of an investigation.

It does **not** automatically prove that the application contains a defect.

A good QA engineer considers multiple possible explanations, gathers evidence, and only then decides whether the issue should be reported as a product defect, clarified with the Product Owner, or investigated further.
