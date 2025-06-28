# Conversion Guide

This guide describes the steps to migrate the current site to a new stack using Laravel 11, React 18+, **Tailwind CSS 4**+, Framer Motion 11.9+, and HeroUI beta 2.8. The application will leverage SQLite 3.26+ for storage.

*Phase 3 is now active. Use this document as the checklist while porting features to Laravel.*

## 1. Setup Laravel
1. Install PHP 8.2 and Composer.
2. Create a new Laravel project using the latest 11.x release:
   ```bash
   composer create-project laravel/laravel diversionrp-laravel
   ```
3. Configure SQLite by setting `DB_CONNECTION=sqlite` in `.env` and creating a `database/database.sqlite` file.

## 2. Integrate React
1. Inside the Laravel project, install React 18 and Vite:
   ```bash
   pnpm install react react-dom
   pnpm install -D vite laravel-vite-plugin
   ```
2. Set up Vite according to the Laravel documentation to compile React components.
3. Replace existing HTML pages with React components under `resources/js`.

## 3. Style with Tailwind & HeroUI
1. Install Tailwind CSS 4 and HeroUI beta components:
   ```bash
pnpm install -D tailwindcss@latest framer-motion@latest
   pnpm install @heroui/react@beta
   pnpm exec tailwindcss init
   ```
2. Follow the [Tailwind upgrade guide](https://tailwindcss.com/docs/upgrade-guide) and [HeroUI Tailwind v4 migration](https://www.heroui.com/docs/guide/tailwind-v4) for the initial setup.

## 4. Migrate PHP logic
1. Convert simple PHP scripts (like `send_email.php`) into Laravel controllers.
2. Use Blade templates only where needed; prefer React for UI.

## 5. Testing & Deployment
1. Use Laravel's built-in testing tools (`php artisan test`).
2. Build and deploy using `pnpm run build` (configured through Vite).

Refer to [HeroUI documentation](https://beta.heroui.com/) for component usage details.
