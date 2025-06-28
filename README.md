# Diversion RP Website

Static website with PHP scripts and **Tailwind CSS 4**. A lightweight SQLite database powers dynamic announcements. Phase 3 begins the move to a Laravel + React stack. The old static pages now live as React components served by Laravel routes. UI elements are gradually being replaced by **HeroUI** components.

## Build CSS
```bash
pnpm install
pnpm add @heroui/react@beta --dir diversionrp-laravel
pnpm exec tailwindcss -i ./src/styles.css -o ./dist/styles.css
pnpm run build --dir diversionrp-laravel
```

## PHP Lint
```bash
php -l db.php posts.php showcase.php
```

### Laravel Migration
The repository now contains a Laravel 11 skeleton under `diversionrp-laravel`.
Install its dependencies, generate the application key and run the default tests:
```bash
pnpm install --dir diversionrp-laravel
composer install --working-dir=diversionrp-laravel
cp diversionrp-laravel/.env.example diversionrp-laravel/.env
php artisan key:generate --working-dir=diversionrp-laravel
cd diversionrp-laravel && php artisan test
```
To develop the React frontend run:
```bash
pnpm run dev --dir diversionrp-laravel
```
Build the production assets:
```bash
pnpm run build --dir diversionrp-laravel
```
See `Conversion.md` for detailed migration steps.
