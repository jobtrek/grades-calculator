<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <title>Calculateur de Notes</title>
    <link href="assets/bulma.min.css" rel="stylesheet">
</head>
<body>


<!-- Import fragments -->
<?php
require_once 'navigation.php';
require_once 'hero.php';
require_once 'averages.php';
?>

<form id="grades-form" method="POST" action="index.php">

<?php
require_once 'weights.php';
require_once 'grades.php';
?>
<button type="submit">Submit</button>
</form>


<script src="assets/app.js" type="module"></script>

</body>
</html>
