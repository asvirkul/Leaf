
    <!-- Footer Start -->
    <footer>
        <div class="footer-content container row">
            <div class="email-footer col s12 l6">
                <h6 class="title">Our emails are <br> plastic-free too... <br> <span>unsubscribe any time.</span></h6>
                <form>
                    <input placeholder="email" type="email" class="input-footer">
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div class="footer-menu col s6 xl3">
                <ul class="menu">
                    <li><a href="#">Shop</a></li>
                    <li><a href="instructions.html">Our Story</a></li>
                    <li><a href="about.html">About Our Razors</a></li>
                    <li><a href="#">Instructions, Tips & Cleaning</a></li>
                    <li><a href="#">Blade Recycling</a></li>
                    <li><a href="#">FAQ</a></li>
                </ul>
            </div>
            <div class="footer-menu col s6 xl3">
                <ul class="menu">
                    <li><a href="#">Get In Touch</a></li>
                    <li><a href="#">Wholesale Ordering</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms of Use</a></li>
                    <li><a href="#">Refund Policy</a></li>
                    <li><a href="#">Shipping</a></li>
                    <li><a href="#">Accessibility</a></li>
                    <li><a href="#">Patents</a></li>
                </ul>
            </div>
            <div class="copy">
                <p>&copy; 2021 Leaf Shave Company, LLC.</p>
            </div>
        </div><!-- footer-content -->
    </footer>
    <!-- Footer End -->
    <!-- Mobile -->
    <div id="slide-out" class="sidenav">
        <div class="logo">
            <div id="closenav">
                <a href="#"><i class="material-icons">close</i></a>
            </div>
            <p class="logo-img">
                <a href="index.html">
                    <i>LEAF</i>
                </a>
            </p>
        </div>
        <ul class="menu">
            <li><a href="#">Shop</a></li>
            <li><a href="<?php ?>instructions.html">Our Story</a></li>
            <li><a href="#">About Our Razors</a></li>
            <li><a href="#">Instructions & Cleaning</a></li>
        </ul>
        <a href="#" class="mobile-account">Account</a>
    </div>
<!-- Mobile -->

    <!-- Bag Start -->
    <div class="dark"></div>
        <section class="bag-sidenav-wrapper">
            <div class="bag-top-menu">
                <h6>Bag</h6>
                <p class="close-bag">Close</p>
            </div>
            <div class="bag-added">
                <article>
                    <div class="added-img">
                       <img src="<?= PATH . VIEW ?>images/saleleaf1.jpg" alt=""> 
                    </div>
                    <div class="added-name-wrapper">
                        <h6 class="left"><a href="#">Leaf Super Bundle, Barryblue</a></h6>
                        <span class="price right">$417</span>
                        <p class="added-color">Berryblue</p>
                        <div class="added-quantity">
                            <span class="added-delete"><i class="fas fa-trash-alt"></i></span>
                            <div class="added-qty">
                                <button type="button" id="sub" class="sub"><i class="fas fa-minus"></i></button>
                                <input type="text" id="1" value="1" min="1" max="3" disabled />
                                <button type="button" id="add" class="add"><i class="fas fa-plus"></i></button>
                            </div>
                            
                        </div>
                    </div>
                </article>
                <article>
                    <div class="added-img">
                       <img src="<?= PATH . VIEW ?>images/saleleaf1.jpg" alt=""> 
                    </div>
                    <div class="added-name-wrapper">
                        <h6 class="left"><a href="#">Leaf Super Bundle, Barryblue</a></h6>
                        <span class="price right">$417</span>
                        <p class="added-color">Berryblue</p>
                        <div class="added-quantity">
                            <span class="added-delete"><i class="fas fa-trash-alt"></i></span>
                            <div class="added-qty">
                                <button type="button" id="sub" class="sub"><i class="fas fa-minus"></i></button>
                                <input type="text" id="1" value="1" min="1" max="3" disabled />
                                <button type="button" id="add" class="add"><i class="fas fa-plus"></i></button>
                            </div>
                            
                        </div>
                    </div>
                </article>
                <div class="else-added">
                    <h6>Need Anything Else?</h6>
                    <div class="else-items">
                        <a href="#" class="else-item">
                            <p class="else-price">$9</p>
                            <h6>Add a Shave Soap Bar</h6>
                            <div class="else-img">
                                <img src="<?= PATH . VIEW ?>images/else.jpg" alt="">
                            </div>
                            
                        </a>
                        <a href="#" class="else-item">
                            <p class="else-price">$9</p>
                            <h6>Add a Shave Soap Bar</h6>
                            <div class="else-img">
                                <img src="<?= PATH . VIEW ?>images/else.jpg" alt="">
                            </div>
                            
                        </a>
                        <a href="#" class="else-item">
                            <p class="else-price">$9</p>
                            <h6>Add a Shave Soap Bar</h6>
                            <div class="else-img">
                                <img src="<?= PATH . VIEW ?>images/else.jpg" alt="">
                            </div>
                            
                        </a>
                        <a href="#" class="else-item">
                            <p class="else-price">$9</p>
                            <h6>Add a Shave Soap Bar</h6>
                            <div class="else-img">
                                <img src="<?= PATH . VIEW ?>images/else.jpg" alt="">
                            </div>
                            
                        </a>
                    </div>
                </div>
            </div>
            <div class="checkout">
                <a href="#">Go To Checkout</a>
            </div>
        </section>
    <!-- Bag End -->

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="<?= PATH . VIEW ?>js/jquery-ui.min.js"></script>
    <script src="https://unpkg.com/swiper@7/swiper-bundle.min.js"></script>
    <script src="<?= PATH . VIEW ?>js/materialize.min.js"></script>
    <script src="<?= PATH . VIEW ?>js/swiper.js"></script>
    <script src="<?= PATH . VIEW ?>js/slick.min.js"></script>
    <script src="<?= PATH . VIEW ?>js/script.js"></script>
    <script src="<?= PATH . VIEW ?>js/slick-script.js"></script>
    <script src="<?= PATH . VIEW ?>js/product.js"></script>
    <script src="<?= PATH . VIEW ?>js/instructions.js"></script>
</body>
</html>