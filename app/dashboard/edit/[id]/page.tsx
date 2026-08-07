import { getRecipeById } from "@/lib/data";
import { notFound, redirect } from "next/navigation";
import { auth } from "@/auth";
import EditRecipeForm from "./EditRecipeForm";

interface EditRecipePageProps {
  params: Promise<{ id: string }>;
}

export default async function EditRecipePage({ params }: EditRecipePageProps) {
  const { id } = await params;
  const session = await auth();

  if (!session?.user?.id) {
    redirect("/login");
  }

  const recipe = await getRecipeById(id);

  if (!recipe) {
    notFound();
  }

  if (recipe.authorId !== session.user.id) {
    redirect("/dashboard");
  }

  return <EditRecipeForm recipe={recipe} />;
}
