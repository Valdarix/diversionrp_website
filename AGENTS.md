# AGENTS

This repository contains the static web site for DIVERSION RP. Keep this file updated with any commands, checks, or tests needed to maintain the project.

## Setup
1. Install dependencies using **pnpm** (preferred over npm):
   ```bash
   pnpm install
   ```
2. Build Tailwind CSS once:
   ```bash
   pnpm exec tailwindcss -i ./src/styles.css -o ./dist/styles.css
   ```
3. Run the build whenever Tailwind or CSS files change:
   ```bash
   pnpm exec tailwindcss -i ./src/styles.css -o ./dist/styles.css
   ```
4. Lint PHP scripts:
   ```bash
   php -l db.php posts.php send_email.php showcase.php
   ```
5. Validate HTML markup using **tidy**:
   ```bash
   tidy -qe *.html
   ```
6. Add additional testing tools as needed and document them here.

## Notes
- Ensure JetBrains IDEs open the project without build errors.
- The `.idea/` folder is ignored; do not commit IDE metadata.
- Upcoming Laravel migration will use **Tailwind CSS 4**.
