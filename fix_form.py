import re

file_path = "/Users/apple/Desktop/ABUELA/abuela-app/app/dashboard/edit/[id]/EditRecipeForm.tsx"
with open(file_path, "r") as f:
    content = f.read()

# Replace the start of steps
content = re.sub(
    r'\{\s*currentStep === "basics" && \(\s*<div className="space-y-5">',
    r'<div className={cn("space-y-5", currentStep !== "basics" && "hidden")}>',
    content
)

content = re.sub(
    r'\{\s*currentStep === "story" && \(\s*<div className="space-y-5">',
    r'<div className={cn("space-y-5", currentStep !== "story" && "hidden")}>',
    content
)

content = re.sub(
    r'\{\s*currentStep === "recipe" && \(\s*<div className="space-y-8">',
    r'<div className={cn("space-y-8", currentStep !== "recipe" && "hidden")}>',
    content
)

content = re.sub(
    r'\{\s*currentStep === "settings" && \(\s*<div className="space-y-6">',
    r'<div className={cn("space-y-6", currentStep !== "settings" && "hidden")}>',
    content
)

# Replace the `)}` before each subsequent step. We can just search for `)}\n\n          {/* ---- STEP:`
content = re.sub(r'\)\}\n(\s*\{/\* ---- STEP:)', r'</div>\n\g<1>', content)

# There is one final `)}` before `<div className="mt-8 flex justify-between">` or similar
content = re.sub(r'\)\}\n(\s*<div className="mt-8)', r'</div>\n\g<1>', content)

with open(file_path, "w") as f:
    f.write(content)

print("Done")
