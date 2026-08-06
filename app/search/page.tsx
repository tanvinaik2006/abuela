import { searchRecipes, getPublicRecipes } from "@/lib/data";
import { RecipeCard } from "@/components/recipe/RecipeCard";
import { SearchBar } from "@/components/ui/SearchBar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search Recipes",
  description: "Search family recipes by name, ingredient, cuisine, or the name of your loved one.",
};

interface SearchPageProps {
  searchParams: Promise<{ q?: string }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const query = params.q || "";
  const results = query ? await searchRecipes(query) : await getPublicRecipes();

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <div className="bg-dark-green text-beige py-14 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <p className="text-moss-green text-sm font-semibold uppercase tracking-widest mb-2 font-inter">
            Find a Recipe
          </p>
          <h1 className="font-playfair font-bold text-5xl text-beige mb-6">
            {query ? `Results for "${query}"` : "Search Recipes"}
          </h1>
          <div className="max-w-xl">
            <SearchBar initialValue={query} variant="default" />
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
        {query ? (
          <p className="text-dark-green/60 font-inter mb-8">
            {results.length > 0
              ? `Found ${results.length} recipe${results.length !== 1 ? "s" : ""} matching "${query}"`
              : `No recipes found for "${query}"`}
          </p>
        ) : (
          <p className="text-dark-green/60 font-inter mb-8">
            Showing all {results.length} public recipes
          </p>
        )}

        {results.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="text-5xl mb-4">🔍</div>
            <h2 className="font-playfair font-bold text-2xl text-dark-green mb-2">
              No recipes found
            </h2>
            <p className="text-dark-green/60">
              Try searching for a different ingredient, cuisine, or loved one&apos;s name.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {results.map((recipe, i) => (
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
  );
}
