# Diversion RP Website

Static website with PHP scripts and Tailwind CSS. A lightweight SQLite database powers dynamic announcements.

## Build CSS
```bash
pnpm install
pnpm exec tailwindcss -i ./src/styles.css -o ./dist/styles.css
```

## PHP Lint
```bash
php -l db.php posts.php send_email.php showcase.php
```

The future Laravel migration will use **Tailwind CSS 4**.
