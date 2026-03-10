// ═══════════════════════════════════════════════
// data.js — edit this file to customise targets,
// default meals, and slot configuration.
// ═══════════════════════════════════════════════

const DATA_VERSION = "6"; // bump this whenever DEFAULT_MEALS changes

const DAYS      = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
const FULL_DAYS = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
const SLOTS     = ["Pre-Workout","Breakfast","Lunch","Dinner","Dessert"];
const CATEGORIES = ["Breakfast","Lunch","Dinner","Dessert","Pre-Workout"];

const SLOT_META = {
  "Pre-Workout": {icon:"⚡️",  color:"#f0a060"},
  Breakfast:     {icon:"☀️",  color:"#f0d060"},
  Lunch:         {icon:"🌤️",  color:"#60c0f0"},
  Dinner:        {icon:"🌙",  color:"#a060f0"},
  Dessert:       {icon:"🍮",  color:"#f060a0"},
};

const CAT_COLORS = {
  Breakfast:     {bg:"rgba(240,208,96,.15)",  text:"#f0d060"},
  Lunch:         {bg:"rgba(96,192,240,.15)",  text:"#60c0f0"},
  Dinner:        {bg:"rgba(160,96,240,.15)",  text:"#a060f0"},
  Dessert:       {bg:"rgba(240,96,160,.15)",  text:"#f060a0"},
  "Pre-Workout": {bg:"rgba(240,160,96,.15)",  text:"#f0a060"},
};

const TARGETS = { calories:2200, protein:170, carbs:226, fat:68 };

const EMOJIS = ["🥗","🍗","🥚","🐟","🥩","🌱","🥣","🍚","🍝","🥔","🍠","🍞","🥑","🥜","🧀","🍎","🍌","🫐","🥛","🧃","🥦","🫛","🍱","🥙","🌮","🍜","🥘","🍮","🍦","🍫","🍰","🧁","🦐","🍲","🥞","☕","🍒","🧪","🍽️"];

// Raw vs cooked macro variants — used by the ingredient picker
// k/p/c/f = macros per 1g. All weights in grams.
const COOKING_VARIANTS = {
  "Chicken Breast": { emoji:"🍗", u:"g",
    raw:    {k:1.20, p:0.225, c:0,    f:0.026},
    cooked: {k:1.65, p:0.31,  c:0,    f:0.036} },
  "Chicken Thigh":  { emoji:"🍗", u:"g",
    raw:    {k:1.40, p:0.19,  c:0,    f:0.070},
    cooked: {k:1.75, p:0.24,  c:0,    f:0.090} },
  "Beef Mince":     { emoji:"🥩", u:"g",
    raw:    {k:2.50, p:0.26,  c:0,    f:0.150},
    cooked: {k:2.64, p:0.28,  c:0,    f:0.160} },
  "Prawns":         { emoji:"🦐", u:"g",
    raw:    {k:0.85, p:0.18,  c:0,    f:0.010},
    cooked: {k:0.99, p:0.21,  c:0,    f:0.010} },
  "Hoki":           { emoji:"🐟", u:"g",
    raw:    {k:0.80, p:0.18,  c:0,    f:0.005},
    cooked: {k:0.96, p:0.21,  c:0,    f:0.010} },
  "Salmon":         { emoji:"🐟", u:"g",
    raw:    {k:1.42, p:0.20,  c:0,    f:0.060},
    cooked: {k:1.85, p:0.25,  c:0,    f:0.100} },
  "Rice":           { emoji:"🍚", u:"g",
    raw:    {k:3.60, p:0.07,  c:0.79, f:0.005},
    cooked: {k:1.30, p:0.03,  c:0.28, f:0.000} },
  "Pasta":          { emoji:"🍝", u:"g",
    raw:    {k:3.71, p:0.13,  c:0.74, f:0.015},
    cooked: {k:1.58, p:0.06,  c:0.31, f:0.010} },
  "Sweet Potato":   { emoji:"🍠", u:"g",
    raw:    {k:0.86, p:0.02,  c:0.20, f:0.000},
    cooked: {k:0.90, p:0.02,  c:0.21, f:0.000} },
};

