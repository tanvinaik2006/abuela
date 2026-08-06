// lib/data.ts — Mock seed data for ABUELA (no database required to run)

export interface Recipe {
  id: string;
  title: string;
  slug: string;
  description: string;
  story: string;
  lovedOneName: string;
  relationship: string;
  ingredients: string[];
  steps: string[];
  prepTime: number; // minutes
  cookTime: number; // minutes
  servings: number;
  difficulty: "Easy" | "Medium" | "Hard";
  cuisine: string;
  category: string;
  tips?: string;
  notes?: string;
  isPublic: boolean;
  coverImage: string;
  images?: string[];
  tags: string[];
  createdAt: string;
  authorName: string;
  authorImage?: string;
  likes: number;
}

export const CATEGORIES = [
  "Breakfast",
  "Lunch",
  "Dinner",
  "Dessert",
  "Snack",
  "Drinks",
  "Bread",
  "Soup",
];

export const CUISINES = [
  "Indian",
  "Italian",
  "Mexican",
  "American",
  "Spanish",
  "Chinese",
  "French",
  "Middle Eastern",
];

export const DIFFICULTIES = ["Easy", "Medium", "Hard"] as const;

export const recipes: Recipe[] = [
  {
    id: "1",
    title: "Grandma's Masala Chai",
    slug: "grandmas-masala-chai",
    description:
      "A warming, spiced tea brewed the way Nani always made it — 2 parts water, 1 part milk, and a story with every sip.",
    story:
      "Every morning, no matter where we were in the world, Nani's first act was to brew chai. She'd wake before dawn, and by the time any of us opened our eyes, the whole house smelled of cardamom and ginger. She never used measuring spoons — it was all in her hands and heart. I watched her make this tea for thirty years before I finally wrote it down. This is that recipe. 2 parts water, 1 part milk, always.",
    lovedOneName: "Nani (Grandma)",
    relationship: "Grandmother",
    ingredients: [
      "2 cups water",
      "1 cup whole milk",
      "2 tsp loose-leaf black tea (or 2 tea bags)",
      "4 green cardamom pods, lightly crushed",
      "1-inch fresh ginger, grated",
      "1 small cinnamon stick",
      "½ tsp fennel seeds",
      "2–3 tbsp sugar (adjust to taste)",
      "Pinch of black pepper",
    ],
    steps: [
      "Add water to a small saucepan and bring to a boil over medium heat.",
      "Add the crushed cardamom pods, grated ginger, cinnamon stick, fennel seeds, and black pepper.",
      "Reduce heat to medium-low and let the spices steep for 2–3 minutes until fragrant.",
      "Add the loose-leaf tea or tea bags and let brew for 2 more minutes.",
      "Pour in the milk and increase heat to medium. Bring to a gentle boil, stirring occasionally.",
      "Once it comes to a boil, reduce heat and simmer for 3–4 minutes, stirring so it doesn't boil over.",
      "Add sugar to taste and stir well.",
      "Strain through a fine mesh strainer into cups and serve hot.",
      "Sit somewhere quiet, wrap your hands around the cup, and think of the person who first made this for you.",
    ],
    prepTime: 5,
    cookTime: 12,
    servings: 2,
    difficulty: "Easy",
    cuisine: "Indian",
    category: "Drinks",
    tips:
      "Nani always said the secret is not to rush. Let the spices talk to the water before adding the tea, and always let it boil at least once after the milk goes in.",
    notes:
      "For a thicker, creamier chai, use 1.5 parts milk to 2 parts water. You can also add a pinch of turmeric for a golden chai variant.",
    isPublic: true,
    coverImage: "/chai-illustration.png",
    tags: ["chai", "tea", "indian", "spiced", "morning", "comfort"],
    createdAt: "2024-11-12T07:30:00Z",
    authorName: "Priya Sharma",
    authorImage: "https://i.pravatar.cc/150?img=47",
    likes: 284,
  },
  {
    id: "2",
    title: "Maa's Sunday Chicken Biryani",
    slug: "maas-sunday-chicken-biryani",
    description:
      "The biryani that made Sundays worth waking up for. Layered with love, slow-cooked with patience — exactly how Maa taught me.",
    story:
      "Sunday meant biryani. It was never negotiable. Maa would start soaking the rice on Saturday night and wake up early to marinate the chicken. The whole process took most of the morning, but when that dum (steam) opened, the whole neighborhood would smell it. My friends would show up uninvited on Sundays just hoping to be fed. Maa never turned anyone away. She always made more than enough.",
    lovedOneName: "Maa",
    relationship: "Mother",
    ingredients: [
      "2 lbs bone-in chicken pieces",
      "2 cups basmati rice, soaked for 30 mins",
      "2 large onions, thinly sliced",
      "1 cup plain yogurt",
      "4 tbsp ghee (divided)",
      "2 tbsp oil",
      "1 tbsp ginger-garlic paste",
      "1 tsp red chili powder",
      "1 tsp turmeric",
      "2 tsp biryani masala",
      "1 tsp garam masala",
      "Salt to taste",
      "Handful of fresh mint leaves",
      "Handful of fresh cilantro",
      "Pinch of saffron in 3 tbsp warm milk",
      "4 cardamom pods, 4 cloves, 2 bay leaves",
      "Fried onions (barista) for topping",
    ],
    steps: [
      "Fry the sliced onions in oil until golden brown and crispy (barista). Drain and set aside.",
      "Marinate chicken with yogurt, ginger-garlic paste, red chili powder, turmeric, biryani masala, half the fried onions, salt, and 2 tbsp ghee for at least 2 hours (overnight is best).",
      "Parboil the rice with whole spices (cardamom, cloves, bay leaves) until 70% cooked. Drain and set aside.",
      "Cook the marinated chicken in a heavy-bottomed pot over medium heat until the chicken is 80% done and the masala is thick.",
      "Layer the parboiled rice over the chicken. Add fresh mint, cilantro, remaining fried onions, and saffron milk.",
      "Drizzle remaining 2 tbsp ghee over the top.",
      "Seal the pot tightly with foil then the lid. Cook on low flame for 25–30 minutes (dum).",
      "Let rest for 10 minutes before opening. Gently mix from the bottom and serve with raita.",
    ],
    prepTime: 30,
    cookTime: 60,
    servings: 6,
    difficulty: "Hard",
    cuisine: "Indian",
    category: "Lunch",
    tips:
      "Maa always said the dum is the most important step. Don't open the lid early — let it breathe in its own steam.",
    notes:
      "Soak the rice the night before. The longer the chicken marinates, the deeper the flavor.",
    isPublic: true,
    coverImage:
      "https://images.unsplash.com/photo-1563379091339-03246963d651?w=800&q=80",
    tags: ["biryani", "chicken", "rice", "indian", "sunday", "family"],
    createdAt: "2024-10-28T11:00:00Z",
    authorName: "Arjun Mehta",
    authorImage: "https://i.pravatar.cc/150?img=12",
    likes: 412,
  },
  {
    id: "3",
    title: "Papa's Pasta al Pomodoro",
    slug: "papas-pasta-al-pomodoro",
    description:
      "The simplest pasta. No cream, no tricks. Just good tomatoes, good olive oil, and Papa's patience.",
    story:
      "My father learned this recipe in Naples in 1978. He was 22, broke, living in a tiny flat, and this is what he made every Tuesday. He still makes it every Tuesday, fifty years later. He says it's proof that the best things in life don't need to be complicated. When I moved out, this was the first thing he wrote down and put in an envelope for me.",
    lovedOneName: "Papa",
    relationship: "Father",
    ingredients: [
      "400g spaghetti or linguine",
      "2 cans (800g) San Marzano whole peeled tomatoes",
      "5 cloves garlic, thinly sliced",
      "4 tbsp good extra virgin olive oil (plus more to finish)",
      "Handful fresh basil leaves",
      "1 tsp sugar (optional, balances acidity)",
      "Salt and black pepper to taste",
      "Parmesan for serving",
    ],
    steps: [
      "Pour the tomatoes into a bowl and crush them by hand. This is important — don't use a blender.",
      "In a large pan, warm the olive oil over medium-low heat. Add the garlic slices and let them gently turn golden, about 4 minutes. Do not burn them.",
      "Add the crushed tomatoes and all their juice. Season with salt and a tiny pinch of sugar.",
      "Simmer uncovered on low heat for 25 minutes, stirring occasionally, until the sauce thickens and turns deep red.",
      "Meanwhile, boil salted pasta water (it should taste like the sea) and cook pasta 2 minutes less than the package says.",
      "Transfer pasta directly into the sauce using tongs, adding a splash of pasta water.",
      "Toss over high heat for 2 minutes until the pasta is glossy and coated.",
      "Remove from heat, tear in fresh basil, drizzle with good olive oil, and serve immediately.",
    ],
    prepTime: 5,
    cookTime: 30,
    servings: 4,
    difficulty: "Easy",
    cuisine: "Italian",
    category: "Dinner",
    tips:
      "Papa always finishes with a generous pour of olive oil right at the end, off the heat. He says this is the soul of the dish.",
    notes:
      "Use the best olive oil you can find. This is a recipe where the quality of ingredients is everything.",
    isPublic: true,
    coverImage:
      "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800&q=80",
    tags: ["pasta", "tomato", "italian", "simple", "tuesday"],
    createdAt: "2024-09-15T18:30:00Z",
    authorName: "Sofia Rossi",
    authorImage: "https://i.pravatar.cc/150?img=9",
    likes: 356,
  },
  {
    id: "4",
    title: "Grandma Betty's Apple Pie",
    slug: "grandma-bettys-apple-pie",
    description:
      "The pie that appeared at every Thanksgiving, every birthday, every hard day. Grandma Betty's apple pie makes everything better.",
    story:
      "Grandma Betty made this pie for every significant moment of my childhood. When I graduated, when I had my heart broken for the first time, when I got married — there was always this pie. She passed away in 2019, but we still make it every Thanksgiving. The kitchen smells like her when it's in the oven. That's the closest we can get.",
    lovedOneName: "Grandma Betty",
    relationship: "Grandmother",
    ingredients: [
      "2½ cups all-purpose flour",
      "1 tsp salt",
      "1 cup cold butter, cubed",
      "6–8 tbsp ice cold water",
      "6 large Granny Smith apples, peeled and sliced thin",
      "¾ cup granulated sugar",
      "¼ cup brown sugar",
      "2 tbsp all-purpose flour",
      "1 tsp cinnamon",
      "¼ tsp nutmeg",
      "1 tbsp lemon juice",
      "2 tbsp butter (for filling)",
      "1 egg + 1 tbsp water (egg wash)",
      "1 tbsp coarse sugar (for top)",
    ],
    steps: [
      "Make the crust: Mix flour and salt. Cut in cold butter until it resembles coarse crumbs. Add ice water one tablespoon at a time until dough just comes together. Divide in two, flatten into discs, wrap and refrigerate 1 hour.",
      "Preheat oven to 425°F (220°C).",
      "Make the filling: Toss sliced apples with both sugars, flour, cinnamon, nutmeg, and lemon juice.",
      "Roll out one dough disc on a floured surface and fit into a 9-inch pie pan.",
      "Add the apple filling, mounding it slightly in the center. Dot with small pieces of butter.",
      "Roll out the second disc and drape over the filling. Trim edges and crimp to seal. Cut a few slits in the top for steam.",
      "Brush with egg wash and sprinkle with coarse sugar.",
      "Bake at 425°F for 15 minutes, then reduce to 375°F (190°C) and bake 35–40 more minutes until golden and bubbling.",
      "Cool completely before slicing — at least 2 hours. Grandma Betty never rushed this step.",
    ],
    prepTime: 45,
    cookTime: 55,
    servings: 8,
    difficulty: "Medium",
    cuisine: "American",
    category: "Dessert",
    tips:
      "Keep everything cold when making the crust. Grandma Betty always put her butter in the freezer for 20 minutes before starting.",
    notes:
      "The pie is best the next day, once the filling has had time to settle. Serve with vanilla ice cream.",
    isPublic: true,
    coverImage:
      "https://images.unsplash.com/photo-1621743478914-cc8a86d7e7b5?w=800&q=80",
    tags: ["apple pie", "dessert", "thanksgiving", "baking", "american"],
    createdAt: "2024-11-20T14:00:00Z",
    authorName: "Eleanor Kim",
    authorImage: "https://i.pravatar.cc/150?img=23",
    likes: 198,
  },
  {
    id: "5",
    title: "Abuela Maria's Paella Valenciana",
    slug: "abuela-marias-paella-valenciana",
    description:
      "Cooked in a massive pan over an open fire every Sunday in Valencia. This is the real paella — no shortcuts, no saffron substitutes.",
    story:
      "Abuela Maria was born in Valencia and cooked paella every Sunday of her life. She had a paellera the size of a table and she cooked it outside over orange wood — she insisted the wood was the secret. When she came to visit us in Madrid, she brought her own wood in her suitcase. The whole family laughed, but the paella tasted like home. After she passed, we found 47 handwritten recipe cards in her kitchen drawer. This was the one labeled 'La Buena' — The Good One.",
    lovedOneName: "Abuela Maria",
    relationship: "Great-Grandmother",
    ingredients: [
      "400g bomba or calasparra rice",
      "500g chicken thighs, cut into pieces",
      "300g rabbit (optional, traditional)",
      "200g green beans (bajoqueta)",
      "200g large lima beans (garrofón)",
      "4 ripe tomatoes, grated",
      "1 tsp sweet paprika",
      "Pinch saffron threads (steep in hot water)",
      "1.2L hot chicken or vegetable stock",
      "4 tbsp olive oil",
      "Salt to taste",
      "Fresh rosemary sprig",
      "Lemon wedges to serve",
    ],
    steps: [
      "Heat olive oil in a large paellera or wide pan over high heat. Brown the chicken (and rabbit if using) well on all sides. Season generously with salt.",
      "Push the meat to the edges. Add green beans and lima beans to the center and sauté for 3–4 minutes.",
      "Add the grated tomato to the center and cook, stirring, for 5 minutes until it darkens and dries out.",
      "Add the sweet paprika, stir quickly for 30 seconds (don't let it burn), then immediately add all the hot stock.",
      "Add the saffron water, stir to combine, and taste for salt. It should be slightly saltier than you want the final dish.",
      "Bring to a vigorous boil. Add the rice in a cross or even distribution over the whole pan. Do not stir again.",
      "Cook on high heat for 10 minutes, then reduce to medium-low for 8 minutes, then low for 2 more.",
      "Add a sprig of rosemary and let rest off heat, uncovered, for 5 minutes before serving.",
      "Serve directly from the pan with lemon wedges.",
    ],
    prepTime: 20,
    cookTime: 45,
    servings: 6,
    difficulty: "Hard",
    cuisine: "Spanish",
    category: "Lunch",
    tips:
      "The socarrat (the crispy rice crust at the bottom) is the prize. In the last 2 minutes, briefly increase heat to create it. You'll hear it crackle.",
    notes:
      "Never stir the paella after adding rice. Abuela Maria would wave a wooden spoon threateningly at anyone who tried.",
    isPublic: true,
    coverImage:
      "https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=800&q=80",
    tags: ["paella", "spanish", "rice", "saffron", "sunday"],
    createdAt: "2024-08-03T13:00:00Z",
    authorName: "Carlos Vega",
    authorImage: "https://i.pravatar.cc/150?img=67",
    likes: 523,
  },
  {
    id: "6",
    title: "Dadima's Dal Tadka",
    slug: "dadimas-dal-tadka",
    description:
      "Yellow lentils tempered with a crackling tadka of cumin, ghee, and garlic. The weekday dinner that always felt like a celebration.",
    story:
      "Dadima made dal every single day. Different dal, different tadka, but always dal. She said a meal without dal was not a proper meal, and we all believed her. On nights when things felt hard — exams, arguments, sadness — she'd make this extra-special tadka with extra ghee and a whole dried red chili. She said the crackling sound of the tadka was the sound of love being put into food. I think she was right.",
    lovedOneName: "Dadima",
    relationship: "Paternal Grandmother",
    ingredients: [
      "1 cup yellow split lentils (moong dal or chana dal)",
      "3 cups water",
      "1 medium tomato, chopped",
      "½ tsp turmeric",
      "Salt to taste",
      "For the tadka:",
      "3 tbsp ghee (generously)",
      "1 tsp cumin seeds",
      "4 garlic cloves, thinly sliced",
      "2 dried red chilies",
      "1 medium onion, finely chopped",
      "1 tsp red chili powder",
      "½ tsp garam masala",
      "Fresh cilantro to finish",
      "Squeeze of lemon",
    ],
    steps: [
      "Rinse the lentils until the water runs clear. Add to a pot with 3 cups water, turmeric, and salt. Bring to a boil.",
      "Reduce heat and simmer, skimming any foam, for 20–25 minutes until the lentils are completely soft and mushy.",
      "Add the chopped tomato and simmer for 5 more minutes. Mash the dal slightly with the back of a spoon for a creamy texture.",
      "Make the tadka: In a small pan, heat ghee over high heat until it shimmers.",
      "Add cumin seeds and let them splutter for 10 seconds.",
      "Add garlic slices and dried red chilies. Fry until the garlic is golden, about 1 minute.",
      "Add the chopped onion and cook until translucent and slightly caramelized, 4–5 minutes.",
      "Add red chili powder and garam masala, stir for 30 seconds.",
      "Pour the entire sizzling tadka over the dal — this is the most satisfying moment in cooking.",
      "Stir gently, add a squeeze of lemon, top with fresh cilantro, and serve with rice or roti.",
    ],
    prepTime: 10,
    cookTime: 35,
    servings: 4,
    difficulty: "Easy",
    cuisine: "Indian",
    category: "Dinner",
    tips:
      "The key to a good tadka is heat and confidence. Everything goes in hot and fast. Don't be timid with the ghee.",
    notes:
      "Dal keeps well in the fridge for 3 days and the flavor deepens. Add a fresh tadka when reheating.",
    isPublic: true,
    coverImage:
      "https://images.unsplash.com/photo-1618449840665-9ed506d73a34?w=800&q=80",
    tags: ["dal", "lentils", "indian", "weeknight", "comfort", "vegetarian"],
    createdAt: "2024-12-01T19:00:00Z",
    authorName: "Ananya Kapoor",
    authorImage: "https://i.pravatar.cc/150?img=5",
    likes: 317,
  },
];

