import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — Page Not Found",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-beige">
      <div className="text-7xl mb-6 animate-float">🍽️</div>
      <h1 className="font-playfair font-bold text-5xl text-dark-green mb-4">
        This recipe got lost
      </h1>
      <p className="text-dark-green/60 text-lg max-w-md mb-8 font-inter">
        The page you&apos;re looking for doesn&apos;t exist. Maybe it was a secret recipe
        passed down only by word of mouth.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Link href="/" className="btn-primary">
          Go Home
        </Link>
        <Link href="/recipes" className="btn-secondary">
          Browse Recipes
        </Link>
      </div>
    </div>
  );
}
