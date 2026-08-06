import { getPublicRecipes } from "@/lib/data";
import { RecipeCard } from "@/components/recipe/RecipeCard";
import Link from "next/link";
import {
  Plus,
  BookOpen,
  Globe,
  Lock,
  TrendingUp,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Dashboard",
  description: "Manage your family recipe collection.",
};

export default function DashboardPage() {
  // Using public recipes as demo "my recipes"
  const myRecipes = getPublicRecipes().slice(0, 4);
  const publicCount = myRecipes.filter((r) => r.isPublic).length;
  const totalLikes = myRecipes.reduce((sum, r) => sum + r.likes, 0);

  return (
    <div className="min-h-screen pt-20 bg-beige">
      {/* Header */}
      <div className="bg-dark-green text-beige py-12 px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-moss-green text-sm font-semibold uppercase tracking-widest mb-2 font-inter">
              Welcome back
            </p>
            <h1 className="font-playfair font-bold text-4xl text-beige">
              My Recipe Archive
            </h1>
            <p className="text-beige/60 mt-1 font-inter">
              Your family&apos;s flavors, all in one place.
            </p>
          </div>
          <Link href="/dashboard/new" className="btn-accent">
            <Plus className="w-5 h-5" />
            Add New Recipe
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
          {[
            {
              icon: <BookOpen className="w-5 h-5" />,
              label: "Total Recipes",
              value: myRecipes.length,
              color: "bg-dark-green text-beige",
            },
            {
              icon: <Globe className="w-5 h-5" />,
              label: "Public Recipes",
              value: publicCount,
              color: "bg-moss-green text-beige",
            },
            {
              icon: <TrendingUp className="w-5 h-5" />,
              label: "Total Likes",
              value: totalLikes,
              color: "bg-rosy-brown text-dark-green",
            },
          ].map((stat) => (
            <div key={stat.label} className="card p-6 flex items-center gap-4">
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center ${stat.color}`}
              >
                {stat.icon}
              </div>
              <div>
                <p className="text-3xl font-playfair font-bold text-dark-green">
                  {stat.value}
                </p>
                <p className="text-dark-green/50 text-sm font-inter">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Recipes list */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-playfair font-bold text-2xl text-dark-green">
            My Recipes
          </h2>
        </div>

        {myRecipes.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center card">
            <div className="text-5xl mb-4">🍳</div>
            <h2 className="font-playfair font-bold text-2xl text-dark-green mb-2">
              Your kitchen is empty
            </h2>
            <p className="text-dark-green/60 mb-6 max-w-sm">
              Start preserving your family&apos;s recipes. Add the first one today.
            </p>
            <Link href="/dashboard/new" className="btn-primary">
              <Plus className="w-4 h-4" />
              Add First Recipe
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Add new card */}
            <Link
              href="/dashboard/new"
              id="dashboard-add-recipe-card"
              className="card border-2 border-dashed border-[#d4d0a8] hover:border-moss-green flex flex-col items-center justify-center gap-3 p-8 text-center min-h-[280px] group cursor-pointer no-underline transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-moss-green/10 flex items-center justify-center group-hover:bg-moss-green transition-all duration-300">
                <Plus className="w-7 h-7 text-moss-green group-hover:text-beige transition-colors" />
              </div>
              <div>
                <p className="font-playfair font-bold text-dark-green group-hover:text-midnight-green">
                  Add New Recipe
                </p>
                <p className="text-sm text-dark-green/50 mt-1 font-inter">
                  Preserve another memory
                </p>
              </div>
            </Link>

            {myRecipes.map((recipe, i) => (
              <div
                key={recipe.id}
                className="relative animate-slide-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <RecipeCard recipe={recipe} />
                {/* Privacy badge */}
                <div className="absolute top-3 right-3 bg-white/90 text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                  {recipe.isPublic ? (
                    <>
                      <Globe className="w-3 h-3 text-moss-green" />
                      <span className="text-moss-green">Public</span>
                    </>
                  ) : (
                    <>
                      <Lock className="w-3 h-3 text-dark-green/50" />
                      <span className="text-dark-green/50">Private</span>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
