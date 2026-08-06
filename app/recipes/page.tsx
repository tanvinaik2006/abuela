import { getPublicRecipes, getRecipesByCategory, getRecipesByCuisine, CATEGORIES, CUISINES, DIFFICULTIES } from "@/lib/data";
import { RecipeCard } from "@/components/recipe/RecipeCard";
import { SearchBar } from "@/components/ui/SearchBar";
import Link from "next/link";
import { SlidersHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Browse Recipes",
  description: "Explore all public family recipes — from grandmothers' biryanis to fathers' pastas. Every recipe has a story.",
};

interface BrowsePageProps {
  searchParams: Promise<{
    category?: string;
    cuisine?: string;
    difficulty?: string;
  }>;
}

export default async function BrowseRecipesPage({ searchParams }: BrowsePageProps) {
  const params = await searchParams;
  const { category, cuisine, difficulty } = params;

  let recipes = await getPublicRecipes();

  if (category) {
    recipes = recipes.filter((r) => r.category === category);
  }
  if (cuisine) {
    recipes = recipes.filter((r) => r.cuisine === cuisine);
  }
  if (difficulty) {
    recipes = recipes.filter((r) => r.difficulty === difficulty);
  }

  const activeFilters = [category, cuisine, difficulty].filter(Boolean);

  return (
    <div className="min-h-screen pt-20">
      {/* Page Header */}
      <div className="bg-dark-green text-beige py-14 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <p className="text-moss-green text-sm font-semibold uppercase tracking-widest mb-2 font-inter">
            Family Recipes
          </p>
          <h1 className="font-playfair font-bold text-5xl text-beige mb-4">
            {category || cuisine || "All Recipes"}
          </h1>
          <p className="text-beige/60 text-lg max-w-xl">
            {recipes.length} recipe{recipes.length !== 1 ? "s" : ""} — each one a story, a memory, a person worth remembering.
          </p>
          <div className="mt-8 max-w-xl">
            <SearchBar variant="default" className="bg-transparent" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 flex flex-col lg:flex-row gap-10">
        {/* Sidebar filters */}
        <aside className="lg:w-64 flex-shrink-0">
          <div className="card p-5 sticky top-24">
            <h2 className="font-playfair font-bold text-lg text-dark-green mb-4 flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </h2>

            {activeFilters.length > 0 && (
              <Link
                href="/recipes"
                className="text-xs text-rosy-brown hover:text-dark-green font-medium underline underline-offset-2 mb-4 block"
              >
                Clear all filters
              </Link>
            )}

            {/* Category */}
            <div className="mb-6">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-dark-green/50 mb-3 font-inter">
                Category
              </h3>
              <div className="flex flex-col gap-1.5">
                {CATEGORIES.map((cat) => (
                  <Link
                    key={cat}
                    href={`/recipes?category=${cat}${cuisine ? `&cuisine=${cuisine}` : ""}${difficulty ? `&difficulty=${difficulty}` : ""}`}
                    id={`filter-category-${cat.toLowerCase()}`}
                    className={cn(
                      "text-sm px-3 py-2 rounded-lg transition-all duration-200 font-inter",
                      category === cat
                        ? "bg-dark-green text-beige font-semibold"
                        : "text-dark-green/70 hover:bg-muted hover:text-dark-green"
                    )}
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            </div>

            {/* Cuisine */}
            <div className="mb-6">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-dark-green/50 mb-3 font-inter">
                Cuisine
              </h3>
              <div className="flex flex-col gap-1.5">
                {CUISINES.map((c) => (
                  <Link
                    key={c}
                    href={`/recipes?cuisine=${c}${category ? `&category=${category}` : ""}${difficulty ? `&difficulty=${difficulty}` : ""}`}
                    id={`filter-cuisine-${c.toLowerCase()}`}
                    className={cn(
                      "text-sm px-3 py-2 rounded-lg transition-all duration-200 font-inter",
                      cuisine === c
                        ? "bg-dark-green text-beige font-semibold"
                        : "text-dark-green/70 hover:bg-muted hover:text-dark-green"
                    )}
                  >
                    {c}
                  </Link>
                ))}
              </div>
            </div>

            {/* Difficulty */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-dark-green/50 mb-3 font-inter">
                Difficulty
              </h3>
              <div className="flex flex-col gap-1.5">
                {DIFFICULTIES.map((d) => (
                  <Link
                    key={d}
                    href={`/recipes?difficulty=${d}${category ? `&category=${category}` : ""}${cuisine ? `&cuisine=${cuisine}` : ""}`}
                    id={`filter-difficulty-${d.toLowerCase()}`}
                    className={cn(
                      "text-sm px-3 py-2 rounded-lg transition-all duration-200 font-inter",
                      difficulty === d
                        ? "bg-dark-green text-beige font-semibold"
                        : "text-dark-green/70 hover:bg-muted hover:text-dark-green"
                    )}
                  >
                    {d}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Recipe grid */}
        <div className="flex-1">
          {recipes.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="text-5xl mb-4">🍽️</div>
              <h2 className="font-playfair font-bold text-2xl text-dark-green mb-2">
                No recipes found
              </h2>
              <p className="text-dark-green/60 mb-6">
                Try adjusting your filters or{" "}
                <Link href="/recipes" className="text-midnight-green underline">
                  browse all recipes
                </Link>
                .
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {recipes.map((recipe, i) => (
                <div
                  key={recipe.id}
                  className="animate-slide-up"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <RecipeCard recipe={recipe} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
