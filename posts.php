<?php
require_once __DIR__ . '/db.php';
$pdo = get_db();

// Handle new post submission
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $title = trim($_POST['title'] ?? '');
    $body = trim($_POST['body'] ?? '');
    if ($title !== '' && $body !== '') {
        $stmt = $pdo->prepare('INSERT INTO posts (title, body) VALUES (:title, :body)');
        $stmt->execute([':title' => $title, ':body' => $body]);
        header('Location: posts.php');
        exit();
    }
}

$posts = $pdo->query('SELECT id, title, body, created_at FROM posts ORDER BY created_at DESC')->fetchAll(PDO::FETCH_ASSOC);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="dist/styles.css" rel="stylesheet">
    <title>Announcements</title>
</head>
<body class="m-4">
    <h1 class="text-2xl font-bold mb-4">Announcements</h1>
    <?php foreach ($posts as $post): ?>
        <article class="mb-6 p-4 border rounded">
            <h2 class="text-xl font-semibold"><?php echo htmlspecialchars($post['title']); ?></h2>
            <p class="text-gray-700 mt-2"><?php echo nl2br(htmlspecialchars($post['body'])); ?></p>
            <time class="text-sm text-gray-500" datetime="<?php echo $post['created_at']; ?>">
                <?php echo $post['created_at']; ?>
            </time>
        </article>
    <?php endforeach; ?>

    <section class="mt-8">
        <h2 class="text-xl font-semibold mb-2">Add Announcement</h2>
        <form method="post" class="space-y-4">
            <input class="w-full border p-2" type="text" name="title" placeholder="Title" required>
            <textarea class="w-full border p-2" name="body" rows="4" placeholder="Message" required></textarea>
            <button class="bg-primary text-white px-4 py-2" type="submit">Post</button>
        </form>
    </section>
</body>
</html>
