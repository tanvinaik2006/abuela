import Link from "next/link";
import Image from "next/image";
import { getPublicRecipes, CATEGORIES, CUISINES } from "@/lib/data";
import { RecipeCard } from "@/components/recipe/RecipeCard";
import { SearchBar } from "@/components/ui/SearchBar";
import {
  BookOpen,
  Heart,
  ArrowRight,
  Coffee,
  Utensils,
  Cake,
  Soup,
  Star,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ABUELA — Every recipe has a story",
  description:
    "A digital home for preserving family recipes, traditions, and the memories attached to the people who made them.",
};

const categoryIcons: Record<string, React.ReactNode> = {
  Breakfast: <Coffee className="w-5 h-5" />,
  Lunch: <Utensils className="w-5 h-5" />,
  Dinner: <Utensils className="w-5 h-5" />,
  Dessert: <Cake className="w-5 h-5" />,
  Snack: <Star className="w-5 h-5" />,
  Drinks: <Coffee className="w-5 h-5" />,
  Bread: <Soup className="w-5 h-5" />,
  Soup: <Soup className="w-5 h-5" />,
};

export default function HomePage() {
  const allRecipes = getPublicRecipes();
  const featuredRecipes = allRecipes.slice(0, 3);
  const recentRecipes = allRecipes.slice(3, 6);

  return (
    <div className="min-h-screen">
      {/* ============================================
          HERO SECTION
      ============================================ */}
      <section className="hero-section noise-overlay relative pt-28 pb-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          {/* Tag line above */}
          <div
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-beige text-sm font-medium px-4 py-2 rounded-full mb-8 animate-fade-in"
          >
            <Heart className="w-3.5 h-3.5 fill-rosy-brown text-rosy-brown" />
            A digital family cookbook
          </div>

          {/* Main heading */}
          <h1
            className="font-playfair font-bold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white leading-[1.1] mb-6 animate-slide-up max-w-4xl"
          >
            Every recipe
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #F7F4D5 0%, #D3968C 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              has a story.
            </span>
          </h1>

          <p
            className="text-white/70 text-lg sm:text-xl max-w-2xl mb-10 font-inter leading-relaxed animate-slide-up"
            style={{ animationDelay: "150ms" }}
          >
            Preserve the flavors, memories, and love of the people who made them.
            Whether it&apos;s Grandma&apos;s biryani, Papa&apos;s pasta, or Nani&apos;s chai —
            every recipe deserves to live on.
          </p>

          {/* Search bar */}
          <div
            className="w-full flex justify-center animate-slide-up mb-8"
            style={{ animationDelay: "250ms" }}
          >
            <SearchBar variant="hero" />
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-wrap gap-4 justify-center animate-slide-up mb-14"
            style={{ animationDelay: "350ms" }}
          >
            <Link href="/recipes" className="btn-primary">
              Browse Recipes
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/dashboard/new" className="btn-secondary"
              style={{ borderColor: "rgba(247,244,213,0.5)", color: "#F7F4D5" }}>
              <BookOpen className="w-4 h-4" />
              Preserve Yours
            </Link>
          </div>

          {/* Hero Illustration Showcase */}
          <div
            className="w-full max-w-4xl relative rounded-3xl p-3 bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl overflow-hidden animate-slide-up mb-12"
            style={{ animationDelay: "450ms" }}
          >
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-cream-100">
              <Image
                src="/hero-illustration.png"
                alt="Grandmother cooking in a cozy kitchen surrounded by spices and recipe books"
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-700"
                priority
                unoptimized
              />
            </div>
          </div>

          {/* Stats */}
          <div
            className="flex flex-wrap gap-10 justify-center animate-fade-in"
            style={{ animationDelay: "600ms" }}
          >
            {[
              { value: `${allRecipes.length}+`, label: "Family Recipes" },
              { value: "6", label: "Cuisines" },
              { value: "∞", label: "Memories" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-playfair font-bold text-3xl text-rosy-brown">
                  {stat.value}
                </div>
                <div className="text-white/50 text-xs uppercase tracking-widest mt-1 font-inter">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
          <span className="text-xs font-inter uppercase tracking-widest">
            Scroll
          </span>
          <div className="w-px h-8 bg-white/20 animate-pulse" />
        </div>
      </section>

      {/* ============================================
          FEATURED RECIPES
      ============================================ */}
      <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-moss-green text-sm font-semibold uppercase tracking-widest mb-2 font-inter">
              Loved & Shared
            </p>
            <h2 className="font-playfair font-bold text-4xl text-dark-green">
              Featured Recipes
            </h2>
          </div>
          <Link
            href="/recipes"
            className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-midnight-green hover:text-dark-green transition-colors"
          >
            View all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredRecipes.map((recipe, i) => (
            <div
              key={recipe.id}
              className="animate-slide-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <RecipeCard recipe={recipe} variant="featured" />
            </div>
          ))}
        </div>
      </section>

      {/* ============================================
          ILLUSTRATION + QUOTE SECTION
      ============================================ */}
      <section className="py-16 px-6 md:px-10 bg-dark-green/5 border-y border-[#d4d0a8]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <p className="text-moss-green text-sm font-semibold uppercase tracking-widest mb-4 font-inter">
              Our Mission
            </p>
            <h2 className="font-playfair font-bold text-4xl lg:text-5xl text-dark-green leading-tight mb-6">
              More than a recipe.{" "}
              <span className="text-rosy-brown">A memory.</span>
            </h2>
            <p className="text-dark-green/70 text-lg leading-relaxed mb-8 max-w-lg">
              Abuela is a digital home for the meals, traditions, and memories
              shared by the people we love. Even after our loved ones are gone,
              their recipes become a way to reconnect — to preserve a part of
              their legacy for generations.
            </p>
            <Link href="/dashboard/new" className="btn-primary">
              <Heart className="w-4 h-4" />
              Start Preserving
            </Link>
          </div>
          <div className="flex-shrink-0">
            <div className="relative w-64 h-64 lg:w-80 lg:h-80">
              <Image
                src="/food-illustration.png"
                alt="Food illustration"
                fill
                className="object-contain animate-float"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          BROWSE BY CATEGORY
      ============================================ */}
      <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-moss-green text-sm font-semibold uppercase tracking-widest mb-2 font-inter">
            Find What You&apos;re Craving
          </p>
          <h2 className="font-playfair font-bold text-4xl text-dark-green">
            Browse by Category
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {CATEGORIES.map((cat, i) => (
            <Link
              key={cat}
              href={`/recipes?category=${cat}`}
              id={`category-${cat.toLowerCase()}`}
              className="card flex flex-col items-center justify-center gap-3 p-6 text-center group cursor-pointer no-underline"
              style={{
                animationDelay: `${i * 60}ms`,
              }}
            >
              <div className="w-12 h-12 bg-moss-green/10 rounded-xl flex items-center justify-center text-moss-green group-hover:bg-moss-green group-hover:text-beige transition-all duration-300">
                {categoryIcons[cat] || <Utensils className="w-5 h-5" />}
              </div>
              <span className="font-playfair font-semibold text-dark-green group-hover:text-midnight-green transition-colors">
                {cat}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ============================================
          RECENTLY ADDED
      ============================================ */}
      <section className="py-20 px-6 md:px-10 bg-dark-green text-beige">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-moss-green text-sm font-semibold uppercase tracking-widest mb-2 font-inter">
                Fresh from the Kitchen
              </p>
              <h2 className="font-playfair font-bold text-4xl text-beige">
                Recently Added
              </h2>
            </div>
            <Link
              href="/recipes"
              className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-rosy-brown hover:text-beige transition-colors"
            >
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {recentRecipes.map((recipe) => (
              <Link
                key={recipe.id}
                href={`/recipes/${recipe.id}`}
                className="flex gap-4 items-start group cursor-pointer no-underline"
              >
                <div className="relative w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden">
                  <Image
                    src={recipe.coverImage}
                    alt={recipe.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    unoptimized
                  />
                </div>
                <div>
                  <span className="text-xs text-moss-green font-semibold uppercase tracking-wide">
                    {recipe.category}
                  </span>
                  <h3 className="font-playfair font-bold text-base text-beige group-hover:text-rosy-brown transition-colors mt-1 leading-snug">
                    {recipe.title}
                  </h3>
                  <p className="text-beige/50 text-xs mt-1">
                    ♥ {recipe.lovedOneName}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          CUISINES
      ============================================ */}
      <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-moss-green text-sm font-semibold uppercase tracking-widest mb-2 font-inter">
            From Every Corner of the World
          </p>
          <h2 className="font-playfair font-bold text-4xl text-dark-green">
            Explore Cuisines
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {CUISINES.map((cuisine) => (
            <Link
              key={cuisine}
              href={`/recipes?cuisine=${cuisine}`}
              id={`cuisine-${cuisine.toLowerCase()}`}
              className="btn-secondary text-sm"
            >
              {cuisine}
            </Link>
          ))}
        </div>
      </section>

      {/* ============================================
          CTA SECTION
      ============================================ */}
      <section
        className="py-24 px-6 text-center"
        style={{
          background: "linear-gradient(135deg, #F7F4D5 0%, #EAE7C0 50%, #f5ddd8 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-5xl mb-6">🥘</div>
          <h2 className="font-playfair font-bold text-4xl lg:text-5xl text-dark-green mb-6 leading-tight">
            What recipe do you
            <br />
            need to preserve today?
          </h2>
          <p className="text-dark-green/65 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Don&apos;t let the recipes die with the person who made them. Write them
            down, tell the story, and make sure the flavor lives on forever.
          </p>
          <Link href="/dashboard/new" className="btn-primary text-lg px-8 py-4">
            <BookOpen className="w-5 h-5" />
            Preserve a Recipe Now
          </Link>
        </div>
      </section>
    </div>
  );
}
