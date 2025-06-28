# Diversion RP Website

This repository now hosts the Laravel 12 + React 18 application for the Diversion RP community.  All styling uses Tailwind CSS 4 with HeroUI components and Framer Motion animations.

## Setup
```bash
pnpm install --dir diversionrp-laravel
composer install --working-dir=diversionrp-laravel
cp diversionrp-laravel/.env.example diversionrp-laravel/.env
php artisan key:generate --working-dir=diversionrp-laravel
touch diversionrp-laravel/database/database.sqlite
```

## Development
Start the Vite dev server:
```bash
pnpm run dev --dir diversionrp-laravel
```

## Production build
```bash
pnpm run build --dir diversionrp-laravel
```

The `database.sqlite` file is tracked in version control to simplify local setup.
