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
6. The Laravel skeleton lives in `diversionrp-laravel`. If missing, scaffold it:
   ```bash
   composer create-project laravel/laravel diversionrp-laravel
   ```
   Then install dependencies:
   ```bash
   pnpm install --dir diversionrp-laravel
   ```
7. Run Laravel tests:
   ```bash
   cd diversionrp-laravel && php artisan test
   ```
8. Launch the React/Vite dev server:
   ```bash
   pnpm run dev --dir diversionrp-laravel
   ```
9. Add additional testing tools as needed and document them here.

## Notes
- Ensure JetBrains IDEs open the project without build errors.
- The `.idea/` folder is ignored; do not commit IDE metadata.
- Laravel migration is now **in progress** and requires Tailwind CSS 4.
- Access to `apt.llvm.org`, `security.ubuntu.com`, `archive.ubuntu.com`, or any
  other necessary domain is allowed for installing dependencies and tools. The
  agent may run privileged commands as needed to complete its tasks.
