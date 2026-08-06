import Link from "next/link";
import { BookOpen, Heart } from "lucide-react";

const footerLinks = {
  Explore: [
    { href: "/recipes", label: "Browse Recipes" },
    { href: "/search", label: "Search" },
    { href: "/recipes?category=Breakfast", label: "Breakfast" },
    { href: "/recipes?category=Dinner", label: "Dinner" },
    { href: "/recipes?category=Dessert", label: "Dessert" },
  ],
  "Your Kitchen": [
    { href: "/dashboard", label: "My Recipes" },
    { href: "/dashboard/new", label: "Add a Recipe" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-dark-green text-beige mt-auto">
      {/* Decorative wave top */}
      <div className="w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 60"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full -mb-1 fill-beige"
          preserveAspectRatio="none"
        >
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,0 L0,0 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-10 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-beige/20 rounded-xl flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-beige" />
              </div>
              <span className="font-playfair font-bold text-2xl tracking-wide text-beige">
                ABUELA
              </span>
            </Link>
            <p className="text-beige/70 text-sm leading-relaxed max-w-xs">
              A digital home for the meals, traditions, and memories shared by
              the people we love. Every recipe has a story.
            </p>
            <p className="mt-6 text-beige/50 text-xs flex items-center gap-1">
              Made with <Heart className="w-3.5 h-3.5 text-rosy-brown fill-rosy-brown" /> for the recipes that matter most
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="font-playfair font-semibold text-sm uppercase tracking-widest text-moss-green mb-4">
                {heading}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-beige/70 text-sm hover:text-beige transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="border-beige/10 my-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-beige/40 text-xs">
            © {new Date().getFullYear()} ABUELA. Every recipe has a story.
          </p>
          <div className="flex items-center gap-2 text-beige/40 text-xs">
            <span>🌿 Preserving family flavors, one story at a time</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
