// ═══════════════════════════════════════════════
// data.js — edit this file to customise foods,
// default meals, macro targets and slot config.
// ═══════════════════════════════════════════════

// ── Days & Slots ────────────────────────────────
const DAYS      = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
const FULL_DAYS = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
const SLOTS     = ["Pre-Workout","Breakfast","Lunch","Dinner","Snack","Dessert"];

const SLOT_META = {
  "Pre-Workout": {icon:"⚡",  color:"#f0a060"},
  Breakfast:     {icon:"☀️",  color:"#f0d060"},
  Lunch:         {icon:"🌤",  color:"#60c0f0"},
  Dinner:        {icon:"🌙",  color:"#a060f0"},
  Snack:         {icon:"🍎",  color:"#60f0a0"},
  Dessert:       {icon:"🍮",  color:"#f060a0"},
};

// ── Daily macro targets ─────────────────────────
const TARGETS = {
  calories: 2200,
  protein:  170,  // g
  carbs:    226,  // g
  fat:       68,  // g
};

// ── Emoji picker options ────────────────────────
const EMOJIS = ["🥗","🍗","🥚","🐟","🥩","🌱","🥣","🍚","🍝","🥔","🍠","🍞","🥑","🥜","🧀","🍎","🍌","🫐","🥛","🧃","🥦","🫛","🍱","🥙","🌮","🍜","🥘","🍮","🍦","🍫","🍰","🧁","🍽️"];

