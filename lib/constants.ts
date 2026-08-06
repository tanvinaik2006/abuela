// Pure constants – safe to import from both client and server components.
// Do NOT import anything from prisma or pg here.

export const CATEGORIES = [
  "Breakfast",
  "Lunch",
  "Dinner",
  "Dessert",
  "Snack",
  "Drinks",
  "Bread",
  "Soup",
] as const;

export const CUISINES = [
  "Indian",
  "Italian",
  "Mexican",
  "American",
  "Spanish",
  "Chinese",
  "French",
  "Middle Eastern",
] as const;

export const DIFFICULTIES = ["Easy", "Medium", "Hard"] as const;

export function formatTime(minutes: number): string {
  if (minutes < 60) return `${minutes} min`;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return m > 0 ? `${h}h ${m}m` : `${h}h`;
}
