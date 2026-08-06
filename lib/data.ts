import 'server-only';
import prisma from './prisma';
import type { Recipe as PrismaRecipe, User } from '@prisma/client';

// Re-export the Prisma Recipe type (with optional author join) so components can import it
export type Recipe = PrismaRecipe & { author: User | null };

// Re-export constants from the shared constants file
export { CATEGORIES, CUISINES, DIFFICULTIES, formatTime } from './constants';


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

