"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, User, Search, Plus, LogIn } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/Logo";
import type { Session } from "next-auth";

const navLinks = [
  { href: "/recipes", label: "Browse Recipes" },
  { href: "/search", label: "Search" },
];

export function Navbar({ session }: { session: Session | null }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomepage = pathname === "/";

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled || !isHomepage
          ? "glass border-b border-[#d4d0a8] shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        {/* Characterful Logo */}
        <Logo scrolled={scrolled || !isHomepage} />

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-inter text-sm font-medium transition-all duration-200 relative group",
                scrolled || !isHomepage
                  ? "text-dark-green hover:text-moss-green"
                  : "text-white/90 hover:text-white"
              )}
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-moss-green rounded-full group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/search"
            aria-label="Search recipes"
            className={cn(
              "p-2 rounded-lg transition-all duration-200",
              scrolled || !isHomepage
                ? "text-dark-green hover:bg-muted"
                : "text-white/80 hover:text-white hover:bg-white/10"
            )}
          >
            <Search className="w-5 h-5" />
          </Link>

          {session ? (
            <>
              <Link
                href="/dashboard"
                aria-label="Dashboard"
                className={cn(
                  "p-2 rounded-lg transition-all duration-200",
                  scrolled || !isHomepage
                    ? "text-dark-green hover:bg-muted"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                )}
              >
                <User className="w-5 h-5" />
              </Link>
              <Link
                href="/dashboard/new"
                className="btn-accent text-sm px-4 py-2"
              >
                <Plus className="w-4 h-4" />
                Add Recipe
              </Link>
            </>
          ) : (
            <Link
              href="/login"
              className="btn-accent text-sm px-4 py-2"
            >
              <LogIn className="w-4 h-4" />
              Sign In
            </Link>
          )}
        </div>

        {/* Mobile menu toggle */}
        <button
          className={cn(
            "md:hidden p-2 rounded-lg transition-all duration-200",
            scrolled || !isHomepage ? "text-dark-green" : "text-white"
          )}
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Nav */}
      {open && (
        <div className="md:hidden glass border-t border-[#d4d0a8] animate-slide-up">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-dark-green font-medium text-base hover:text-moss-green transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <hr className="border-[#d4d0a8]" />
            
            {session ? (
              <>
                <Link
                  href="/dashboard"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 text-dark-green font-medium"
                >
                  <User className="w-4 h-4" />
                  My Dashboard
                </Link>
                <Link
                  href="/dashboard/new"
                  onClick={() => setOpen(false)}
                  className="btn-accent justify-center text-sm"
                >
                  <Plus className="w-4 h-4" />
                  Add Recipe
                </Link>
              </>
            ) : (
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 text-dark-green font-medium"
              >
                <LogIn className="w-4 h-4" />
                Sign In
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
