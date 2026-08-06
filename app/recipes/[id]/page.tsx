import { getRecipeById, getPublicRecipes, formatTime } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, Users, ChefHat, Heart, ArrowLeft, Share2 } from "lucide-react";
import { RecipeCard } from "@/components/recipe/RecipeCard";
import { RecipeActions } from "@/components/recipe/RecipeActions";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";

interface RecipePageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: RecipePageProps): Promise<Metadata> {
  const { id } = await params;
  const recipe = getRecipeById(id);
  if (!recipe) return { title: "Recipe Not Found" };
  return {
    title: recipe.title,
    description: recipe.description,
  };
}

export async function generateStaticParams() {
  const recipes = getPublicRecipes();
  return recipes.map((r) => ({ id: r.id }));
}

const difficultyColor: Record<string, string> = {
  Easy: "badge-green",
  Medium: "badge-teal",
  Hard: "badge-rosy",
};

export default async function RecipePage({ params }: RecipePageProps) {
  const { id } = await params;
  const recipe = getRecipeById(id);

  if (!recipe) {
    notFound();
  }

  const allRecipes = getPublicRecipes();
  const related = allRecipes
    .filter((r) => r.id !== recipe.id && (r.cuisine === recipe.cuisine || r.category === recipe.category))
    .slice(0, 3);

  const totalTime = recipe.prepTime + recipe.cookTime;

  return (
    <div className="min-h-screen pt-16">
      {/* ============================================
          HERO COVER
      ============================================ */}
      <div className="relative h-[50vh] min-h-[380px] overflow-hidden">
        <Image
          src={recipe.coverImage}
          alt={recipe.title}
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-green/30 via-dark-green/20 to-dark-green/90" />

        {/* Back link */}
        <Link
          href="/recipes"
          className="absolute top-6 left-6 flex items-center gap-2 text-beige/80 hover:text-beige text-sm font-medium transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Recipes
        </Link>

        {/* Header content */}
        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-10 pb-10 max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="badge badge-green">{recipe.category}</span>
            <span className={cn("badge", difficultyColor[recipe.difficulty])}>{recipe.difficulty}</span>
            <span className="badge badge-teal">{recipe.cuisine}</span>
          </div>
          <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-beige leading-tight mb-3">
            {recipe.title}
          </h1>
          <p className="text-beige/70 text-lg max-w-2xl">
            {recipe.description}
          </p>
        </div>
      </div>

      {/* ============================================
          RECIPE BODY
      ============================================ */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main content */}
          <div className="flex-1 min-w-0">

            {/* Author + Actions */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-8 border-b border-[#d4d0a8]">
              <div className="flex items-center gap-3">
                {recipe.authorImage && (
                  <Image
                    src={recipe.authorImage}
                    alt={recipe.authorName}
                    width={44}
                    height={44}
                    className="rounded-full object-cover"
                    unoptimized
                  />
                )}
                <div>
                  <p className="text-sm text-dark-green/50 font-inter">Shared by</p>
                  <p className="font-semibold text-dark-green font-inter">{recipe.authorName}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <RecipeActions
                  recipeTitle={recipe.title}
                  likes={recipe.likes}
                  authorName={recipe.authorName}
                  authorImage={recipe.authorImage}
                />
                <div className="flex items-center gap-1.5 text-sm font-semibold text-rosy-brown">
                  <Heart className="w-4 h-4 fill-rosy-brown" />
                  {recipe.likes}
                </div>
              </div>
            </div>

            {/* ---- STORY SECTION ---- */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-1 h-8 bg-rosy-brown rounded-full" />
                <h2 className="font-playfair font-bold text-2xl text-dark-green">
                  The Story Behind This Recipe
                </h2>
              </div>
              <div className="bg-cream-50 border border-[#d4d0a8] rounded-2xl p-6 md:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div>
                    <p className="font-playfair font-bold text-lg text-dark-green">
                      {recipe.lovedOneName}
                    </p>
                    <p className="text-sm text-dark-green/50 font-inter">{recipe.relationship}</p>
                  </div>
                  <div className="ml-auto text-3xl">❤️</div>
                </div>
                <blockquote className="text-dark-green/80 text-base leading-relaxed font-inter italic border-l-4 border-rosy-brown/30 pl-4">
                  {recipe.story}
                </blockquote>
              </div>
            </div>

            {/* ---- INGREDIENTS ---- */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-1 h-8 bg-moss-green rounded-full" />
                <h2 className="font-playfair font-bold text-2xl text-dark-green">
                  Ingredients
                </h2>
              </div>
              <div className="card p-6">
                <ul className="space-y-3">
                  {recipe.ingredients.map((ingredient, i) => (
                    <li key={i} className="flex items-start gap-3 text-dark-green/80 font-inter">
                      <span className="mt-1 w-5 h-5 flex-shrink-0 rounded-full border-2 border-moss-green/40 flex items-center justify-center">
                        <span className="w-2 h-2 rounded-full bg-moss-green/60" />
                      </span>
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ---- INSTRUCTIONS ---- */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-1 h-8 bg-midnight-green rounded-full" />
                <h2 className="font-playfair font-bold text-2xl text-dark-green">
                  Instructions
                </h2>
              </div>
              <ol className="space-y-4">
                {recipe.steps.map((step, i) => (
                  <li key={i} className="flex gap-4 items-start card p-5">
                    <div className="step-counter flex-shrink-0">{i + 1}</div>
                    <p className="text-dark-green/80 font-inter leading-relaxed pt-0.5">
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            </div>

            {/* Tips & Notes */}
            {(recipe.tips || recipe.notes) && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
                {recipe.tips && (
                  <div className="bg-moss-green/10 border border-moss-green/20 rounded-2xl p-5">
                    <h3 className="font-playfair font-bold text-base text-dark-green mb-2 flex items-center gap-2">
                      💡 Tips
                    </h3>
                    <p className="text-dark-green/70 text-sm font-inter leading-relaxed">
                      {recipe.tips}
                    </p>
                  </div>
                )}
                {recipe.notes && (
                  <div className="bg-rosy-brown/10 border border-rosy-brown/20 rounded-2xl p-5">
                    <h3 className="font-playfair font-bold text-base text-dark-green mb-2 flex items-center gap-2">
                      📝 Notes
                    </h3>
                    <p className="text-dark-green/70 text-sm font-inter leading-relaxed">
                      {recipe.notes}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {recipe.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/search?q=${tag}`}
                  className="badge badge-green text-xs capitalize hover:bg-moss-green hover:text-beige transition-colors"
                >
                  #{tag}
                </Link>
              ))}
            </div>
          </div>

          {/* ---- SIDEBAR ---- */}
          <aside className="lg:w-72 flex-shrink-0">
            <div className="sticky top-24 space-y-5">
              {/* Quick Stats */}
              <div className="card p-5">
                <h3 className="font-playfair font-bold text-base text-dark-green mb-4">
                  Recipe Details
                </h3>
                <div className="space-y-3">
                  {[
                    { icon: <Clock className="w-4 h-4" />, label: "Prep Time", value: formatTime(recipe.prepTime) },
                    { icon: <Clock className="w-4 h-4" />, label: "Cook Time", value: formatTime(recipe.cookTime) },
                    { icon: <Clock className="w-4 h-4" />, label: "Total Time", value: formatTime(totalTime) },
                    { icon: <Users className="w-4 h-4" />, label: "Servings", value: `${recipe.servings} people` },
                    { icon: <ChefHat className="w-4 h-4" />, label: "Difficulty", value: recipe.difficulty },
                  ].map(({ icon, label, value }) => (
                    <div key={label} className="flex items-center justify-between text-sm font-inter">
                      <span className="flex items-center gap-2 text-dark-green/50">
                        <span className="text-dark-green/40">{icon}</span>
                        {label}
                      </span>
                      <span className="font-semibold text-dark-green">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="card p-5 bg-dark-green text-beige border-0">
                <p className="font-playfair font-bold text-lg mb-2">
                  Have a recipe to share?
                </p>
                <p className="text-beige/65 text-sm mb-4 font-inter leading-relaxed">
                  Don&apos;t let a family recipe fade away. Preserve it here for generations.
                </p>
                <Link href="/dashboard/new" className="btn-accent text-sm w-full justify-center">
                  Add Your Recipe
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* ---- RELATED RECIPES ---- */}
      {related.length > 0 && (
        <section className="py-16 px-6 md:px-10 bg-dark-green/5 border-t border-[#d4d0a8]">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-playfair font-bold text-3xl text-dark-green mb-8">
              You Might Also Love
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map((r) => (
                <RecipeCard key={r.id} recipe={r} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
