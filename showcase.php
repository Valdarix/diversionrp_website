<?php
$directory = 'images/showcase';
$images = glob($directory . "/*.{jpg,jpeg,png,gif}", GLOB_BRACE);

foreach ($images as $index => $image) {
    $imagePath = htmlspecialchars($image);
    $imageId = "img" . ($index + 1);
    echo "<a href='#$imageId'><img src='$imagePath' alt='Showcase Image " . ($index + 1) . "'></a>";
    echo "<div id='$imageId' class='lightbox' onclick=\"window.location='#'\">
            <img src='$imagePath' alt='Showcase Image " . ($index + 1) . "'>
          </div>";
}
?>
