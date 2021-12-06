<?php
require __DIR__ . '/../vendor/autoload.php';

use Bastien\GradesCalculator\App;

$app = new App($_POST);

require_once './fragments/doctype.php';
