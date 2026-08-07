"use client";

import { Printer, Share2, Pencil, Trash2 } from "lucide-react";
import Link from "next/link";
import { useTransition } from "react";
import { deleteRecipe } from "@/app/actions/recipe";

interface RecipeActionsProps {
  recipeId: string;
  recipeTitle: string;
  likes: number;
  authorName: string;
  authorImage?: string;
  authorId: string | null;
  currentUserId?: string;
}

export function RecipeActions({
  recipeId,
  recipeTitle,
  likes,
  authorName,
  authorImage,
  authorId,
  currentUserId,
}: RecipeActionsProps) {
  const [isPending, startTransition] = useTransition();
  const isAuthor = currentUserId === authorId;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: recipeTitle, url: window.location.href });
      } catch {
        // User cancelled
      }
    } else {
      await navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  const handlePrint = () => window.print();

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this recipe? This action cannot be undone.")) {
      startTransition(() => {
        deleteRecipe(recipeId);
      });
    }
  };

  return (
    <div className="flex items-center gap-2">
      {isAuthor && (
        <>
          <Link
            href={`/dashboard/edit/${recipeId}`}
            className="flex items-center gap-2 text-sm text-dark-green/60 hover:text-dark-green border border-[#d4d0a8] px-3 py-2 rounded-lg transition-all hover:border-dark-green"
          >
            <Pencil className="w-4 h-4" />
            Edit
          </Link>
          <button
            onClick={handleDelete}
            disabled={isPending}
            className="flex items-center gap-2 text-sm text-rosy-brown hover:text-red-700 border border-[#d4d0a8] px-3 py-2 rounded-lg transition-all hover:border-red-700 disabled:opacity-50"
          >
            <Trash2 className="w-4 h-4" />
            Delete
          </button>
        </>
      )}
      <button
        id="recipe-share-btn"
        onClick={handleShare}
        className="flex items-center gap-2 text-sm text-dark-green/60 hover:text-dark-green border border-[#d4d0a8] px-3 py-2 rounded-lg transition-all hover:border-dark-green"
      >
        <Share2 className="w-4 h-4" />
        Share
      </button>
      <button
        id="recipe-print-btn"
        onClick={handlePrint}
        className="flex items-center gap-2 text-sm text-dark-green/60 hover:text-dark-green border border-[#d4d0a8] px-3 py-2 rounded-lg transition-all hover:border-dark-green"
      >
        <Printer className="w-4 h-4" />
        Print
      </button>
    </div>
  );
}
