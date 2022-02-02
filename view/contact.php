<?php require_once 'header-all.php'; ?>

<!-- Contact Start -->
<section class="contact-wrapper-background">
    <div class="contact-title">
        <h1>Get in touch</h1>
    </div>
    <div class="contact-form-wrapper">
        <div class="contact-form-title center">
            <h2>Have a specific question?</h2>
            <p>We're always happy to help</p>
        </div>
        <form class="contact row">
            <div class="col s12 m6 first"><input type="text" name="contact-first-name" class="contact-first" placeholder="First Name"></div>
            <div class="col s12 m6 last"><input type="text" name="contact-last-name" class="contact-second" placeholder="Last Name"></div>
            <div><input type="email" name="contact-email" class="contact-email" placeholder="Email"></div>
            <div><textarea name="contact-message" class="contact-message" placeholder="Message"></textarea></div>
            <input type="submit" value="Submit">
        </form>
    </div>
</section>
<!-- Contact End -->

<?php require_once 'tiles.php'; ?>
<?php require_once 'footer.php'; ?>