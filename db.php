<?php
/**
 * Database connection helper for SQLite.
 * Initializes database and posts table if missing.
 */
function get_db(): PDO
{
    $dbPath = __DIR__ . '/database/database.sqlite';
    $needInit = !file_exists($dbPath);
    $pdo = new PDO('sqlite:' . $dbPath);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    if ($needInit) {
        $pdo->exec("CREATE TABLE posts (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT NOT NULL, body TEXT NOT NULL, created_at DATETIME DEFAULT CURRENT_TIMESTAMP)");
    }
    return $pdo;
}