export function getRecipeById(id: string): Recipe | undefined {
  return recipes.find((r) => r.id === id);
}

export function getRecipeBySlug(slug: string): Recipe | undefined {
  return recipes.find((r) => r.slug === slug);
}

export function getPublicRecipes(): Recipe[] {
  return recipes.filter((r) => r.isPublic);
}

export function searchRecipes(query: string): Recipe[] {
  const q = query.toLowerCase();
  return recipes.filter(
    (r) =>
      r.isPublic &&
      (r.title.toLowerCase().includes(q) ||
        r.description.toLowerCase().includes(q) ||
        r.lovedOneName.toLowerCase().includes(q) ||
        r.cuisine.toLowerCase().includes(q) ||
        r.category.toLowerCase().includes(q) ||
        r.tags.some((t) => t.includes(q)) ||
        r.ingredients.some((i) => i.toLowerCase().includes(q)))
  );
}

export function getRecipesByCategory(category: string): Recipe[] {
  return recipes.filter((r) => r.isPublic && r.category === category);
}

export function getRecipesByCuisine(cuisine: string): Recipe[] {
  return recipes.filter((r) => r.isPublic && r.cuisine === cuisine);
}

export function formatTime(minutes: number): string {
  if (minutes < 60) return `${minutes} min`;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return m > 0 ? `${h}h ${m}m` : `${h}h`;
}
