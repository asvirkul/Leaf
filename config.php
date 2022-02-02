<?php

define('CONTROLLER', 'controller/controller.php');
define('MODEL', 'model/model.php');
define('VIEW', 'view/');
define('PATH', 'http://leaf.loc/');
define('HOST', 'localhost');
define('USER', 'root');
define('PASS', '');
define('DB', 'leaf');

@$db = mysqli_connect(HOST, USER, PASS, DB) or die('Нет Подключение к ДБ');
@mysqli_set_charset($db, 'utf8') or die ("Не установлена кодировка");