"use client";

import { Printer, Share2 } from "lucide-react";

interface RecipeActionsProps {
  recipeTitle: string;
  likes: number;
  authorName: string;
  authorImage?: string;
}

export function RecipeActions({ recipeTitle, likes, authorName, authorImage }: RecipeActionsProps) {
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

  return (
    <div className="flex items-center gap-2">
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
