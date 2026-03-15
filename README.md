# Meal Planner

A personal weekly meal planning PWA — built for home use, optimised for real life.

**[Live demo →](https://rpm1984.github.io/meal-planner)**

---

## What it does

- **Week view** — plan all 7 days across 5 meal slots (pre-workout, breakfast, lunch, dinner, dessert). Swipe left/right to move between days.
- **Macro tracking** — daily progress bars for calories, protein, carbs and fat. Weekly average snapshot against a target (currently 2200 kcal, protein-forward).
- **Meal library** — 30+ meals with full ingredient breakdowns and calculated macros. Filter by category, edit or add your own.
- **Portion guide** — hand-based visual references (palm, fist, cupped hand) with raw/cooked columns so you can cook without a scale.
- **Today overrides** — tweak ingredients for a single day without touching the master recipe. Clears automatically each Monday.
- **Print view** — clean A4 landscape layout with full ingredient lists, aligned across all 7 days, ready for the fridge.

---

## Technical approach

Single HTML file. No framework, no build step, no server. Open it in a browser and it works.

- **Vanilla JS** — all state management, rendering, and data manipulation written by hand. No React, no Vue, no dependencies.
- **localStorage persistence** — meal library and week plan survive browser restarts. Versioned separately so plan changes don't wipe meal data and vice versa.
- **Ingredient-level macro calculation** — macros computed from ingredient weights and per-unit nutritional data, not stored as static numbers. Edit an ingredient amount and totals update instantly.
- **Responsive** — mobile-first (430px, bottom nav, touch swipe) with a desktop breakpoint (top nav, two-pane week view, grid layouts for meals and portions).
- **Print CSS** — separate `@media print` stylesheet hides the app UI entirely and renders a purpose-built grid. Slot rows are padded to equal ingredient counts so everything aligns horizontally across all 7 columns.
- **Data integrity** — `MEALS_VERSION` and `PLAN_VERSION` tracked independently in localStorage. Bumping one doesn't clobber the other.

---

## Why I built it

I was using Cronometer for macro tracking — accurate, but too slow for daily use. The friction of logging every ingredient after eating made it unsustainable.

The insight: I eat the same 8–10 meals on rotation. I don't need a logging tool, I need a planning tool. Define meals once with accurate ingredients, plan the week on Sunday, and the macros are already done. No logging required.

This app is the result of that thinking. It's built around a plan-first workflow rather than a log-after-the-fact workflow.

---

## Stack

| | |
|---|---|
| Language | Vanilla JavaScript (ES6+) |
| Styling | CSS custom properties, no preprocessor |
| Fonts | Syne (headings) + DM Mono (numbers) via Google Fonts |
| Storage | localStorage (JSON) |
| Deployment | GitHub Pages |
| Build tool | None |

---

## Data model

```js
// Meal
{
  id: "c15",
  name: "Satay Chicken",
  emoji: "🥜",
  categories: ["Lunch", "Dinner"],
  ingredients: [
    { n: "Chicken Thigh", a: 150, u: "g", k: 1.4, p: 0.19, c: 0, f: 0.07 },
    // k = kcal/unit, p = protein/unit, c = carbs/unit, f = fat/unit
  ]
}

// Plan
{
  Mon: { Breakfast: "c01", Lunch: "c15", Dinner: "c12", Dessert: "c20" },
  // ...
}

// Day override (per-day ingredient tweak, clears weekly)
{
  "Mon||Dinner": [ ...modified ingredients ]
}
```

---

*Built iteratively over several sessions. All product decisions, nutritional data, and meal design are my own.*
