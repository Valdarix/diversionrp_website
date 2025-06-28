# Diversion RP Website

Static website with PHP scripts and Tailwind CSS. A lightweight SQLite database powers dynamic announcements. Phase 3 begins the move to a Laravel + React stack.

## Build CSS
```bash
pnpm install
pnpm exec tailwindcss -i ./src/styles.css -o ./dist/styles.css
```

## PHP Lint
```bash
php -l db.php posts.php send_email.php showcase.php
```

### Laravel Migration
The new application will be scaffolded with Laravel 11 and React 18. Run the following once to generate the project:
```bash
composer create-project laravel/laravel diversionrp-laravel
pnpm install --dir diversionrp-laravel
```
After installing, execute Laravel tests with `php artisan test` inside the new directory. See `Conversion.md` for detailed steps.
