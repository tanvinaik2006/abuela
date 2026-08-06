import Link from "next/link";
import Image from "next/image";
import { Clock, Users, ChefHat, Heart } from "lucide-react";
import { Recipe, formatTime } from "@/lib/data";
import { cn } from "@/lib/utils";

interface RecipeCardProps {
  recipe: Recipe;
  className?: string;
  variant?: "default" | "compact" | "featured";
}

const difficultyColor: Record<string, string> = {
  Easy: "badge-green",
  Medium: "badge-teal",
  Hard: "badge-rosy",
};

export function RecipeCard({
  recipe,
  className,
  variant = "default",
}: RecipeCardProps) {
  const totalTime = recipe.prepTime + recipe.cookTime;

  if (variant === "compact") {
    return (
      <Link
        href={`/recipes/${recipe.id}`}
        className={cn(
          "card flex gap-4 p-4 group cursor-pointer no-underline",
          className
        )}
      >
        <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
          <Image
            src={recipe.coverImage}
            alt={recipe.title}
            fill
            className="object-cover transition-transform duration-400 group-hover:scale-110"
            unoptimized
          />
        </div>
        <div className="flex flex-col justify-center min-w-0">
          <span className="badge badge-green text-xs mb-1.5">
            {recipe.category}
          </span>
          <h3 className="font-playfair font-bold text-base text-dark-green line-clamp-2 group-hover:text-midnight-green transition-colors">
            {recipe.title}
          </h3>
          <p className="text-sm text-dark-green/60 mt-1">
            by {recipe.lovedOneName}
          </p>
        </div>
      </Link>
    );
  }

  if (variant === "featured") {
    return (
      <Link
        href={`/recipes/${recipe.id}`}
        className={cn(
          "card recipe-card group cursor-pointer no-underline block overflow-hidden relative",
          className
        )}
      >
        {/* Image */}
        <div className="relative h-72 overflow-hidden">
          <Image
            src={recipe.coverImage}
            alt={recipe.title}
            fill
            className="recipe-card-image object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-green/80 via-dark-green/20 to-transparent" />

          {/* Overlay content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-beige">
            <div className="flex gap-2 mb-3">
              <span className="badge badge-rosy text-xs">{recipe.cuisine}</span>
              <span className={cn("badge text-xs", difficultyColor[recipe.difficulty])}>
                {recipe.difficulty}
              </span>
            </div>
            <h3 className="font-playfair font-bold text-xl leading-snug mb-1">
              {recipe.title}
            </h3>
            <p className="text-beige/75 text-sm flex items-center gap-1.5">
              <span>A recipe from</span>
              <span className="font-semibold text-rosy-brown">{recipe.lovedOneName}</span>
            </p>
          </div>

          {/* Likes pill */}
          <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-dark-green/60 backdrop-blur-sm text-beige text-xs font-medium px-3 py-1.5 rounded-full">
            <Heart className="w-3.5 h-3.5 fill-rosy-brown text-rosy-brown" />
            {recipe.likes}
          </div>
        </div>

        {/* Card footer */}
        <div className="p-5 flex items-center justify-between">
          <div className="flex items-center gap-3 text-xs text-dark-green/60">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {formatTime(totalTime)}
            </span>
            <span className="flex items-center gap-1">
              <Users className="w-3.5 h-3.5" />
              {recipe.servings} servings
            </span>
          </div>
          {recipe.authorName && (
            <span className="text-xs text-dark-green/50 font-medium">
              by {recipe.authorName}
            </span>
          )}
        </div>
      </Link>
    );
  }

  // Default card
  return (
    <Link
      href={`/recipes/${recipe.id}`}
      className={cn(
        "card recipe-card group cursor-pointer no-underline block overflow-hidden",
        className
      )}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
        <Image
          src={recipe.coverImage}
          alt={recipe.title}
          fill
          className="recipe-card-image object-cover"
          unoptimized
        />
        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className="badge badge-green text-xs">{recipe.category}</span>
        </div>
        {/* Likes */}
        <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/90 text-dark-green text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm">
          <Heart className="w-3 h-3 fill-rosy-brown text-rosy-brown" />
          {recipe.likes}
        </div>
      </div>

      {/* Card body */}
      <div className="p-4">
        {/* Meta row */}
        <div className="flex items-center gap-2 mb-2.5">
          <span className="text-xs text-dark-green/50 font-medium uppercase tracking-wider">
            {recipe.cuisine}
          </span>
          <span className="text-dark-green/30">·</span>
          <span className={cn("badge text-xs", difficultyColor[recipe.difficulty])}>
            {recipe.difficulty}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-playfair font-bold text-lg leading-snug text-dark-green group-hover:text-midnight-green transition-colors line-clamp-2 mb-2">
          {recipe.title}
        </h3>

        {/* Loved one */}
        <p className="text-sm text-dark-green/60 mb-3 line-clamp-2">
          {recipe.description}
        </p>

        <div className="text-xs font-semibold text-rosy-brown">
          ♥ {recipe.lovedOneName}&apos;s recipe
        </div>

        {/* Stats */}
        <div className="mt-4 pt-4 border-t border-[#d4d0a8] flex items-center gap-4 text-xs text-dark-green/50">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {formatTime(totalTime)}
          </span>
          <span className="flex items-center gap-1">
            <Users className="w-3.5 h-3.5" />
            {recipe.servings}
          </span>
          <span className="flex items-center gap-1">
            <ChefHat className="w-3.5 h-3.5" />
            {recipe.difficulty}
          </span>
        </div>
      </div>
    </Link>
  );
}
