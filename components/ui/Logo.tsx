import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark" | "auto";
  scrolled?: boolean;
  showSubtitle?: boolean;
}

export function Logo({
  className,
  scrolled = false,
  showSubtitle = true,
}: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "flex items-center gap-3 group select-none no-underline",
        className
      )}
      aria-label="ABUELA — Family Recipe Archive"
    >
      {/* Emblem Badge Icon */}
      <div className="relative w-11 h-11 flex-shrink-0 rounded-full p-0.5 bg-gradient-to-tr from-rosy-brown via-moss-green to-beige shadow-sm group-hover:scale-105 transition-transform duration-300">
        <div className="w-full h-full rounded-full overflow-hidden relative bg-cream-100">
          <Image
            src="/logo-emblem.png"
            alt="ABUELA logo emblem"
            fill
            className="object-cover scale-110 group-hover:rotate-6 transition-transform duration-500"
            unoptimized
          />
        </div>
      </div>

      {/* Brand Name & Tagline */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span
            className={cn(
              "font-playfair font-black text-2xl md:text-3xl tracking-wider transition-colors duration-300",
              scrolled ? "text-dark-green" : "text-beige"
            )}
          >
            ABUELA
          </span>
          <span
            className={cn(
              "text-xs font-serif italic text-rosy-brown transition-opacity duration-300 opacity-90 group-hover:opacity-100"
            )}
          >
            ✦
          </span>
        </div>
        {showSubtitle && (
          <span
            className={cn(
              "text-[0.65rem] font-inter uppercase tracking-[0.2em] font-semibold -mt-1 transition-colors duration-300",
              scrolled ? "text-moss-green" : "text-beige/70"
            )}
          >
            Recipe Archive
          </span>
        )}
      </div>
    </Link>
  );
}
