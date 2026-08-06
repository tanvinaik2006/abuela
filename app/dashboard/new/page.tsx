"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Plus, X, Globe, Lock } from "lucide-react";
import { CATEGORIES, CUISINES, DIFFICULTIES } from "@/lib/data";
import { cn } from "@/lib/utils";

type Step = "basics" | "story" | "recipe" | "settings";

const STEPS: { id: Step; label: string; description: string }[] = [
  { id: "basics", label: "The Basics", description: "Recipe name, category, timing" },
  { id: "story", label: "The Story", description: "Who made it and why it matters" },
  { id: "recipe", label: "The Recipe", description: "Ingredients and instructions" },
  { id: "settings", label: "Publish", description: "Privacy and final details" },
];

const STEP_ORDER: Step[] = ["basics", "story", "recipe", "settings"];

export default function NewRecipePage() {
  const [currentStep, setCurrentStep] = useState<Step>("basics");
  const [ingredients, setIngredients] = useState<string[]>([""]);
  const [steps, setSteps] = useState<string[]>([""]);
  const [isPublic, setIsPublic] = useState(true);
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const currentIdx = STEP_ORDER.indexOf(currentStep);
  const isFirst = currentIdx === 0;
  const isLast = currentIdx === STEP_ORDER.length - 1;

  const goNext = () => {
    if (!isLast) setCurrentStep(STEP_ORDER[currentIdx + 1]);
  };
  const goPrev = () => {
    if (!isFirst) setCurrentStep(STEP_ORDER[currentIdx - 1]);
  };

  const addIngredient = () => setIngredients([...ingredients, ""]);
  const updateIngredient = (i: number, v: string) => {
    const next = [...ingredients];
    next[i] = v;
    setIngredients(next);
  };
  const removeIngredient = (i: number) =>
    setIngredients(ingredients.filter((_, idx) => idx !== i));

  const addStep = () => setSteps([...steps, ""]);
  const updateStep = (i: number, v: string) => {
    const next = [...steps];
    next[i] = v;
    setSteps(next);
  };
  const removeStep = (i: number) =>
    setSteps(steps.filter((_, idx) => idx !== i));

  const addTag = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && tagInput.trim()) {
      e.preventDefault();
      if (!tags.includes(tagInput.trim())) {
        setTags([...tags, tagInput.trim()]);
      }
      setTagInput("");
    }
  };
  const removeTag = (tag: string) => setTags(tags.filter((t) => t !== tag));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen pt-20 flex flex-col items-center justify-center bg-beige px-6 text-center">
        <div className="text-6xl mb-6 animate-float">🥘</div>
        <h1 className="font-playfair font-bold text-4xl text-dark-green mb-4">
          Recipe Saved!
        </h1>
        <p className="text-dark-green/65 text-lg mb-8 max-w-md font-inter">
          Your recipe has been preserved. Their story will live on forever.
        </p>
        <div className="flex gap-4">
          <Link href="/recipes" className="btn-primary">
            Browse Recipes
          </Link>
          <Link href="/dashboard" className="btn-secondary">
            My Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-beige">
      {/* Header */}
      <div className="bg-dark-green text-beige py-10 px-6 md:px-10">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/dashboard"
            className="flex items-center gap-2 text-beige/60 hover:text-beige text-sm mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </Link>
          <h1 className="font-playfair font-bold text-4xl text-beige">
            Preserve a Recipe
          </h1>
          <p className="text-beige/60 mt-1 font-inter">
            Tell the story behind the food. Make it last forever.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 md:px-10 py-10">
        {/* Step progress */}
        <div className="flex items-center gap-0 mb-10 overflow-x-auto">
          {STEPS.map((step, i) => (
            <div key={step.id} className="flex items-center flex-1 min-w-0">
              <button
                onClick={() => setCurrentStep(step.id)}
                className={cn(
                  "flex flex-col items-center gap-1 flex-shrink-0 group",
                  i < STEPS.length - 1 ? "flex-1" : ""
                )}
              >
                <div
                  className={cn(
                    "w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold font-playfair transition-all duration-200",
                    currentStep === step.id
                      ? "bg-dark-green text-beige scale-110"
                      : STEP_ORDER.indexOf(currentStep) > i
                      ? "bg-moss-green text-beige"
                      : "bg-[#d4d0a8] text-dark-green/50"
                  )}
                >
                  {STEP_ORDER.indexOf(currentStep) > i ? "✓" : i + 1}
                </div>
                <span className={cn(
                  "text-xs font-medium hidden sm:block font-inter",
                  currentStep === step.id ? "text-dark-green" : "text-dark-green/40"
                )}>
                  {step.label}
                </span>
              </button>
              {i < STEPS.length - 1 && (
                <div
                  className={cn(
                    "h-0.5 flex-1 mx-2 transition-all duration-300",
                    STEP_ORDER.indexOf(currentStep) > i
                      ? "bg-moss-green"
                      : "bg-[#d4d0a8]"
                  )}
                />
              )}
            </div>
          ))}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="card p-8">
          <div className="mb-6">
            <h2 className="font-playfair font-bold text-2xl text-dark-green">
              {STEPS.find((s) => s.id === currentStep)?.label}
            </h2>
            <p className="text-dark-green/50 text-sm font-inter mt-1">
              {STEPS.find((s) => s.id === currentStep)?.description}
            </p>
          </div>

          {/* ---- STEP: BASICS ---- */}
          {currentStep === "basics" && (
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-dark-green mb-1.5 font-inter">
                  Recipe Title *
                </label>
                <input
                  id="recipe-title-input"
                  type="text"
                  placeholder="e.g. Grandma's Masala Chai"
                  className="input-abuela"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-dark-green mb-1.5 font-inter">
                  Short Description *
                </label>
                <textarea
                  id="recipe-description-input"
                  placeholder="What makes this recipe special? (1–2 sentences)"
                  className="input-abuela resize-none"
                  rows={2}
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-dark-green mb-1.5 font-inter">
                    Category *
                  </label>
                  <select id="recipe-category-select" className="input-abuela" required>
                    <option value="">Select…</option>
                    {CATEGORIES.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-dark-green mb-1.5 font-inter">
                    Cuisine *
                  </label>
                  <select id="recipe-cuisine-select" className="input-abuela" required>
                    <option value="">Select…</option>
                    {CUISINES.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-dark-green mb-1.5 font-inter">
                    Prep Time (min)
                  </label>
                  <input id="recipe-prep-time-input" type="number" min={0} placeholder="15" className="input-abuela" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-dark-green mb-1.5 font-inter">
                    Cook Time (min)
                  </label>
                  <input id="recipe-cook-time-input" type="number" min={0} placeholder="30" className="input-abuela" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-dark-green mb-1.5 font-inter">
                    Servings
                  </label>
                  <input id="recipe-servings-input" type="number" min={1} placeholder="4" className="input-abuela" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-dark-green mb-1.5 font-inter">
                  Difficulty
                </label>
                <div className="flex gap-3">
                  {DIFFICULTIES.map((d) => (
                    <label
                      key={d}
                      className="flex items-center gap-2 cursor-pointer font-inter text-sm text-dark-green/70"
                    >
                      <input type="radio" name="difficulty" value={d} className="accent-moss-green" />
                      {d}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ---- STEP: STORY ---- */}
          {currentStep === "story" && (
            <div className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-dark-green mb-1.5 font-inter">
                    Their Name *
                  </label>
                  <input
                    id="recipe-loved-one-name-input"
                    type="text"
                    placeholder="e.g. Grandma, Mom, Dad"
                    className="input-abuela"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-dark-green mb-1.5 font-inter">
                    Relationship *
                  </label>
                  <input
                    id="recipe-relationship-input"
                    type="text"
                    placeholder="e.g. Grandmother, Father"
                    className="input-abuela"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-dark-green mb-1.5 font-inter">
                  Their Story *
                </label>
                <p className="text-dark-green/40 text-xs mb-2 font-inter">
                  Tell us about this person and why this recipe matters. Where did they make it? What do you remember?
                </p>
                <textarea
                  id="recipe-story-input"
                  placeholder="Every Sunday, Nani would wake before dawn and start brewing chai. The whole house smelled of cardamom and ginger before any of us opened our eyes…"
                  className="input-abuela resize-none"
                  rows={8}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-dark-green mb-1.5 font-inter">
                  Cover Image URL (optional)
                </label>
                <input
                  id="recipe-cover-image-input"
                  type="url"
                  placeholder="https://…"
                  className="input-abuela"
                />
                <p className="text-xs text-dark-green/40 mt-1 font-inter">
                  Paste a photo URL or leave blank for a default image.
                </p>
              </div>
            </div>
          )}

          {/* ---- STEP: RECIPE ---- */}
          {currentStep === "recipe" && (
            <div className="space-y-8">
              {/* Ingredients */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-semibold text-dark-green font-inter">
                    Ingredients *
                  </label>
                </div>
                <div className="space-y-2">
                  {ingredients.map((ing, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full border-2 border-moss-green/40 flex items-center justify-center flex-shrink-0">
                        <span className="w-2 h-2 rounded-full bg-moss-green/60" />
                      </span>
                      <input
                        id={`ingredient-input-${i}`}
                        type="text"
                        value={ing}
                        onChange={(e) => updateIngredient(i, e.target.value)}
                        placeholder={`Ingredient ${i + 1}`}
                        className="input-abuela flex-1"
                      />
                      {ingredients.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeIngredient(i)}
                          className="text-dark-green/30 hover:text-rosy-brown transition-colors"
                          aria-label="Remove ingredient"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={addIngredient}
                  id="add-ingredient-btn"
                  className="mt-3 flex items-center gap-2 text-sm text-moss-green hover:text-dark-green font-medium transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  Add Ingredient
                </button>
              </div>

              {/* Steps */}
              <div>
                <label className="text-sm font-semibold text-dark-green font-inter mb-3 block">
                  Instructions *
                </label>
                <div className="space-y-3">
                  {steps.map((step, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="step-counter mt-1 flex-shrink-0">{i + 1}</div>
                      <textarea
                        id={`step-input-${i}`}
                        value={step}
                        onChange={(e) => updateStep(i, e.target.value)}
                        placeholder={`Step ${i + 1}…`}
                        rows={2}
                        className="input-abuela flex-1 resize-none"
                      />
                      {steps.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeStep(i)}
                          className="mt-2 text-dark-green/30 hover:text-rosy-brown transition-colors"
                          aria-label="Remove step"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={addStep}
                  id="add-step-btn"
                  className="mt-3 flex items-center gap-2 text-sm text-moss-green hover:text-dark-green font-medium transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  Add Step
                </button>
              </div>

              {/* Tips */}
              <div>
                <label className="block text-sm font-semibold text-dark-green mb-1.5 font-inter">
                  Tips (optional)
                </label>
                <textarea
                  id="recipe-tips-input"
                  placeholder="Any special technique, secret ingredient, or advice?"
                  className="input-abuela resize-none"
                  rows={3}
                />
              </div>
            </div>
          )}

          {/* ---- STEP: SETTINGS ---- */}
          {currentStep === "settings" && (
            <div className="space-y-6">
              {/* Privacy */}
              <div>
                <label className="block text-sm font-semibold text-dark-green mb-3 font-inter">
                  Who can see this recipe?
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    id="recipe-visibility-public-btn"
                    onClick={() => setIsPublic(true)}
                    className={cn(
                      "card p-4 flex flex-col items-center gap-2 text-center transition-all duration-200",
                      isPublic ? "border-2 border-moss-green bg-moss-green/5" : ""
                    )}
                  >
                    <Globe className={cn("w-6 h-6", isPublic ? "text-moss-green" : "text-dark-green/40")} />
                    <span className={cn("font-semibold text-sm font-inter", isPublic ? "text-moss-green" : "text-dark-green/60")}>
                      Public
                    </span>
                    <span className="text-xs text-dark-green/40">
                      Visible to everyone
                    </span>
                  </button>
                  <button
                    type="button"
                    id="recipe-visibility-private-btn"
                    onClick={() => setIsPublic(false)}
                    className={cn(
                      "card p-4 flex flex-col items-center gap-2 text-center transition-all duration-200",
                      !isPublic ? "border-2 border-rosy-brown bg-rosy-brown/5" : ""
                    )}
                  >
                    <Lock className={cn("w-6 h-6", !isPublic ? "text-rosy-brown" : "text-dark-green/40")} />
                    <span className={cn("font-semibold text-sm font-inter", !isPublic ? "text-rosy-brown" : "text-dark-green/60")}>
                      Private
                    </span>
                    <span className="text-xs text-dark-green/40">
                      Only visible to you
                    </span>
                  </button>
                </div>
              </div>

              {/* Tags */}
              <div>
                <label className="block text-sm font-semibold text-dark-green mb-1.5 font-inter">
                  Tags (press Enter to add)
                </label>
                <input
                  id="recipe-tags-input"
                  type="text"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyDown={addTag}
                  placeholder="e.g. chai, sunday, comfort"
                  className="input-abuela"
                />
                {tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {tags.map((tag) => (
                      <span key={tag} className="badge badge-green flex items-center gap-1.5">
                        #{tag}
                        <button
                          type="button"
                          onClick={() => removeTag(tag)}
                          className="hover:text-rosy-brown transition-colors"
                          aria-label={`Remove tag ${tag}`}
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Notes */}
              <div>
                <label className="block text-sm font-semibold text-dark-green mb-1.5 font-inter">
                  Notes (optional)
                </label>
                <textarea
                  id="recipe-notes-input"
                  placeholder="Storage tips, variations, or anything else worth noting…"
                  className="input-abuela resize-none"
                  rows={3}
                />
              </div>

              {/* Summary */}
              <div className="bg-cream-50 border border-[#d4d0a8] rounded-xl p-5 text-sm text-dark-green/60 font-inter">
                <p className="font-semibold text-dark-green mb-1">Ready to publish?</p>
                <p>
                  Your recipe will be {isPublic ? "visible to the world" : "private to you"}.
                  You can always change this later.
                </p>
              </div>
            </div>
          )}

          {/* Navigation buttons */}
          <div className="flex items-center justify-between mt-10 pt-6 border-t border-[#d4d0a8]">
            <button
              type="button"
              onClick={goPrev}
              disabled={isFirst}
              className={cn(
                "flex items-center gap-2 text-sm font-medium transition-all",
                isFirst
                  ? "text-dark-green/20 cursor-not-allowed"
                  : "text-dark-green hover:text-midnight-green"
              )}
            >
              <ArrowLeft className="w-4 h-4" />
              Previous
            </button>

            {isLast ? (
              <button
                type="submit"
                id="recipe-submit-btn"
                className="btn-primary"
              >
                Preserve Recipe ❤️
              </button>
            ) : (
              <button
                type="button"
                onClick={goNext}
                id={`step-next-btn-${currentStep}`}
                className="btn-primary"
              >
                Continue
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
