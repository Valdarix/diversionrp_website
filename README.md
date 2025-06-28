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
The repository now contains a Laravel 11 skeleton under `diversionrp-laravel`.
Install its dependencies and run the default tests:
```bash
pnpm install --dir diversionrp-laravel
cd diversionrp-laravel && php artisan test
```
See `Conversion.md` for detailed migration steps.
