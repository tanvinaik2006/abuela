"use server";

import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

function makeUniqueSlug(base: string): string {
  return `${base}-${Date.now()}`;
}

export async function createRecipe(formData: FormData) {
  const session = await auth();
  if (!session?.user?.id) {
    throw new Error("You must be logged in to create a recipe.");
  }

  // Parse form data
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const category = formData.get("category") as string;
  const cuisine = formData.get("cuisine") as string;
  const prepTime = parseInt(formData.get("prepTime") as string) || 0;
  const cookTime = parseInt(formData.get("cookTime") as string) || 0;
  const servings = parseInt(formData.get("servings") as string) || 1;
  const difficulty = formData.get("difficulty") as string || "Easy";
  const lovedOneName = formData.get("lovedOneName") as string;
  const relationship = formData.get("relationship") as string;
  const story = formData.get("story") as string;
  const coverImage = (formData.get("coverImage") as string) || "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=800&q=80";
  const tips = formData.get("tips") as string;
  const notes = formData.get("notes") as string;
  const isPublic = formData.get("isPublic") === "true";
  const tagsRaw = formData.get("tags") as string;
  const tags = tagsRaw ? tagsRaw.split(",").map((t) => t.trim()).filter(Boolean) : [];
  const ingredientsRaw = formData.get("ingredients") as string;
  const ingredients = ingredientsRaw ? ingredientsRaw.split("\n").map((i) => i.trim()).filter(Boolean) : [];
  const stepsRaw = formData.get("steps") as string;
  const steps = stepsRaw ? stepsRaw.split("\n").map((s) => s.trim()).filter(Boolean) : [];

  const baseSlug = slugify(title);
  const slug = makeUniqueSlug(baseSlug);

  const recipe = await prisma.recipe.create({
    data: {
      title,
      slug,
      description: description || null,
      story: story || null,
      lovedOneName,
      relationship,
      authorName: session.user.name || "Anonymous",
      authorId: session.user.id,
      prepTime,
      cookTime,
      servings,
      difficulty,
      cuisine,
      category,
      coverImage,
      tips: tips || null,
      notes: notes || null,
      isPublic,
      tags,
      ingredients,
      steps,
      images: [],
      likes: 0,
    },
  });

  revalidatePath("/dashboard");
  revalidatePath("/recipes");
  redirect(`/recipes/${recipe.id}`);
}