// ── Food database ───────────────────────────────
// p100 = macros per 100g (or 100ml if unit:"ml")
// portions = selectable sizes shown in the builder
const FOODS = {
  protein: [
    {
      name: "Chicken Breast", emoji: "🍗",
      p100: {cal:165, p:31, c:0, f:4},
      portions: [
        {s:"100g",  g:100, vis:"palm of hand"},
        {s:"150g",  g:150, vis:"large palm"},
        {s:"200g",  g:200, vis:"two palms"},
      ]
    },
    {
      name: "Salmon", emoji: "🐟",
      p100: {cal:208, p:20, c:0, f:13},
      portions: [
        {s:"100g",  g:100, vis:"deck of cards"},
        {s:"150g",  g:150, vis:"palm-sized"},
        {s:"200g",  g:200, vis:"full fillet"},
      ]
    },
    {
      name: "Beef Mince", emoji: "🥩",
      p100: {cal:250, p:26, c:0, f:15},
      portions: [
        {s:"100g",  g:100, vis:"small portion"},
        {s:"150g",  g:150, vis:"medium portion"},
        {s:"200g",  g:200, vis:"large portion"},
      ]
    },
    {
      name: "Eggs", emoji: "🥚",
      p100: {cal:155, p:13, c:1, f:11},
      portions: [
        {s:"2 eggs", g:100, vis:"2 medium eggs"},
        {s:"3 eggs", g:150, vis:"3 eggs"},
        {s:"4 eggs", g:200, vis:"4 large eggs"},
      ]
    },
    {
      name: "Egg Whites", emoji: "🫙", unit: "ml",
      note: "liquid egg whites",
      p100: {cal:47, p:10, c:1, f:0},
      portions: [
        {s:"100ml", g:100, vis:"small glass"},
        {s:"150ml", g:150, vis:"medium pour"},
        {s:"200ml", g:200, vis:"large pour"},
      ]
    },
    {
      name: "Greek Yogurt", emoji: "🥣",
      note: "non-fat",
      p100: {cal:59, p:10, c:4, f:1},
      portions: [
        {s:"100g",  g:100, vis:"small pot"},
        {s:"150g",  g:150, vis:"medium pot"},
        {s:"200g",  g:200, vis:"large bowl"},
      ]
    },
    {
      name: "Whey Protein", emoji: "🧪",
      note: "per scoop ~30g",
      p100: {cal:400, p:83, c:10, f:3},
      portions: [
        {s:"1 scoop",    g:30, vis:"one heaped scoop"},
        {s:"1.5 scoops", g:45, vis:"one and a half"},
        {s:"2 scoops",   g:60, vis:"two scoops"},
      ]
    },
    {
      name: "Tofu", emoji: "🌱",
      p100: {cal:76, p:8, c:2, f:4},
      portions: [
        {s:"100g", g:100, vis:"small block"},
        {s:"150g", g:150, vis:"medium block"},
        {s:"200g", g:200, vis:"large block"},
      ]
    },
    {
      name: "Turkey", emoji: "🦃",
      p100: {cal:189, p:29, c:0, f:7},
      portions: [
        {s:"100g", g:100, vis:"palm of hand"},
        {s:"150g", g:150, vis:"large palm"},
        {s:"200g", g:200, vis:"two palms"},
      ]
    },
    {
      name: "Tuna", emoji: "🐠",
      p100: {cal:132, p:29, c:0, f:1},
      portions: [
        {s:"100g", g:100, vis:"small tin"},
        {s:"150g", g:150, vis:"medium tin"},
        {s:"185g", g:185, vis:"full tin"},
      ]
    },
    {
      name: "Cottage Cheese", emoji: "🫙",
      p100: {cal:98, p:11, c:3, f:4},
      portions: [
        {s:"100g", g:100, vis:"3 tbsp"},
        {s:"150g", g:150, vis:"5 tbsp"},
        {s:"200g", g:200, vis:"large bowl"},
      ]
    },
  ],

  carb: [
    {
      name: "White Rice", emoji: "🍚",
      note: "cooked",
      p100: {cal:130, p:3, c:28, f:0},
      portions: [
        {s:"150g", g:150, vis:"tennis ball"},
        {s:"200g", g:200, vis:"fist-sized"},
        {s:"300g", g:300, vis:"large fist"},
      ]
    },
    {
      name: "Brown Rice", emoji: "🌾",
      note: "cooked",
      p100: {cal:123, p:3, c:26, f:1},
      portions: [
        {s:"150g", g:150, vis:"tennis ball"},
        {s:"200g", g:200, vis:"fist-sized"},
        {s:"300g", g:300, vis:"large fist"},
      ]
    },
    {
      name: "Oats", emoji: "🥣",
      note: "dry weight",
      p100: {cal:389, p:17, c:66, f:7},
      portions: [
        {s:"40g", g:40, vis:"small bowl dry"},
        {s:"60g", g:60, vis:"medium bowl dry"},
        {s:"80g", g:80, vis:"large bowl dry"},
      ]
    },
    {
      name: "Berries", emoji: "🫐",
      note: "mixed/frozen",
      p100: {cal:57, p:1, c:14, f:0},
      portions: [
        {s:"80g",  g:80,  vis:"small handful"},
        {s:"120g", g:120, vis:"medium handful"},
        {s:"200g", g:200, vis:"large bowl"},
      ]
    },
    {
      name: "Honey", emoji: "🍯",
      p100: {cal:304, p:0, c:82, f:0},
      portions: [
        {s:"1 tsp",  g:7,  vis:"one teaspoon"},
        {s:"1 tbsp", g:21, vis:"one tablespoon"},
        {s:"2 tbsp", g:42, vis:"two tablespoons"},
      ]
    },
    {
      name: "Potato", emoji: "🥔",
      note: "boiled",
      p100: {cal:87, p:2, c:20, f:0},
      portions: [
        {s:"150g", g:150, vis:"medium potato"},
        {s:"200g", g:200, vis:"large potato"},
        {s:"300g", g:300, vis:"2 medium"},
      ]
    },
    {
      name: "Sweet Potato", emoji: "🍠",
      note: "cooked",
      p100: {cal:90, p:2, c:21, f:0},
      portions: [
        {s:"150g", g:150, vis:"medium potato"},
        {s:"200g", g:200, vis:"large potato"},
        {s:"300g", g:300, vis:"2 medium"},
      ]
    },
    {
      name: "Pasta", emoji: "🍝",
      note: "cooked",
      p100: {cal:158, p:6, c:31, f:1},
      portions: [
        {s:"150g", g:150, vis:"tennis ball"},
        {s:"200g", g:200, vis:"fist-sized"},
        {s:"280g", g:280, vis:"heaped fist"},
      ]
    },
    {
      name: "Bread", emoji: "🍞",
      p100: {cal:265, p:9, c:49, f:3},
      portions: [
        {s:"1 slice",  g:35,  vis:"one slice"},
        {s:"2 slices", g:70,  vis:"two slices"},
        {s:"3 slices", g:105, vis:"three slices"},
      ]
    },
    {
      name: "Quinoa", emoji: "🫘",
      note: "cooked",
      p100: {cal:120, p:4, c:22, f:2},
      portions: [
        {s:"150g", g:150, vis:"tennis ball"},
        {s:"200g", g:200, vis:"fist-sized"},
        {s:"300g", g:300, vis:"large fist"},
      ]
    },
  ],

  fat: [
    {
      name: "Avocado", emoji: "🥑",
      p100: {cal:160, p:2, c:9, f:15},
      portions: [
        {s:"½ avo", g:75,  vis:"half avocado"},
        {s:"1 avo",  g:150, vis:"whole avocado"},
      ]
    },
    {
      name: "Almond Butter", emoji: "🌰",
      p100: {cal:614, p:21, c:19, f:56},
      portions: [
        {s:"1 tbsp", g:16, vis:"1 tablespoon"},
        {s:"2 tbsp", g:32, vis:"2 tablespoons"},
      ]
    },
    {
      name: "Mixed Nuts", emoji: "🥜",
      p100: {cal:607, p:20, c:20, f:54},
      portions: [
        {s:"20g", g:20, vis:"small handful"},
        {s:"30g", g:30, vis:"handful"},
        {s:"50g", g:50, vis:"large handful"},
      ]
    },
    {
      name: "Peanut Butter", emoji: "🥫",
      p100: {cal:588, p:25, c:20, f:50},
      portions: [
        {s:"1 tbsp", g:16, vis:"1 tablespoon"},
        {s:"2 tbsp", g:32, vis:"2 tablespoons"},
      ]
    },
    {
      name: "Olive Oil", emoji: "🫒",
      p100: {cal:884, p:0, c:0, f:100},
      portions: [
        {s:"1 tsp",  g:5,  vis:"small drizzle"},
        {s:"1 tbsp", g:14, vis:"tablespoon"},
        {s:"2 tbsp", g:28, vis:"2 tbsp"},
      ]
    },
    {
      name: "Cheese", emoji: "🧀",
      p100: {cal:402, p:25, c:1, f:33},
      portions: [
        {s:"25g", g:25, vis:"one slice"},
        {s:"50g", g:50, vis:"two slices"},
        {s:"75g", g:75, vis:"three slices"},
      ]
    },
    {
      name: "Butter", emoji: "🧈",
      p100: {cal:717, p:1, c:0, f:81},
      portions: [
        {s:"1 tsp",  g:5,  vis:"thin scrape"},
        {s:"1 tbsp", g:14, vis:"tablespoon"},
      ]
    },
  ],
};

// ── Default meal library (first-run only) ───────
const DEFAULT_MEALS = [
  {id:"m1", name:"Oats & Banana",  calories:380, protein:12, carbs:68, fat:6,  emoji:"🥣"},
  {id:"m2", name:"Chicken & Rice", calories:520, protein:42, carbs:54, fat:8,  emoji:"🍗"},
  {id:"m3", name:"Salmon & Veg",   calories:480, protein:38, carbs:22, fat:22, emoji:"🐟"},
  {id:"m4", name:"Greek Yogurt",   calories:180, protein:18, carbs:12, fat:4,  emoji:"🥛"},
  {id:"m5", name:"Eggs & Toast",   calories:420, protein:26, carbs:34, fat:18, emoji:"🥚"},
  {id:"m6", name:"Tuna Salad",     calories:360, protein:34, carbs:18, fat:14, emoji:"🐠"},
];

// ── Default weekly plan (first-run only) ────────
const DEFAULT_PLAN = Object.fromEntries(
  DAYS.map(d => [d, {Breakfast:"m1", Lunch:"m2", Dinner:"m3", Snack:"m4"}])
);
