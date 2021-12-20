<?php

use Bastien\CalculNotes\App;

require __DIR__ . '/../vendor/autoload.php';

dump($_POST);

$app = new App($_POST);

require_once './fragments/doctype.php';