// Food database for Build Plate feature
const FOODS = {
  protein: [
    {name:"Chicken Breast (raw)",emoji:"🍗",p100:{cal:120,p:22.5,c:0,f:2.6},portions:[{s:"100g",g:100,vis:"palm"},{s:"150g",g:150,vis:"large palm"},{s:"200g",g:200,vis:"two palms"}]},
    {name:"Chicken Breast (cooked)",emoji:"🍗",p100:{cal:165,p:31,c:0,f:3.6},portions:[{s:"100g",g:100,vis:"palm"},{s:"150g",g:150,vis:"large palm"},{s:"200g",g:200,vis:"two palms"}]},
    {name:"Salmon",emoji:"🐟",p100:{cal:208,p:20,c:0,f:13},portions:[{s:"100g",g:100,vis:"deck of cards"},{s:"150g",g:150,vis:"palm"},{s:"200g",g:200,vis:"fillet"}]},
    {name:"Beef Mince",emoji:"🥩",p100:{cal:250,p:26,c:0,f:15},portions:[{s:"100g",g:100,vis:"small"},{s:"150g",g:150,vis:"medium"},{s:"200g",g:200,vis:"large"}]},
    {name:"Eggs",emoji:"🥚",p100:{cal:155,p:13,c:1,f:11},portions:[{s:"2 eggs",g:100,vis:"2 med"},{s:"3 eggs",g:150,vis:"3 eggs"},{s:"4 eggs",g:200,vis:"4 large"}]},
    {name:"Egg Whites",emoji:"🫙",unit:"ml",p100:{cal:47,p:10,c:1,f:0},portions:[{s:"100ml",g:100,vis:"small"},{s:"150ml",g:150,vis:"medium"},{s:"200ml",g:200,vis:"large"}]},
    {name:"Greek Yogurt",emoji:"🥣",p100:{cal:56,p:9.3,c:4,f:0.2},portions:[{s:"100g",g:100,vis:"small pot"},{s:"150g",g:150,vis:"medium"},{s:"200g",g:200,vis:"large"}]},
    {name:"Whey Protein",emoji:"🧪",p100:{cal:400,p:83,c:10,f:3},portions:[{s:"1 scoop",g:30,vis:"1 scoop"},{s:"1.5",g:45,vis:"1.5 scoop"},{s:"2 scoops",g:60,vis:"2 scoops"}]},
    {name:"Tofu",emoji:"🌱",p100:{cal:76,p:8,c:2,f:4},portions:[{s:"100g",g:100,vis:"small"},{s:"150g",g:150,vis:"medium"},{s:"200g",g:200,vis:"large"}]},
    {name:"Tuna",emoji:"🐠",p100:{cal:97,p:23,c:0,f:0.5},portions:[{s:"100g",g:100,vis:"small tin"},{s:"150g",g:150,vis:"medium"},{s:"185g",g:185,vis:"full tin"}]},
    {name:"Cottage Cheese",emoji:"🫙",p100:{cal:82,p:12,c:4.3,f:1.8},portions:[{s:"100g",g:100,vis:"3 tbsp"},{s:"150g",g:150,vis:"5 tbsp"},{s:"200g",g:200,vis:"large"}]},
  ],
  carb: [
    {name:"White Rice",emoji:"🍚",note:"cooked",p100:{cal:130,p:3,c:28,f:0},portions:[{s:"150g",g:150,vis:"tennis ball"},{s:"200g",g:200,vis:"fist"},{s:"300g",g:300,vis:"large fist"}]},
    {name:"Oats",emoji:"🥣",note:"dry",p100:{cal:379,p:13,c:68,f:7},portions:[{s:"40g",g:40,vis:"small"},{s:"60g",g:60,vis:"medium"},{s:"80g",g:80,vis:"large"}]},
    {name:"Berries",emoji:"🫐",note:"frozen",p100:{cal:57,p:1,c:14,f:0},portions:[{s:"80g",g:80,vis:"small"},{s:"120g",g:120,vis:"medium"},{s:"200g",g:200,vis:"bowl"}]},
    {name:"Honey",emoji:"🍯",p100:{cal:304,p:0,c:82,f:0},portions:[{s:"1 tsp",g:7,vis:"tsp"},{s:"1 tbsp",g:21,vis:"tbsp"},{s:"2 tbsp",g:42,vis:"2 tbsp"}]},
    {name:"Sweet Potato",emoji:"🍠",note:"raw",p100:{cal:86,p:2,c:20,f:0},portions:[{s:"150g",g:150,vis:"medium"},{s:"200g",g:200,vis:"large"},{s:"300g",g:300,vis:"2 med"}]},
    {name:"Pasta",emoji:"🍝",note:"cooked",p100:{cal:158,p:6,c:31,f:1},portions:[{s:"150g",g:150,vis:"tennis ball"},{s:"200g",g:200,vis:"fist"},{s:"280g",g:280,vis:"large"}]},
    {name:"Banana",emoji:"🍌",p100:{cal:89,p:1,c:23,f:0},portions:[{s:"1 small",g:100,vis:"small"},{s:"1 med",g:120,vis:"medium"},{s:"1 large",g:150,vis:"large"}]},
    {name:"Rice Flour",emoji:"🍚",p100:{cal:360,p:6,c:80,f:1},portions:[{s:"50g",g:50,vis:"small"},{s:"60g",g:60,vis:"medium"},{s:"80g",g:80,vis:"large"}]},
  ],
  fat: [
    {name:"Avocado",emoji:"🥑",p100:{cal:160,p:2,c:9,f:15},portions:[{s:"½ avo",g:75,vis:"half"},{s:"1 avo",g:150,vis:"whole"}]},
    {name:"Almond Butter",emoji:"🌰",p100:{cal:614,p:21,c:19,f:56},portions:[{s:"1 tbsp",g:16,vis:"1 tbsp"},{s:"2 tbsp",g:32,vis:"2 tbsp"}]},
    {name:"Mixed Nuts",emoji:"🥜",p100:{cal:607,p:20,c:20,f:54},portions:[{s:"20g",g:20,vis:"small"},{s:"30g",g:30,vis:"handful"},{s:"50g",g:50,vis:"large"}]},
    {name:"Olive Oil",emoji:"🫒",p100:{cal:884,p:0,c:0,f:100},portions:[{s:"1 tsp",g:5,vis:"drizzle"},{s:"1 tbsp",g:14,vis:"tbsp"},{s:"2 tbsp",g:28,vis:"2 tbsp"}]},
    {name:"Cheese",emoji:"🧀",p100:{cal:400,p:25,c:1,f:33},portions:[{s:"25g",g:25,vis:"1 slice"},{s:"50g",g:50,vis:"2 slices"},{s:"75g",g:75,vis:"3 slices"}]},
    {name:"Butter",emoji:"🧈",p100:{cal:717,p:1,c:0,f:81},portions:[{s:"1 tsp",g:5,vis:"thin"},{s:"1 tbsp",g:14,vis:"tbsp"}]},
  ],
};

