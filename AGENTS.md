# AGENTS

This repository contains the Diversion RP website built with Laravel and React. Keep this file updated with any commands, checks, or tests needed to maintain the project.

## Setup
1. Install Node and PHP dependencies:
   ```bash
   pnpm install --dir diversionrp-laravel
   composer install --working-dir=diversionrp-laravel
   ```
2. Copy the environment file and generate an app key:
   ```bash
   cp diversionrp-laravel/.env.example diversionrp-laravel/.env
   php artisan key:generate --working-dir=diversionrp-laravel
   ```
3. Ensure `diversionrp-laravel/database/database.sqlite` exists (tracked in git).
4. Build the React/Laravel frontend:
   ```bash
   pnpm run build --dir diversionrp-laravel
   ```
5. Run Laravel tests:
   ```bash
   cd diversionrp-laravel && php artisan test
   ```
6. Launch the Vite dev server during development:
   ```bash
   pnpm run dev --dir diversionrp-laravel
   ```
7. Add additional testing tools as needed and document them here.

## Notes
- Ensure JetBrains IDEs open the project without build errors.
- The `.idea/` folder is ignored; do not commit IDE metadata.
- The project uses Tailwind CSS 4, HeroUI beta components, and Framer Motion 12.
- Access to required package repositories is allowed for installing dependencies.
