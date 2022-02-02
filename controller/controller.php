<?php
defined('ACCESS') or die(header('Location: index.php'));
session_start();
require_once MODEL; 

$view = empty($_GET['view']) ? 'main' : $_GET['view'];

if ($view == 'main') {

}
else if ($view == 'about') {
    
}
else {
    $view == 'main';
}

require_once VIEW . 'index.php';