const DEFAULT_MEALS = [
  {
    "id": "c01",
    "emoji": "🥣",
    "name": "Oats (Post Workout)",
    "ingredients": [
      {
        "n": "Instant Oats",
        "a": 60,
        "u": "g",
        "k": 3.7,
        "p": 0.12,
        "c": 0.6,
        "f": 0.07
      },
      {
        "n": "Blueberries (frozen)",
        "a": 100,
        "u": "g",
        "k": 0.57,
        "p": 0.01,
        "c": 0.14,
        "f": 0
      },
      {
        "n": "Protein Matrix Vanilla",
        "a": 35,
        "u": "g",
        "k": 3.96,
        "p": 0.845,
        "c": 0.05,
        "f": 0.039
      },
      {
        "n": "Maple Syrup",
        "a": 10,
        "u": "g",
        "k": 2.6,
        "p": 0,
        "c": 0.67,
        "f": 0
      },
      {
        "n": "Almond Milk",
        "a": 100,
        "u": "ml",
        "k": 0.15,
        "p": 0.005,
        "c": 0.01,
        "f": 0.01
      }
    ],
    "calories": 455,
    "protein": 34,
    "carbs": 63,
    "fat": 8,
    "categories": [
      "Breakfast"
    ]
  },
  {
    "id": "c02",
    "emoji": "🥣",
    "name": "Greek Yoghurt Brekky Bowl",
    "ingredients": [
      {
        "n": "Chobani Greek Light",
        "a": 250,
        "u": "g",
        "k": 0.56,
        "p": 0.093,
        "c": 0.04,
        "f": 0.002
      },
      {
        "n": "Blueberries (frozen)",
        "a": 50,
        "u": "g",
        "k": 0.57,
        "p": 0.01,
        "c": 0.14,
        "f": 0
      },
      {
        "n": "Raspberries (frozen)",
        "a": 50,
        "u": "g",
        "k": 0.53,
        "p": 0.01,
        "c": 0.12,
        "f": 0
      },
      {
        "n": "Strawberries (frozen)",
        "a": 50,
        "u": "g",
        "k": 0.32,
        "p": 0.01,
        "c": 0.08,
        "f": 0
      },
      {
        "n": "Blackberries (frozen)",
        "a": 50,
        "u": "g",
        "k": 0.53,
        "p": 0.01,
        "c": 0.12,
        "f": 0
      },
      {
        "n": "Protein Matrix Vanilla",
        "a": 17.5,
        "u": "g",
        "k": 3.96,
        "p": 0.845,
        "c": 0.05,
        "f": 0.039
      },
      {
        "n": "Almond Butter",
        "a": 10,
        "u": "g",
        "k": 6.14,
        "p": 0.21,
        "c": 0.19,
        "f": 0.56
      },
      {
        "n": "Chia Seeds",
        "a": 5,
        "u": "g",
        "k": 4.86,
        "p": 0.17,
        "c": 0.42,
        "f": 0.31
      },
      {
        "n": "Flax Seeds",
        "a": 5,
        "u": "g",
        "k": 5.34,
        "p": 0.18,
        "c": 0.29,
        "f": 0.42
      },
      {
        "n": "Mixed Nuts",
        "a": 5,
        "u": "g",
        "k": 6.07,
        "p": 0.2,
        "c": 0.2,
        "f": 0.54
      },
      {
        "n": "Sunflower Seeds",
        "a": 5,
        "u": "g",
        "k": 5.84,
        "p": 0.21,
        "c": 0.2,
        "f": 0.51
      },
      {
        "n": "Hi-Fibre Bran",
        "a": 10,
        "u": "g",
        "k": 2.7,
        "p": 0.15,
        "c": 0.37,
        "f": 0.05
      },
      {
        "n": "Bran Flakes & Sultanas",
        "a": 5,
        "u": "g",
        "k": 3.57,
        "p": 0.09,
        "c": 0.78,
        "f": 0.02
      },
      {
        "n": "Honey",
        "a": 15,
        "u": "g",
        "k": 3.04,
        "p": 0,
        "c": 0.82,
        "f": 0
      }
    ],
    "calories": 575,
    "protein": 47,
    "carbs": 63,
    "fat": 17,
    "categories": [
      "Breakfast"
    ]
  },
  {
    "id": "c03",
    "emoji": "🥣",
    "name": "Overnight Oats",
    "ingredients": [
      {
        "n": "Chobani Greek Light",
        "a": 200,
        "u": "g",
        "k": 0.56,
        "p": 0.093,
        "c": 0.04,
        "f": 0.002
      },
      {
        "n": "Protein Matrix Vanilla",
        "a": 17.5,
        "u": "g",
        "k": 3.96,
        "p": 0.845,
        "c": 0.05,
        "f": 0.039
      },
      {
        "n": "Almond Milk",
        "a": 150,
        "u": "ml",
        "k": 0.15,
        "p": 0.005,
        "c": 0.01,
        "f": 0.01
      },
      {
        "n": "Rolled Oats",
        "a": 70,
        "u": "g",
        "k": 3.79,
        "p": 0.13,
        "c": 0.68,
        "f": 0.07
      },
      {
        "n": "Mixed Berries (frozen)",
        "a": 100,
        "u": "g",
        "k": 0.55,
        "p": 0.01,
        "c": 0.13,
        "f": 0
      },
      {
        "n": "Almond Butter",
        "a": 10,
        "u": "g",
        "k": 6.14,
        "p": 0.21,
        "c": 0.19,
        "f": 0.56
      },
      {
        "n": "Chia Seeds",
        "a": 10,
        "u": "g",
        "k": 4.86,
        "p": 0.17,
        "c": 0.42,
        "f": 0.31
      }
    ],
    "calories": 638,
    "protein": 47,
    "carbs": 79,
    "fat": 17,
    "categories": [
      "Breakfast"
    ]
  },
  {
    "id": "c04",
    "emoji": "🥣",
    "name": "Scrambled Oats",
    "ingredients": [
      {
        "n": "Egg (extra large)",
        "a": 1,
        "u": "egg",
        "k": 87,
        "p": 7.3,
        "c": 0.6,
        "f": 6.2
      },
      {
        "n": "Strawberries (frozen)",
        "a": 30,
        "u": "g",
        "k": 0.32,
        "p": 0.01,
        "c": 0.08,
        "f": 0
      },
      {
        "n": "Raspberries (frozen)",
        "a": 30,
        "u": "g",
        "k": 0.53,
        "p": 0.01,
        "c": 0.12,
        "f": 0
      },
      {
        "n": "Blueberries (frozen)",
        "a": 30,
        "u": "g",
        "k": 0.57,
        "p": 0.01,
        "c": 0.14,
        "f": 0
      },
      {
        "n": "Blackberries (frozen)",
        "a": 30,
        "u": "g",
        "k": 0.53,
        "p": 0.01,
        "c": 0.12,
        "f": 0
      },
      {
        "n": "Protein Matrix Vanilla",
        "a": 17.5,
        "u": "g",
        "k": 3.96,
        "p": 0.845,
        "c": 0.05,
        "f": 0.039
      },
      {
        "n": "Chia Seeds",
        "a": 5,
        "u": "g",
        "k": 4.86,
        "p": 0.17,
        "c": 0.42,
        "f": 0.31
      },
      {
        "n": "Chobani Greek Light",
        "a": 200,
        "u": "g",
        "k": 0.56,
        "p": 0.093,
        "c": 0.04,
        "f": 0.002
      },
      {
        "n": "Almond Butter",
        "a": 5,
        "u": "g",
        "k": 6.14,
        "p": 0.21,
        "c": 0.19,
        "f": 0.56
      },
      {
        "n": "Banana (medium)",
        "a": 1,
        "u": "banana",
        "k": 107,
        "p": 1,
        "c": 27,
        "f": 0
      },
      {
        "n": "Rolled Oats",
        "a": 40,
        "u": "g",
        "k": 3.79,
        "p": 0.13,
        "c": 0.68,
        "f": 0.07
      }
    ],
    "calories": 645,
    "protein": 49,
    "carbs": 82,
    "fat": 15,
    "categories": [
      "Breakfast"
    ]
  },
  {
    "id": "c05",
    "emoji": "🥚",
    "name": "Frittata",
    "ingredients": [
      {
        "n": "Egg Whites (frozen)",
        "a": 200,
        "u": "g",
        "k": 0.52,
        "p": 0.11,
        "c": 0.01,
        "f": 0
      },
      {
        "n": "Tasty Shredded Cheese",
        "a": 15,
        "u": "g",
        "k": 4,
        "p": 0.25,
        "c": 0.01,
        "f": 0.33
      },
      {
        "n": "Eggs (large)",
        "a": 2,
        "u": "egg",
        "k": 77,
        "p": 6.5,
        "c": 0.5,
        "f": 5.5
      },
      {
        "n": "Stir-Fry Veg Blend",
        "a": 100,
        "u": "g",
        "k": 0.4,
        "p": 0.02,
        "c": 0.07,
        "f": 0.005
      },
      {
        "n": "Chunky Salsa",
        "a": 50,
        "u": "g",
        "k": 0.4,
        "p": 0.01,
        "c": 0.08,
        "f": 0
      },
      {
        "n": "Sweet Potato (raw)",
        "a": 200,
        "u": "g",
        "k": 0.86,
        "p": 0.02,
        "c": 0.2,
        "f": 0
      }
    ],
    "calories": 550,
    "protein": 45,
    "carbs": 54,
    "fat": 16,
    "categories": [
      "Breakfast"
    ]
  },
  {
    "id": "c06",
    "emoji": "🥞",
    "name": "Protein Pancake",
    "ingredients": [
      {
        "n": "Kodiak Cakes Mix",
        "a": 80,
        "u": "g",
        "k": 3.55,
        "p": 0.25,
        "c": 0.6,
        "f": 0.05
      },
      {
        "n": "Egg (large)",
        "a": 1,
        "u": "egg",
        "k": 77,
        "p": 6.5,
        "c": 0.5,
        "f": 5.5
      },
      {
        "n": "Bulla Cottage Cheese",
        "a": 50,
        "u": "g",
        "k": 0.82,
        "p": 0.12,
        "c": 0.043,
        "f": 0.018
      },
      {
        "n": "Almond Butter",
        "a": 10,
        "u": "g",
        "k": 6.14,
        "p": 0.21,
        "c": 0.19,
        "f": 0.56
      },
      {
        "n": "Chobani Greek Light",
        "a": 40,
        "u": "g",
        "k": 0.56,
        "p": 0.093,
        "c": 0.04,
        "f": 0.002
      },
      {
        "n": "Almond Milk",
        "a": 80,
        "u": "ml",
        "k": 0.15,
        "p": 0.005,
        "c": 0.01,
        "f": 0.01
      },
      {
        "n": "Chia Seeds",
        "a": 5,
        "u": "g",
        "k": 4.86,
        "p": 0.17,
        "c": 0.42,
        "f": 0.31
      },
      {
        "n": "Protein Matrix Vanilla",
        "a": 17.5,
        "u": "g",
        "k": 3.96,
        "p": 0.845,
        "c": 0.05,
        "f": 0.039
      },
      {
        "n": "Mixed Berries (frozen)",
        "a": 150,
        "u": "g",
        "k": 0.55,
        "p": 0.01,
        "c": 0.13,
        "f": 0
      }
    ],
    "calories": 688,
    "protein": 55,
    "carbs": 78,
    "fat": 21,
    "categories": [
      "Breakfast"
    ]
  },
  {
    "id": "c07",
    "emoji": "🍚",
    "name": "Cream of Rice (Post Workout)",
    "ingredients": [
      {
        "n": "Rice Flour",
        "a": 60,
        "u": "g",
        "k": 3.6,
        "p": 0.06,
        "c": 0.8,
        "f": 0.01
      },
      {
        "n": "Protein Matrix Vanilla",
        "a": 40,
        "u": "g",
        "k": 3.96,
        "p": 0.845,
        "c": 0.05,
        "f": 0.039
      },
      {
        "n": "Honey",
        "a": 10,
        "u": "g",
        "k": 3.04,
        "p": 0,
        "c": 0.82,
        "f": 0
      },
      {
        "n": "Blueberries (frozen)",
        "a": 80,
        "u": "g",
        "k": 0.57,
        "p": 0.01,
        "c": 0.14,
        "f": 0
      }
    ],
    "calories": 446,
    "protein": 33,
    "carbs": 73,
    "fat": 4,
    "categories": [
      "Breakfast"
    ]
  },
  {
    "id": "c08",
    "emoji": "🫐",
    "name": "Berry Smoothie",
    "ingredients": [
      {
        "n": "Protein Matrix Vanilla",
        "a": 35,
        "u": "g",
        "k": 3.96,
        "p": 0.845,
        "c": 0.05,
        "f": 0.039
      },
      {
        "n": "Chia Seeds",
        "a": 15,
        "u": "g",
        "k": 4.86,
        "p": 0.17,
        "c": 0.42,
        "f": 0.31
      },
      {
        "n": "Strawberries (frozen)",
        "a": 50,
        "u": "g",
        "k": 0.32,
        "p": 0.01,
        "c": 0.08,
        "f": 0
      },
      {
        "n": "Raspberries (frozen)",
        "a": 50,
        "u": "g",
        "k": 0.53,
        "p": 0.01,
        "c": 0.12,
        "f": 0
      },
      {
        "n": "Blackberries (frozen)",
        "a": 50,
        "u": "g",
        "k": 0.53,
        "p": 0.01,
        "c": 0.12,
        "f": 0
      },
      {
        "n": "Blueberries (frozen)",
        "a": 50,
        "u": "g",
        "k": 0.57,
        "p": 0.01,
        "c": 0.14,
        "f": 0
      },
      {
        "n": "Spirulina",
        "a": 5,
        "u": "g",
        "k": 2.9,
        "p": 0.57,
        "c": 0.24,
        "f": 0.08
      },
      {
        "n": "Almond Butter",
        "a": 10,
        "u": "g",
        "k": 6.14,
        "p": 0.21,
        "c": 0.19,
        "f": 0.56
      },
      {
        "n": "Chobani Greek Light",
        "a": 50,
        "u": "g",
        "k": 0.56,
        "p": 0.093,
        "c": 0.04,
        "f": 0.002
      },
      {
        "n": "Almond Milk",
        "a": 250,
        "u": "ml",
        "k": 0.15,
        "p": 0.005,
        "c": 0.01,
        "f": 0.01
      }
    ],
    "calories": 448,
    "protein": 41,
    "carbs": 42,
    "fat": 16,
    "categories": [
      "Breakfast"
    ]
  },
  {
    "id": "c09",
    "emoji": "🐠",
    "name": "Tuna Salad",
    "ingredients": [
      {
        "n": "Tuna in Springwater",
        "a": 120,
        "u": "g",
        "k": 0.97,
        "p": 0.23,
        "c": 0,
        "f": 0.005
      },
      {
        "n": "Chobani Greek Light",
        "a": 50,
        "u": "g",
        "k": 0.56,
        "p": 0.093,
        "c": 0.04,
        "f": 0.002
      },
      {
        "n": "Avocado",
        "a": 70,
        "u": "g",
        "k": 1.6,
        "p": 0.02,
        "c": 0.09,
        "f": 0.15
      },
      {
        "n": "Nando's Perinaise",
        "a": 1,
        "u": "srv",
        "k": 50,
        "p": 0,
        "c": 1,
        "f": 5
      },
      {
        "n": "Corn (canned)",
        "a": 20,
        "u": "g",
        "k": 0.86,
        "p": 0.03,
        "c": 0.18,
        "f": 0.01
      },
      {
        "n": "Tomato (medium)",
        "a": 1,
        "u": "tomato",
        "k": 22,
        "p": 1,
        "c": 5,
        "f": 0
      },
      {
        "n": "Mission CB Wrap",
        "a": 2,
        "u": "wrap",
        "k": 70,
        "p": 4,
        "c": 11,
        "f": 3
      },
      {
        "n": "Sunflower Seeds",
        "a": 5,
        "u": "g",
        "k": 5.84,
        "p": 0.21,
        "c": 0.2,
        "f": 0.51
      }
    ],
    "calories": 516,
    "protein": 45,
    "carbs": 41,
    "fat": 25,
    "categories": [
      "Lunch"
    ]
  },
  {
    "id": "c10",
    "emoji": "🍠",
    "name": "Sweet Potato Tacos",
    "ingredients": [
      {
        "n": "Hass Avocado",
        "a": 70,
        "u": "g",
        "k": 1.6,
        "p": 0.02,
        "c": 0.09,
        "f": 0.15
      },
      {
        "n": "Sweet Potato (raw)",
        "a": 200,
        "u": "g",
        "k": 0.86,
        "p": 0.02,
        "c": 0.2,
        "f": 0
      },
      {
        "n": "Bulla Cottage Cheese",
        "a": 15,
        "u": "g",
        "k": 0.82,
        "p": 0.12,
        "c": 0.043,
        "f": 0.018
      },
      {
        "n": "Eggs (large)",
        "a": 2,
        "u": "egg",
        "k": 77,
        "p": 6.5,
        "c": 0.5,
        "f": 5.5
      },
      {
        "n": "Shortcut Bacon",
        "a": 2,
        "u": "rasher",
        "k": 50,
        "p": 3.5,
        "c": 0.25,
        "f": 4
      }
    ],
    "calories": 555,
    "protein": 28,
    "carbs": 48,
    "fat": 30,
    "categories": [
      "Lunch"
    ]
  },
  {
    "id": "c11",
    "emoji": "🧀",
    "name": "Dip Dip Board",
    "ingredients": [
      {
        "n": "Chicken Breast (raw)",
        "a": 125,
        "u": "g",
        "k": 1.2,
        "p": 0.225,
        "c": 0,
        "f": 0.026
      },
      {
        "n": "Chunky Salsa",
        "a": 15,
        "u": "g",
        "k": 0.4,
        "p": 0.01,
        "c": 0.08,
        "f": 0
      },
      {
        "n": "Celery",
        "a": 15,
        "u": "g",
        "k": 0.16,
        "p": 0.01,
        "c": 0.03,
        "f": 0
      },
      {
        "n": "Baby Cucumbers",
        "a": 30,
        "u": "g",
        "k": 0.15,
        "p": 0.01,
        "c": 0.03,
        "f": 0
      },
      {
        "n": "Green Olives",
        "a": 15,
        "u": "g",
        "k": 1.45,
        "p": 0.01,
        "c": 0.04,
        "f": 0.15
      },
      {
        "n": "Carrots",
        "a": 60,
        "u": "g",
        "k": 0.41,
        "p": 0.01,
        "c": 0.1,
        "f": 0
      },
      {
        "n": "Cherry Tomatoes",
        "a": 60,
        "u": "g",
        "k": 0.18,
        "p": 0.01,
        "c": 0.04,
        "f": 0
      },
      {
        "n": "Tasty Cheese Slices",
        "a": 2,
        "u": "slice",
        "k": 120,
        "p": 7.5,
        "c": 0.3,
        "f": 10
      },
      {
        "n": "Chickpeas (canned)",
        "a": 50,
        "u": "g",
        "k": 1.64,
        "p": 0.09,
        "c": 0.27,
        "f": 0.03
      }
    ],
    "calories": 598,
    "protein": 60,
    "carbs": 26,
    "fat": 29,
    "categories": [
      "Lunch"
    ]
  },
  {
    "id": "c12",
    "emoji": "🍲",
    "name": "Chicken Vegetable Soup",
    "ingredients": [
      {
        "n": "Butternut Pumpkin",
        "a": 175,
        "u": "g",
        "k": 0.4,
        "p": 0.01,
        "c": 0.1,
        "f": 0
      },
      {
        "n": "Cauliflower",
        "a": 140,
        "u": "g",
        "k": 0.25,
        "p": 0.02,
        "c": 0.05,
        "f": 0
      },
      {
        "n": "Turnip",
        "a": 80,
        "u": "g",
        "k": 0.28,
        "p": 0.01,
        "c": 0.06,
        "f": 0
      },
      {
        "n": "Carrots",
        "a": 50,
        "u": "g",
        "k": 0.41,
        "p": 0.01,
        "c": 0.1,
        "f": 0
      },
      {
        "n": "Celery",
        "a": 10,
        "u": "g",
        "k": 0.16,
        "p": 0.01,
        "c": 0.03,
        "f": 0
      },
      {
        "n": "Chicken Breast (raw)",
        "a": 125,
        "u": "g",
        "k": 1.2,
        "p": 0.225,
        "c": 0,
        "f": 0.026
      },
      {
        "n": "Butter",
        "a": 10,
        "u": "g",
        "k": 7.17,
        "p": 0.01,
        "c": 0,
        "f": 0.81
      },
      {
        "n": "Sourdough (large slice)",
        "a": 1,
        "u": "slice",
        "k": 160,
        "p": 6,
        "c": 31,
        "f": 1
      },
      {
        "n": "Red Lentils (raw)",
        "a": 15,
        "u": "g",
        "k": 3.53,
        "p": 0.26,
        "c": 0.6,
        "f": 0.01
      }
    ],
    "calories": 640,
    "protein": 55,
    "carbs": 75,
    "fat": 14,
    "categories": [
      "Lunch"
    ]
  },
  {
    "id": "c13",
    "emoji": "🦐",
    "name": "Prawn Air Fry",
    "ingredients": [
      {
        "n": "Mixed Veg (frozen)",
        "a": 100,
        "u": "g",
        "k": 0.4,
        "p": 0.02,
        "c": 0.07,
        "f": 0.005
      },
      {
        "n": "Olive Oil",
        "a": 14,
        "u": "g",
        "k": 8.84,
        "p": 0,
        "c": 0,
        "f": 1
      },
      {
        "n": "Prawns (cooked)",
        "a": 175,
        "u": "g",
        "k": 0.99,
        "p": 0.21,
        "c": 0,
        "f": 0.01
      },
      {
        "n": "Basmati Rice (cooked)",
        "a": 150,
        "u": "g",
        "k": 1.3,
        "p": 0.03,
        "c": 0.28,
        "f": 0
      },
      {
        "n": "Sesame Oil",
        "a": 2.5,
        "u": "ml",
        "k": 8.84,
        "p": 0,
        "c": 0,
        "f": 1
      },
      {
        "n": "Tamari Sauce",
        "a": 5,
        "u": "g",
        "k": 0.6,
        "p": 0.06,
        "c": 0.06,
        "f": 0
      },
      {
        "n": "Honey",
        "a": 5,
        "u": "g",
        "k": 3.04,
        "p": 0,
        "c": 0.82,
        "f": 0
      }
    ],
    "calories": 572,
    "protein": 44,
    "carbs": 53,
    "fat": 19,
    "categories": [
      "Dinner",
      "Lunch"
    ]
  },
  {
    "id": "c14",
    "emoji": "🌮",
    "name": "Taco Mince Bowl",
    "ingredients": [
      {
        "n": "Olive Oil",
        "a": 7,
        "u": "g",
        "k": 8.84,
        "p": 0,
        "c": 0,
        "f": 1
      },
      {
        "n": "Sweet Potato (raw)",
        "a": 150,
        "u": "g",
        "k": 0.86,
        "p": 0.02,
        "c": 0.2,
        "f": 0
      },
      {
        "n": "Avocado",
        "a": 50,
        "u": "g",
        "k": 1.6,
        "p": 0.02,
        "c": 0.09,
        "f": 0.15
      },
      {
        "n": "Bulla Cottage Cheese",
        "a": 100,
        "u": "g",
        "k": 0.82,
        "p": 0.12,
        "c": 0.043,
        "f": 0.018
      },
      {
        "n": "Red Lentils (raw)",
        "a": 20,
        "u": "g",
        "k": 3.53,
        "p": 0.26,
        "c": 0.6,
        "f": 0.01
      },
      {
        "n": "Tomato Paste",
        "a": 5,
        "u": "g",
        "k": 0.82,
        "p": 0.04,
        "c": 0.19,
        "f": 0
      },
      {
        "n": "Tomato Passata",
        "a": 200,
        "u": "g",
        "k": 0.25,
        "p": 0.01,
        "c": 0.05,
        "f": 0
      },
      {
        "n": "Beef Mince",
        "a": 125,
        "u": "g",
        "k": 2.5,
        "p": 0.26,
        "c": 0,
        "f": 0.15
      }
    ],
    "calories": 820,
    "protein": 59,
    "carbs": 60,
    "fat": 37,
    "categories": [
      "Dinner",
      "Lunch"
    ]
  },
  {
    "id": "c15",
    "emoji": "🍗",
    "name": "Chicken Stir Fry",
    "ingredients": [
      {
        "n": "Stir-Fry Veg Blend",
        "a": 100,
        "u": "g",
        "k": 0.4,
        "p": 0.02,
        "c": 0.07,
        "f": 0.005
      },
      {
        "n": "Oyster Sauce",
        "a": 8,
        "u": "g",
        "k": 0.73,
        "p": 0.03,
        "c": 0.18,
        "f": 0
      },
      {
        "n": "Edamame Beans",
        "a": 50,
        "u": "g",
        "k": 1.22,
        "p": 0.11,
        "c": 0.09,
        "f": 0.05
      },
      {
        "n": "Cauliflower Rice",
        "a": 175,
        "u": "g",
        "k": 0.25,
        "p": 0.02,
        "c": 0.04,
        "f": 0.002
      },
      {
        "n": "Chicken Thigh (skinless)",
        "a": 100,
        "u": "g",
        "k": 1.4,
        "p": 0.19,
        "c": 0,
        "f": 0.07
      },
      {
        "n": "Basmati Rice (cooked)",
        "a": 75,
        "u": "g",
        "k": 1.3,
        "p": 0.03,
        "c": 0.28,
        "f": 0
      },
      {
        "n": "Olive Oil",
        "a": 7,
        "u": "g",
        "k": 8.84,
        "p": 0,
        "c": 0,
        "f": 1
      },
      {
        "n": "Sesame Oil",
        "a": 1.25,
        "u": "ml",
        "k": 8.84,
        "p": 0,
        "c": 0,
        "f": 1
      }
    ],
    "calories": 471,
    "protein": 37,
    "carbs": 41,
    "fat": 18,
    "categories": [
      "Dinner",
      "Lunch"
    ]
  },
  {
    "id": "c16",
    "emoji": "🍝",
    "name": "Spaghetti Bolognese",
    "ingredients": [
      {
        "n": "Carrots",
        "a": 30,
        "u": "g",
        "k": 0.41,
        "p": 0.01,
        "c": 0.1,
        "f": 0
      },
      {
        "n": "Onion (cooked)",
        "a": 10,
        "u": "g",
        "k": 0.44,
        "p": 0.01,
        "c": 0.1,
        "f": 0
      },
      {
        "n": "Celery",
        "a": 10,
        "u": "g",
        "k": 0.16,
        "p": 0.01,
        "c": 0.03,
        "f": 0
      },
      {
        "n": "Red Wine",
        "a": 25,
        "u": "ml",
        "k": 0.85,
        "p": 0,
        "c": 0.03,
        "f": 0
      },
      {
        "n": "Vetta Protein Pasta",
        "a": 75,
        "u": "g",
        "k": 3.53,
        "p": 0.3,
        "c": 0.43,
        "f": 0.025
      },
      {
        "n": "Anchovies",
        "a": 2,
        "u": "g",
        "k": 2.1,
        "p": 0.29,
        "c": 0,
        "f": 0.1
      },
      {
        "n": "Parmesan",
        "a": 10,
        "u": "g",
        "k": 4.31,
        "p": 0.38,
        "c": 0.04,
        "f": 0.29
      },
      {
        "n": "Full Cream Milk",
        "a": 30,
        "u": "g",
        "k": 0.69,
        "p": 0.03,
        "c": 0.05,
        "f": 0.04
      },
      {
        "n": "Tomato Passata",
        "a": 50,
        "u": "g",
        "k": 0.25,
        "p": 0.01,
        "c": 0.05,
        "f": 0
      },
      {
        "n": "Red Lentils (raw)",
        "a": 15,
        "u": "g",
        "k": 3.53,
        "p": 0.26,
        "c": 0.6,
        "f": 0.01
      },
      {
        "n": "Beef Mince",
        "a": 100,
        "u": "g",
        "k": 2.5,
        "p": 0.26,
        "c": 0,
        "f": 0.15
      }
    ],
    "calories": 688,
    "protein": 59,
    "carbs": 51,
    "fat": 21,
    "categories": [
      "Dinner",
      "Lunch"
    ]
  },
  {
    "id": "c17",
    "emoji": "🍌",
    "name": "Banana + Rice Bubbles",
    "ingredients": [
      {
        "n": "Banana (medium)",
        "a": 1,
        "u": "banana",
        "k": 107,
        "p": 1,
        "c": 27,
        "f": 0
      },
      {
        "n": "Rice Bubbles",
        "a": 20,
        "u": "g",
        "k": 3.8,
        "p": 0.07,
        "c": 0.86,
        "f": 0.01
      },
      {
        "n": "Honey",
        "a": 10,
        "u": "g",
        "k": 3.04,
        "p": 0,
        "c": 0.82,
        "f": 0
      },
      {
        "n": "Almond Milk",
        "a": 100,
        "u": "ml",
        "k": 0.15,
        "p": 0.005,
        "c": 0.01,
        "f": 0.01
      }
    ],
    "calories": 228,
    "protein": 3,
    "carbs": 53,
    "fat": 1,
    "categories": [
      "Pre-Workout"
    ]
  },
  {
    "id": "c18",
    "emoji": "🍮",
    "name": "Jelly Custard Trifle",
    "ingredients": [
      {
        "n": "Raspberries (frozen)",
        "a": 100,
        "u": "g",
        "k": 0.53,
        "p": 0.01,
        "c": 0.12,
        "f": 0
      },
      {
        "n": "Jelly Lite",
        "a": 1,
        "u": "srv",
        "k": 5,
        "p": 0,
        "c": 1,
        "f": 0
      },
      {
        "n": "Bulla Cottage Cheese",
        "a": 150,
        "u": "g",
        "k": 0.82,
        "p": 0.12,
        "c": 0.043,
        "f": 0.018
      },
      {
        "n": "Protein Matrix Vanilla",
        "a": 17.5,
        "u": "g",
        "k": 3.96,
        "p": 0.845,
        "c": 0.05,
        "f": 0.039
      },
      {
        "n": "Custard Mix",
        "a": 2,
        "u": "portion",
        "k": 30,
        "p": 1,
        "c": 6,
        "f": 0.5
      },
      {
        "n": "Oreo Mini",
        "a": 1,
        "u": "srv",
        "k": 150,
        "p": 1,
        "c": 21,
        "f": 7
      }
    ],
    "calories": 504,
    "protein": 39,
    "carbs": 53,
    "fat": 16,
    "categories": [
      "Dessert"
    ]
  },
  {
    "id": "c19",
    "emoji": "🍦",
    "name": "Ice Cream: Strawberry Shortcake",
    "ingredients": [
      {
        "n": "Almond Milk",
        "a": 100,
        "u": "ml",
        "k": 0.15,
        "p": 0.005,
        "c": 0.01,
        "f": 0.01
      },
      {
        "n": "Full Cream Milk",
        "a": 50,
        "u": "g",
        "k": 0.69,
        "p": 0.03,
        "c": 0.05,
        "f": 0.04
      },
      {
        "n": "Protein Matrix Vanilla",
        "a": 17.5,
        "u": "g",
        "k": 3.96,
        "p": 0.845,
        "c": 0.05,
        "f": 0.039
      },
      {
        "n": "Bulla Cottage Cheese",
        "a": 35,
        "u": "g",
        "k": 0.82,
        "p": 0.12,
        "c": 0.043,
        "f": 0.018
      },
      {
        "n": "Chobani Greek Light",
        "a": 45,
        "u": "g",
        "k": 0.56,
        "p": 0.093,
        "c": 0.04,
        "f": 0.002
      },
      {
        "n": "Light Cream Cheese",
        "a": 10,
        "u": "g",
        "k": 2.2,
        "p": 0.09,
        "c": 0.05,
        "f": 0.2
      },
      {
        "n": "Cottee's Pudding Mix",
        "a": 7,
        "u": "g",
        "k": 3.57,
        "p": 0,
        "c": 0.89,
        "f": 0
      },
      {
        "n": "Maria Biscuits",
        "a": 1,
        "u": "srv",
        "k": 88,
        "p": 2,
        "c": 14,
        "f": 3
      },
      {
        "n": "Strawberries (frozen)",
        "a": 50,
        "u": "g",
        "k": 0.32,
        "p": 0.01,
        "c": 0.08,
        "f": 0
      }
    ],
    "calories": 334,
    "protein": 28,
    "carbs": 34,
    "fat": 11,
    "categories": [
      "Dessert"
    ]
  },
  {
    "id": "c20",
    "emoji": "🍦",
    "name": "Ice Cream: Vanilla Base",
    "ingredients": [
      {
        "n": "Almond Milk",
        "a": 100,
        "u": "ml",
        "k": 0.15,
        "p": 0.005,
        "c": 0.01,
        "f": 0.01
      },
      {
        "n": "Full Cream Milk",
        "a": 50,
        "u": "g",
        "k": 0.69,
        "p": 0.03,
        "c": 0.05,
        "f": 0.04
      },
      {
        "n": "Protein Matrix Vanilla",
        "a": 17.5,
        "u": "g",
        "k": 3.96,
        "p": 0.845,
        "c": 0.05,
        "f": 0.039
      },
      {
        "n": "Bulla Cottage Cheese",
        "a": 80,
        "u": "g",
        "k": 0.82,
        "p": 0.12,
        "c": 0.043,
        "f": 0.018
      },
      {
        "n": "Chobani Greek Light",
        "a": 80,
        "u": "g",
        "k": 0.56,
        "p": 0.093,
        "c": 0.04,
        "f": 0.002
      },
      {
        "n": "Light Cream Cheese",
        "a": 5,
        "u": "g",
        "k": 2.2,
        "p": 0.09,
        "c": 0.05,
        "f": 0.2
      },
      {
        "n": "Cottee's Pudding Mix",
        "a": 7,
        "u": "g",
        "k": 3.57,
        "p": 0,
        "c": 0.89,
        "f": 0
      }
    ],
    "calories": 290,
    "protein": 35,
    "carbs": 18,
    "fat": 9,
    "categories": [
      "Dessert"
    ]
  },
  {
    "id": "c21",
    "emoji": "🍓",
    "name": "Eton Mess",
    "ingredients": [
      {
        "n": "Chobani Greek Light",
        "a": 250,
        "u": "g",
        "k": 0.56,
        "p": 0.093,
        "c": 0.04,
        "f": 0.002
      },
      {
        "n": "Strawberries",
        "a": 150,
        "u": "g",
        "k": 0.32,
        "p": 0.01,
        "c": 0.08,
        "f": 0
      },
      {
        "n": "Meringue Nest",
        "a": 1,
        "u": "nest",
        "k": 55,
        "p": 1,
        "c": 13,
        "f": 0
      },
      {
        "n": "Protein Matrix Vanilla",
        "a": 17.5,
        "u": "g",
        "k": 3.96,
        "p": 0.845,
        "c": 0.05,
        "f": 0.039
      },
      {
        "n": "Sugar-Free Topping",
        "a": 15,
        "u": "ml",
        "k": 0.2,
        "p": 0,
        "c": 0.04,
        "f": 0
      }
    ],
    "calories": 321,
    "protein": 40,
    "carbs": 38,
    "fat": 2,
    "categories": [
      "Dessert"
    ]
  },
  {
    "id": "c22",
    "emoji": "☕",
    "name": "Tiramisu",
    "ingredients": [
      {
        "n": "Savoiardi Fingers",
        "a": 6,
        "u": "finger",
        "k": 52.5,
        "p": 1.35,
        "c": 10.95,
        "f": 1.05
      },
      {
        "n": "Chobani Greek Light",
        "a": 150,
        "u": "g",
        "k": 0.56,
        "p": 0.093,
        "c": 0.04,
        "f": 0.002
      },
      {
        "n": "Protein Matrix Vanilla",
        "a": 17.5,
        "u": "g",
        "k": 3.96,
        "p": 0.845,
        "c": 0.05,
        "f": 0.039
      },
      {
        "n": "Cocoa Powder",
        "a": 5,
        "u": "g",
        "k": 2.28,
        "p": 0.2,
        "c": 0.54,
        "f": 0.14
      },
      {
        "n": "Bulla Cottage Cheese",
        "a": 80,
        "u": "g",
        "k": 0.82,
        "p": 0.12,
        "c": 0.043,
        "f": 0.018
      },
      {
        "n": "Light Cream Cheese",
        "a": 30,
        "u": "g",
        "k": 2.2,
        "p": 0.09,
        "c": 0.05,
        "f": 0.2
      },
      {
        "n": "Cottee's Pudding Mix",
        "a": 10,
        "u": "g",
        "k": 3.57,
        "p": 0,
        "c": 0.89,
        "f": 0
      },
      {
        "n": "Dark Chocolate (½ bar)",
        "a": 0.5,
        "u": "unit",
        "k": 54,
        "p": 0.5,
        "c": 5.6,
        "f": 3.4
      }
    ],
    "calories": 701,
    "protein": 51,
    "carbs": 92,
    "fat": 19,
    "categories": [
      "Dessert"
    ]
  },
  {
    "id": "c23",
    "emoji": "🍮",
    "name": "Panna Cotta",
    "ingredients": [
      {
        "n": "Jelly Lite",
        "a": 1,
        "u": "srv",
        "k": 5,
        "p": 0,
        "c": 1,
        "f": 0
      },
      {
        "n": "Chobani Greek Light",
        "a": 150,
        "u": "g",
        "k": 0.56,
        "p": 0.093,
        "c": 0.04,
        "f": 0.002
      },
      {
        "n": "Protein Matrix Vanilla",
        "a": 17.5,
        "u": "g",
        "k": 3.96,
        "p": 0.845,
        "c": 0.05,
        "f": 0.039
      },
      {
        "n": "Strawberries (frozen)",
        "a": 100,
        "u": "g",
        "k": 0.32,
        "p": 0.01,
        "c": 0.08,
        "f": 0
      },
      {
        "n": "Dark Chocolate (½ bar)",
        "a": 0.5,
        "u": "unit",
        "k": 54,
        "p": 0.5,
        "c": 5.6,
        "f": 3.4
      },
      {
        "n": "Light Cream Cheese",
        "a": 30,
        "u": "g",
        "k": 2.2,
        "p": 0.09,
        "c": 0.05,
        "f": 0.2
      }
    ],
    "calories": 286,
    "protein": 31,
    "carbs": 22,
    "fat": 9,
    "categories": [
      "Dessert"
    ]
  },
  {
    "id": "c24",
    "emoji": "🫐",
    "name": "Blueberry Cheesecake",
    "ingredients": [
      {
        "n": "Butter",
        "a": 5,
        "u": "g",
        "k": 7.17,
        "p": 0.01,
        "c": 0,
        "f": 0.81
      },
      {
        "n": "Protein Matrix Vanilla",
        "a": 20,
        "u": "g",
        "k": 3.96,
        "p": 0.845,
        "c": 0.05,
        "f": 0.039
      },
      {
        "n": "Light Cream Cheese",
        "a": 100,
        "u": "g",
        "k": 2.2,
        "p": 0.09,
        "c": 0.05,
        "f": 0.2
      },
      {
        "n": "Egg (large)",
        "a": 1,
        "u": "egg",
        "k": 77,
        "p": 6.5,
        "c": 0.5,
        "f": 5.5
      },
      {
        "n": "Chobani Greek Light",
        "a": 20,
        "u": "g",
        "k": 0.56,
        "p": 0.093,
        "c": 0.04,
        "f": 0.002
      },
      {
        "n": "Bulla Cottage Cheese",
        "a": 100,
        "u": "g",
        "k": 0.82,
        "p": 0.12,
        "c": 0.043,
        "f": 0.018
      },
      {
        "n": "Maria Biscuits",
        "a": 1,
        "u": "srv",
        "k": 88,
        "p": 2,
        "c": 14,
        "f": 3
      },
      {
        "n": "Blueberries (frozen)",
        "a": 50,
        "u": "g",
        "k": 0.57,
        "p": 0.01,
        "c": 0.14,
        "f": 0
      }
    ],
    "calories": 650,
    "protein": 49,
    "carbs": 33,
    "fat": 38,
    "categories": [
      "Dessert"
    ]
  },
  {
    "id": "c25",
    "emoji": "🍰",
    "name": "Jelly Cheesecake",
    "ingredients": [
      {
        "n": "Blueberries (frozen)",
        "a": 30,
        "u": "g",
        "k": 0.57,
        "p": 0.01,
        "c": 0.14,
        "f": 0
      },
      {
        "n": "Raspberries (frozen)",
        "a": 30,
        "u": "g",
        "k": 0.53,
        "p": 0.01,
        "c": 0.12,
        "f": 0
      },
      {
        "n": "Blackberries (frozen)",
        "a": 30,
        "u": "g",
        "k": 0.53,
        "p": 0.01,
        "c": 0.12,
        "f": 0
      },
      {
        "n": "Strawberries (frozen)",
        "a": 30,
        "u": "g",
        "k": 0.32,
        "p": 0.01,
        "c": 0.08,
        "f": 0
      },
      {
        "n": "Chia Seeds",
        "a": 5,
        "u": "g",
        "k": 4.86,
        "p": 0.17,
        "c": 0.42,
        "f": 0.31
      },
      {
        "n": "Butter",
        "a": 5,
        "u": "g",
        "k": 7.17,
        "p": 0.01,
        "c": 0,
        "f": 0.81
      },
      {
        "n": "Jelly Lite",
        "a": 1,
        "u": "srv",
        "k": 5,
        "p": 0,
        "c": 1,
        "f": 0
      },
      {
        "n": "Bulla Cottage Cheese",
        "a": 100,
        "u": "g",
        "k": 0.82,
        "p": 0.12,
        "c": 0.043,
        "f": 0.018
      },
      {
        "n": "Protein Matrix Vanilla",
        "a": 17.5,
        "u": "g",
        "k": 3.96,
        "p": 0.845,
        "c": 0.05,
        "f": 0.039
      },
      {
        "n": "Maria Biscuits",
        "a": 0.5,
        "u": "srv",
        "k": 88,
        "p": 2,
        "c": 14,
        "f": 3
      },
      {
        "n": "Chobani Greek Light",
        "a": 50,
        "u": "g",
        "k": 0.56,
        "p": 0.093,
        "c": 0.04,
        "f": 0.002
      },
      {
        "n": "Cottee's Pudding Mix",
        "a": 10,
        "u": "g",
        "k": 3.57,
        "p": 0,
        "c": 0.89,
        "f": 0
      },
      {
        "n": "Light Cream Cheese",
        "a": 10,
        "u": "g",
        "k": 2.2,
        "p": 0.09,
        "c": 0.05,
        "f": 0.2
      }
    ],
    "calories": 434,
    "protein": 36,
    "carbs": 41,
    "fat": 15,
    "categories": [
      "Dessert"
    ]
  },
  {
    "id": "c26",
    "emoji": "🍒",
    "name": "Greek Yoghurt Dessert Bowl",
    "ingredients": [
      {
        "n": "Chobani Greek Light",
        "a": 250,
        "u": "g",
        "k": 0.56,
        "p": 0.093,
        "c": 0.04,
        "f": 0.002
      },
      {
        "n": "Cherries (frozen)",
        "a": 100,
        "u": "g",
        "k": 0.63,
        "p": 0.01,
        "c": 0.15,
        "f": 0
      },
      {
        "n": "Protein Matrix Vanilla",
        "a": 17.5,
        "u": "g",
        "k": 3.96,
        "p": 0.845,
        "c": 0.05,
        "f": 0.039
      },
      {
        "n": "Dark Chocolate (½ bar)",
        "a": 0.5,
        "u": "unit",
        "k": 54,
        "p": 0.5,
        "c": 5.6,
        "f": 3.4
      }
    ],
    "calories": 305,
    "protein": 39,
    "carbs": 30,
    "fat": 3,
    "categories": [
      "Dessert"
    ]
  },
  {
    "id": "c27",
    "emoji": "🥣",
    "categories": [
      "Breakfast"
    ],
    "name": "Cottage Cheese Brekky Bowl",
    "calories": 707,
    "protein": 60,
    "carbs": 60,
    "fat": 27,
    "ingredients": [
      {
        "n": "Bulla Cottage Cheese",
        "a": 250,
        "u": "g",
        "k": 0.82,
        "p": 0.12,
        "c": 0.043,
        "f": 0.018
      },
      {
        "n": "Blueberries (frozen)",
        "a": 50,
        "u": "g",
        "k": 0.57,
        "p": 0.01,
        "c": 0.14,
        "f": 0
      },
      {
        "n": "Raspberries (frozen)",
        "a": 50,
        "u": "g",
        "k": 0.53,
        "p": 0.01,
        "c": 0.12,
        "f": 0
      },
      {
        "n": "Strawberries (frozen)",
        "a": 50,
        "u": "g",
        "k": 0.32,
        "p": 0.01,
        "c": 0.08,
        "f": 0
      },
      {
        "n": "Blackberries (frozen)",
        "a": 50,
        "u": "g",
        "k": 0.53,
        "p": 0.01,
        "c": 0.12,
        "f": 0
      },
      {
        "n": "Protein Matrix Vanilla",
        "a": 17.5,
        "u": "g",
        "k": 3.96,
        "p": 0.845,
        "c": 0.05,
        "f": 0.039
      },
      {
        "n": "Almond Butter",
        "a": 10,
        "u": "g",
        "k": 6.14,
        "p": 0.21,
        "c": 0.19,
        "f": 0.56
      },
      {
        "n": "Chia Seeds",
        "a": 5,
        "u": "g",
        "k": 4.86,
        "p": 0.17,
        "c": 0.42,
        "f": 0.31
      },
      {
        "n": "Flax Seeds",
        "a": 5,
        "u": "g",
        "k": 5.34,
        "p": 0.18,
        "c": 0.29,
        "f": 0.42
      },
      {
        "n": "Mixed Nuts",
        "a": 5,
        "u": "g",
        "k": 6.07,
        "p": 0.2,
        "c": 0.2,
        "f": 0.54
      },
      {
        "n": "Sunflower Seeds",
        "a": 5,
        "u": "g",
        "k": 5.84,
        "p": 0.21,
        "c": 0.2,
        "f": 0.51
      },
      {
        "n": "Hi-Fibre Bran",
        "a": 10,
        "u": "g",
        "k": 2.7,
        "p": 0.15,
        "c": 0.37,
        "f": 0.05
      },
      {
        "n": "Bran Flakes & Sultanas",
        "a": 5,
        "u": "g",
        "k": 3.57,
        "p": 0.09,
        "c": 0.78,
        "f": 0.02
      },
      {
        "n": "Honey",
        "a": 15,
        "u": "g",
        "k": 3.04,
        "p": 0,
        "c": 0.82,
        "f": 0
      }
    ]
  }
];

const DEFAULT_PLAN = Object.fromEntries(DAYS.map(d => [d, {}]));
