import prisma from '../lib/prisma';

const seedRecipes = [
  {
    title: "Grandma's Masala Chai",
    slug: "grandmas-masala-chai",
    description: "A warming, spiced tea brewed the way Nani always made it — 2 parts water, 1 part milk, and a story with every sip.",
    story: "Every morning, no matter where we were in the world, Nani's first act was to brew chai. She'd wake before dawn, and by the time any of us opened our eyes, the whole house smelled of cardamom and ginger. She never used measuring spoons — it was all in her hands and heart. I watched her make this tea for thirty years before I finally wrote it down. This is that recipe.",
    lovedOneName: "Nani (Grandma)", relationship: "Grandmother", authorName: "Priya Sharma",
    prepTime: 5, cookTime: 12, servings: 2, difficulty: "Easy", cuisine: "Indian", category: "Drinks",
    tips: "Nani always said the secret is not to rush. Let the spices talk to the water before adding the tea.",
    notes: "For a thicker, creamier chai, use 1.5 parts milk to 2 parts water.",
    isPublic: true, coverImage: "/chai-illustration.png", images: [], likes: 284,
    tags: ["chai", "tea", "indian", "spiced", "morning", "comfort"],
    ingredients: ["2 cups water","1 cup whole milk","2 tsp loose-leaf black tea","4 green cardamom pods, lightly crushed","1-inch fresh ginger, grated","1 small cinnamon stick","½ tsp fennel seeds","2–3 tbsp sugar","Pinch of black pepper"],
    steps: ["Add water to a small saucepan and bring to a boil over medium heat.","Add the crushed cardamom, ginger, cinnamon stick, fennel seeds, and black pepper.","Reduce heat and let the spices steep for 2–3 minutes.","Add the tea and let brew for 2 more minutes.","Pour in the milk and bring to a gentle boil, stirring occasionally.","Simmer for 3–4 minutes, stirring so it doesn't boil over.","Add sugar to taste and stir well.","Strain through a fine mesh strainer into cups and serve hot."],
  },
  {
    title: "Maa's Sunday Chicken Biryani",
    slug: "maas-sunday-chicken-biryani",
    description: "The biryani that made Sundays worth waking up for. Layered with love, slow-cooked with patience.",
    story: "Sunday meant biryani. It was never negotiable. Maa would start soaking the rice on Saturday night and wake up early to marinate the chicken. The whole process took most of the morning, but when that dum opened, the whole neighborhood would smell it.",
    lovedOneName: "Maa", relationship: "Mother", authorName: "Arjun Mehta",
    prepTime: 30, cookTime: 60, servings: 6, difficulty: "Hard", cuisine: "Indian", category: "Lunch",
    tips: "Maa always said the dum is the most important step. Don't open the lid early.",
    notes: "Soak the rice the night before. The longer the chicken marinates, the deeper the flavor.",
    isPublic: true, coverImage: "https://images.unsplash.com/photo-1563379091339-03246963d651?w=800&q=80", images: [], likes: 412,
    tags: ["biryani", "chicken", "rice", "indian", "sunday", "family"],
    ingredients: ["2 lbs bone-in chicken pieces","2 cups basmati rice, soaked 30 min","2 large onions, thinly sliced","1 cup plain yogurt","4 tbsp ghee (divided)","1 tbsp ginger-garlic paste","2 tsp biryani masala","Salt to taste","Handful of fresh mint & cilantro","Pinch of saffron in 3 tbsp warm milk"],
    steps: ["Fry sliced onions until golden brown and crispy (barista). Set aside.","Marinate chicken with yogurt, spices, half the fried onions, and ghee for 2+ hours.","Parboil rice with whole spices until 70% cooked. Drain.","Cook marinated chicken until 80% done and masala is thick.","Layer parboiled rice over the chicken. Add mint, cilantro, remaining onions, saffron milk.","Drizzle remaining ghee over top. Seal pot tightly.","Cook on low flame for 25–30 minutes (dum). Rest 10 minutes before serving."],
  },
  {
    title: "Papa's Pasta al Pomodoro",
    slug: "papas-pasta-al-pomodoro",
    description: "The simplest pasta. No cream, no tricks. Just good tomatoes, good olive oil, and Papa's patience.",
    story: "My father learned this recipe in Naples in 1978. He was 22, broke, living in a tiny flat, and this is what he made every Tuesday. He still makes it every Tuesday, fifty years later.",
    lovedOneName: "Papa", relationship: "Father", authorName: "Sofia Rossi",
    prepTime: 5, cookTime: 30, servings: 4, difficulty: "Easy", cuisine: "Italian", category: "Dinner",
    tips: "Papa always finishes with a generous pour of olive oil right at the end, off the heat.",
    notes: "Use the best olive oil you can find. Quality ingredients are everything here.",
    isPublic: true, coverImage: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800&q=80", images: [], likes: 356,
    tags: ["pasta", "tomato", "italian", "simple", "tuesday"],
    ingredients: ["400g spaghetti or linguine","2 cans San Marzano whole peeled tomatoes","5 cloves garlic, thinly sliced","4 tbsp good extra virgin olive oil","Handful fresh basil leaves","1 tsp sugar (optional)","Salt and black pepper to taste"],
    steps: ["Pour tomatoes into a bowl and crush them by hand.","In a large pan, warm olive oil over medium-low heat. Add garlic and let turn golden, about 4 minutes.","Add crushed tomatoes and all their juice. Season with salt and a pinch of sugar.","Simmer uncovered on low for 25 minutes, stirring occasionally, until the sauce deepens.","Meanwhile, boil salted pasta water and cook pasta 2 minutes less than the package says.","Transfer pasta directly into sauce using tongs, adding a splash of pasta water.","Toss over high heat for 2 minutes. Remove from heat, tear in fresh basil, and serve."],
  },
  {
    title: "Grandma Betty's Apple Pie",
    slug: "grandma-bettys-apple-pie",
    description: "The pie that appeared at every Thanksgiving, every birthday, every hard day.",
    story: "Grandma Betty made this pie for every significant moment of my childhood. She passed away in 2019, but we still make it every Thanksgiving. The kitchen smells like her when it's in the oven.",
    lovedOneName: "Grandma Betty", relationship: "Grandmother", authorName: "Eleanor Kim",
    prepTime: 45, cookTime: 55, servings: 8, difficulty: "Medium", cuisine: "American", category: "Dessert",
    tips: "Keep everything cold when making the crust. Grandma Betty always put her butter in the freezer for 20 minutes.",
    notes: "The pie is best the next day, once the filling has had time to settle. Serve with vanilla ice cream.",
    isPublic: true, coverImage: "https://images.unsplash.com/photo-1621743478914-cc8a86d7e7b5?w=800&q=80", images: [], likes: 198,
    tags: ["apple pie", "dessert", "thanksgiving", "baking", "american"],
    ingredients: ["2½ cups all-purpose flour","1 tsp salt","1 cup cold butter, cubed","6–8 tbsp ice cold water","6 large Granny Smith apples, peeled and sliced thin","¾ cup granulated sugar","¼ cup brown sugar","2 tbsp flour","1 tsp cinnamon","¼ tsp nutmeg","1 tbsp lemon juice","1 egg + 1 tbsp water (egg wash)"],
    steps: ["Make the crust: Mix flour and salt. Cut in cold butter until crumbly. Add ice water until dough comes together. Refrigerate 1 hour.","Preheat oven to 425°F (220°C).","Make the filling: Toss sliced apples with sugars, flour, cinnamon, nutmeg, and lemon juice.","Roll out one dough disc and fit into a 9-inch pie pan. Add apple filling.","Roll out second disc and drape over filling. Trim edges and crimp to seal. Cut steam vents.","Brush with egg wash. Bake at 425°F for 15 minutes, then 375°F for 35–40 more minutes.","Cool completely before slicing — at least 2 hours."],
  },
  {
    title: "Abuela Maria's Paella Valenciana",
    slug: "abuela-marias-paella-valenciana",
    description: "Cooked in a massive pan over an open fire every Sunday in Valencia. The real paella — no shortcuts.",
    story: "Abuela Maria was born in Valencia and cooked paella every Sunday of her life. When she came to visit us in Madrid, she brought her own wood in her suitcase. After she passed, we found 47 handwritten recipe cards. This was the one labeled 'La Buena' — The Good One.",
    lovedOneName: "Abuela Maria", relationship: "Great-Grandmother", authorName: "Carlos Vega",
    prepTime: 20, cookTime: 45, servings: 6, difficulty: "Hard", cuisine: "Spanish", category: "Lunch",
    tips: "The socarrat (the crispy rice crust at the bottom) is the prize. In the last 2 minutes, briefly increase heat to create it.",
    notes: "Never stir the paella after adding rice. Abuela Maria would wave a wooden spoon threateningly at anyone who tried.",
    isPublic: true, coverImage: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=800&q=80", images: [], likes: 523,
    tags: ["paella", "spanish", "rice", "saffron", "sunday"],
    ingredients: ["400g bomba or calasparra rice","500g chicken thighs, cut into pieces","200g green beans","200g large lima beans","4 ripe tomatoes, grated","1 tsp sweet paprika","Pinch saffron threads","1.2L hot chicken stock","4 tbsp olive oil","Salt to taste","Fresh rosemary & lemon wedges"],
    steps: ["Heat olive oil in a large paellera. Brown the chicken well on all sides.","Push meat to edges. Add green beans and lima beans to center and sauté 3–4 minutes.","Add grated tomato to center and cook, stirring, for 5 minutes until it darkens.","Add sweet paprika, stir 30 seconds, then immediately add all the hot stock and saffron water.","Bring to a vigorous boil. Add rice in an even distribution over the whole pan. Do not stir again.","Cook on high heat for 10 minutes, then medium-low for 8 minutes, then low for 2 more.","Let rest off heat for 5 minutes. Serve with lemon wedges."],
  },
  {
    title: "Dadima's Dal Tadka",
    slug: "dadimas-dal-tadka",
    description: "Yellow lentils tempered with a crackling tadka of cumin, ghee, and garlic.",
    story: "Dadima made dal every single day. She said a meal without dal was not a proper meal. On nights when things felt hard, she'd make this extra-special tadka with extra ghee. She said the crackling sound of the tadka was the sound of love being put into food.",
    lovedOneName: "Dadima", relationship: "Paternal Grandmother", authorName: "Ananya Kapoor",
    prepTime: 10, cookTime: 35, servings: 4, difficulty: "Easy", cuisine: "Indian", category: "Dinner",
    tips: "The key to a good tadka is heat and confidence. Everything goes in hot and fast.",
    notes: "Dal keeps well in the fridge for 3 days and the flavor deepens.",
    isPublic: true, coverImage: "https://images.unsplash.com/photo-1618449840665-9ed506d73a34?w=800&q=80", images: [], likes: 317,
    tags: ["dal", "lentils", "indian", "weeknight", "comfort", "vegetarian"],
    ingredients: ["1 cup yellow split lentils (moong dal)","3 cups water","1 medium tomato, chopped","½ tsp turmeric","Salt to taste","3 tbsp ghee","1 tsp cumin seeds","4 garlic cloves, thinly sliced","2 dried red chilies","1 medium onion, finely chopped","1 tsp red chili powder","Fresh cilantro & lemon"],
    steps: ["Rinse the lentils until the water runs clear. Add to a pot with 3 cups water, turmeric, and salt. Bring to a boil.","Reduce heat and simmer, skimming foam, for 20–25 minutes until lentils are completely soft.","Add chopped tomato and simmer 5 more minutes. Mash slightly for a creamy texture.","Make the tadka: Heat ghee over high heat until it shimmers.","Add cumin seeds and let them splutter for 10 seconds.","Add garlic and dried red chilies. Fry until garlic is golden, about 1 minute.","Add onion and cook until caramelized, 4–5 minutes. Add chili powder and garam masala, stir 30 seconds.","Pour the entire sizzling tadka over the dal. Stir, add lemon juice, top with cilantro, and serve."],
  },
];


async function main() {
  console.log('Seeding database with mock recipes...');

  // Create a default user to own the recipes
  const defaultUser = await prisma.user.upsert({
    where: { email: 'test@example.com' },
    update: {},
    create: {
      name: 'Test User',
      email: 'test@example.com',
    },
  });

  for (const recipe of seedRecipes) {
    await prisma.recipe.upsert({
      where: { slug: recipe.slug },
      update: {},
      create: {
        title: recipe.title,
        slug: recipe.slug,
        description: recipe.description,
        story: recipe.story,
        lovedOneName: recipe.lovedOneName,
        relationship: recipe.relationship,
        authorName: recipe.authorName,
        authorId: defaultUser.id,
        prepTime: recipe.prepTime,
        cookTime: recipe.cookTime,
        servings: recipe.servings,
        difficulty: recipe.difficulty,
        cuisine: recipe.cuisine,
        category: recipe.category,
        tips: recipe.tips || null,
        notes: recipe.notes || null,
        isPublic: recipe.isPublic,
        likes: recipe.likes,
        coverImage: recipe.coverImage,
        images: recipe.images || [],
        tags: recipe.tags,
        ingredients: recipe.ingredients,
        steps: recipe.steps,
      },
    });
  }

  console.log('Seeding complete!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
