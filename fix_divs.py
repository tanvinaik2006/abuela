file_path = "/Users/apple/Desktop/ABUELA/abuela-app/app/dashboard/edit/[id]/EditRecipeForm.tsx"
with open(file_path, "r") as f:
    content = f.read()

# Replace the specific pattern of extra div
content = content.replace("            </div>\n          </div>\n\n          {/* ---- STEP: STORY ---- */}", "            </div>\n\n          {/* ---- STEP: STORY ---- */}")
content = content.replace("            </div>\n          </div>\n\n          {/* ---- STEP: RECIPE ---- */}", "            </div>\n\n          {/* ---- STEP: RECIPE ---- */}")
content = content.replace("            </div>\n          </div>\n\n          {/* ---- STEP: SETTINGS ---- */}", "            </div>\n\n          {/* ---- STEP: SETTINGS ---- */}")
content = content.replace("              </div>\n            </div>\n          </div>\n\n          {/* Navigation buttons */}", "              </div>\n            </div>\n\n          {/* Navigation buttons */}")

with open(file_path, "w") as f:
    f.write(content)

print("Fixed divs")
