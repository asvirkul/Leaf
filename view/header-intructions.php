<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- Reset -->
    <link rel="stylesheet" href="<?= PATH . VIEW ?>css/reset.css">
    <!-- jQuery UI -->
    <link rel="stylesheet" href="//code.jquery.com/ui/1.13.0/themes/base/jquery-ui.css">
    <link rel="stylesheet" href="/resources/demos/style.css">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css">
    <!-- Materrialize Icons -->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!-- Materialize -->
    <link rel="stylesheet" href="<?= PATH . VIEW ?>css/materialize.css">
    <!-- SLider Slick -->
    <link rel="stylesheet" href="<?= PATH . VIEW ?>css/slick.css">
    <link rel="stylesheet" href="<?= PATH . VIEW ?>css/slick-theme.css">
    <!-- Style-->
    <link rel="stylesheet" href="<?= PATH . VIEW ?>css/style.css">
</head>
<body>
    <!-- Header Start -->
    <header class="instruction-header">
        <nav class="header-content">
            <div class="menu-left">
                <ul class="menu">
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">Learn</a></li>
                    <li class="shave-us">Shave with us.</li>
                </ul>
            </div>
            <div class="mobile-bag hide-on-med-and-up">
                <ul class="menu">
                    <li><a href="#">Bag (0)</a></li>
                </ul>
                <div class="mobile-tabs tabs">
                    <a href="#tabs-1" class="active">The Leaf Razor</a>
                    <a href="#tabs-2" class="inactive">The Twig Razor</a>
                </div>
            </div>
            <div class="logo">
                <p id="logo"><a href="index.html"><img id="logo-pic" src="<?= PATH . VIEW ?>images/razor.png" alt="razor logo"><i class="line-logo"></i><i>LEAF</i></a></p>
            </div>
            <div class="menu-right">
                <ul class="menu">
                    <li><a href="#">Account</a></li>
                    <li><a href="#" class="bag-header">Bag (0)</a></li>
                </ul>
                <ul class="tabs mobile-tabs">
                    <a href="#tabs-1" class="active">The Leaf Razor</a>
                    <a href="#tabs-2" class="inactive">The Twig Razor</a>
                </ul>
            </div>
            <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>
        </nav><!-- header-content -->
    </header>
    <!-- Header End -->