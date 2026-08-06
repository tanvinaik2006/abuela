import prisma from './prisma';
import type { Recipe as PrismaRecipe, User } from '@prisma/client';

// Re-export the Prisma Recipe type (with optional author join) so components can import it
export type Recipe = PrismaRecipe & { author: User | null };


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

export async function getRecipeById(id: string) {
  return prisma.recipe.findUnique({
    where: { id },
    include: { author: true }
  });
}

export async function getRecipeBySlug(slug: string) {
  return prisma.recipe.findUnique({
    where: { slug },
    include: { author: true }
  });
}

export async function getPublicRecipes() {
  return prisma.recipe.findMany({
    where: { isPublic: true },
    include: { author: true },
    orderBy: { createdAt: 'desc' }
  });
}

export async function searchRecipes(query: string) {
  return prisma.recipe.findMany({
    where: {
      isPublic: true,
      OR: [
        { title: { contains: query, mode: 'insensitive' } },
        { description: { contains: query, mode: 'insensitive' } },
        { lovedOneName: { contains: query, mode: 'insensitive' } },
        { cuisine: { contains: query, mode: 'insensitive' } },
        { category: { contains: query, mode: 'insensitive' } },
      ]
    },
    include: { author: true },
    orderBy: { createdAt: 'desc' }
  });
}

export async function getRecipesByCategory(category: string) {
  return prisma.recipe.findMany({
    where: { isPublic: true, category },
    include: { author: true },
    orderBy: { createdAt: 'desc' }
  });
}

export async function getRecipesByCuisine(cuisine: string) {
  return prisma.recipe.findMany({
    where: { isPublic: true, cuisine },
    include: { author: true },
    orderBy: { createdAt: 'desc' }
  });
}

export async function getUserRecipes(userId: string) {
  return prisma.recipe.findMany({
    where: { authorId: userId },
    include: { author: true },
    orderBy: { createdAt: 'desc' }
  });
}

export function formatTime(minutes: number): string {
  if (minutes < 60) return `${minutes} min`;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return m > 0 ? `${h}h ${m}m` : `${h}h`;
}
