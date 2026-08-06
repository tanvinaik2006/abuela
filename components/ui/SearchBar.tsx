"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  placeholder?: string;
  variant?: "hero" | "default";
  initialValue?: string;
  className?: string;
}

export function SearchBar({
  placeholder = "Search recipes, loved ones, ingredients…",
  variant = "default",
  initialValue = "",
  className,
}: SearchBarProps) {
  const [query, setQuery] = useState(initialValue);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const handleClear = () => {
    setQuery("");
    inputRef.current?.focus();
  };

  if (variant === "hero") {
    return (
      <form onSubmit={handleSubmit} className={cn("w-full max-w-2xl", className)}>
        <div className="relative group">
          <div className="absolute inset-0 bg-rosy-brown/20 rounded-2xl blur-xl group-focus-within:bg-rosy-brown/30 transition-all duration-300" />
          <div className="relative flex items-center bg-beige rounded-2xl shadow-warm overflow-hidden">
            <Search className="ml-5 text-dark-green/40 w-5 h-5 flex-shrink-0" />
            <input
              ref={inputRef}
              type="text"
              id="hero-search-input"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={placeholder}
              className="flex-1 bg-transparent px-4 py-4 text-dark-green placeholder:text-dark-green/40 focus:outline-none font-inter text-base"
            />
            {query && (
              <button
                type="button"
                onClick={handleClear}
                className="p-2 mr-1 rounded-lg text-dark-green/40 hover:text-dark-green transition-colors"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <button
              type="submit"
              id="hero-search-submit-btn"
              className="m-2 btn-primary text-sm px-6 py-3 rounded-xl"
            >
              Search
            </button>
          </div>
        </div>
        <p className="mt-3 text-white/50 text-xs text-center font-inter">
          Try: &quot;chai&quot;, &quot;biryani&quot;, &quot;grandma&quot;, &quot;Italian&quot;
        </p>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={cn("relative", className)}>
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-dark-green/40 w-4 h-4" />
      <input
        ref={inputRef}
        type="text"
        id="search-input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="input-abuela pl-10 pr-10"
      />
      {query && (
        <button
          type="button"
          onClick={handleClear}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-dark-green/40 hover:text-dark-green transition-colors"
          aria-label="Clear"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </form>
  );
}
