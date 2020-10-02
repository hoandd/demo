AOS.init({
    duration: 800,
    easing: 'slide'
});

(function ($) {

    "use strict";

    var isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };


    $(window).stellar({
        responsive: true,
        parallaxBackgrounds: true,
        parallaxElements: true,
        horizontalScrolling: false,
        hideDistantElements: false,
        scrollProperty: 'scroll'
    });


    var fullHeight = function () {

        $('.js-fullheight').css('height', $(window).height());
        $(window).resize(function () {
            $('.js-fullheight').css('height', $(window).height());
        });

    };
    fullHeight();

    // loader
    var loader = function () {
        setTimeout(function () {
            if ($('#ftco-loader').length > 0) {
                $('#ftco-loader').removeClass('show');
            }
        }, 1);
    };
    loader();

    // Scrollax
    $.Scrollax();

    var carousel = function () {
        let $homeSlider = $('.home-slider');
        if ($homeSlider.length) {
            $homeSlider.owlCarousel({
                loop: true,
                autoplay: true,
                margin: 0,
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                nav: false,
                autoplayHoverPause: false,
                items: 1,
                navText: ["<span class='ion-md-arrow-back'></span>", "<span class='ion-chevron-right'></span>"],
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    1000: {
                        items: 1
                    }
                }
            });
        }


        var product_list_slider = $('.product_list_slider');
        if (product_list_slider.length) {
            product_list_slider.owlCarousel({
                items: 3,
                loop: true,
                dots: false,
                autoplay: false,
                autoplayHoverPause: true,
                autoplayTimeout: 50000,
                nav: true,
                navText: ['<i class="ion-ios-arrow-back" aria-hidden="true"></i>', '<i class="ion-ios-arrow-forward" aria-hidden="true"></i>'],
                smartSpeed: 1000,
                responsive: {
                    0: {
                        margin: 15,
                        nav: false,
                        items: 1
                    },
                    600: {
                        margin: 15,
                        items: 2,
                        nav: false
                    },
                    768: {
                        margin: 30,
                        nav: true,
                        items: 3
                    }
                }
            });
        }
        
        var news_list_slider = $('.news_list_slider');
        if (news_list_slider.length) {
            news_list_slider.owlCarousel({
                items: 3,
                loop: true,
                dots: false,
                autoplay: false,
                autoplayHoverPause: true,
                autoplayTimeout: 50000,
                nav: true,
                navText: ['<i class="ion-ios-arrow-back" aria-hidden="true"></i>', '<i class="ion-ios-arrow-forward" aria-hidden="true"></i>'],
                smartSpeed: 1000,
                responsive: {
                    0: {
                        margin: 15,
                        nav: false,
                        items: 1
                    },
                    600: {
                        margin: 15,
                        items: 2,
                        nav: false
                    },
                    768: {
                        margin: 30,
                        nav: true,
                        items: 3
                    }
                }
            });
        }

        let testimony = $('.carousel-testimony');
        if (testimony.length) {
            testimony.owlCarousel({
                center: true,
                loop: true,
                items: 1,
                margin: 30,
                stagePadding: 0,
                nav: false,
                navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    1000: {
                        items: 1
                    }
                }
            });
        }


    };
    carousel();

    $('nav .dropdown').hover(function () {
        var $this = $(this);
        // 	 timer;
        // clearTimeout(timer);
        $this.addClass('show');
        $this.find('> a').attr('aria-expanded', true);
        // $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
        $this.find('.dropdown-menu').addClass('show');
    }, function () {
        var $this = $(this);
        // timer;
        // timer = setTimeout(function(){
        $this.removeClass('show');
        $this.find('> a').attr('aria-expanded', false);
        // $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
        $this.find('.dropdown-menu').removeClass('show');
        // }, 100);
    });


    $('#dropdown04').on('show.bs.dropdown', function () {
        console.log('show');
    });

    // scroll
    var scrollWindow = function () {
        $(window).scroll(function () {
            var $w = $(this),
                st = $w.scrollTop(),
                navbar = $('.ftco_navbar'),
                sd = $('.js-scroll-wrap');

            if (st > 150) {
                if (!navbar.hasClass('scrolled')) {
                    navbar.addClass('scrolled');
                }
            }
            if (st < 150) {
                if (navbar.hasClass('scrolled')) {
                    navbar.removeClass('scrolled sleep');
                }
            }
            if (st > 350) {
                if (!navbar.hasClass('awake')) {
                    navbar.addClass('awake');
                }

                if (sd.length > 0) {
                    sd.addClass('sleep');
                }
            }
            if (st < 350) {
                if (navbar.hasClass('awake')) {
                    navbar.removeClass('awake');
                    navbar.addClass('sleep');
                }
                if (sd.length > 0) {
                    sd.removeClass('sleep');
                }
            }
        });
    };
    scrollWindow();


    var counter = function () {

        $('#section-counter').waypoint(function (direction) {

            if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

                var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
                $('.number').each(function () {
                    var $this = $(this),
                        num = $this.data('number');
                    console.log(num);
                    $this.animateNumber(
                        {
                            number: num,
                            numberStep: comma_separator_number_step
                        }, 7000
                    );
                });

            }

        }, { offset: '95%' });

    }
    counter();

    var contentWayPoint = function () {
        var i = 0;
        $('.ftco-animate').waypoint(function (direction) {

            if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

                i++;

                $(this.element).addClass('item-animate');
                setTimeout(function () {

                    $('body .ftco-animate.item-animate').each(function (k) {
                        var el = $(this);
                        setTimeout(function () {
                            var effect = el.data('animate-effect');
                            if (effect === 'fadeIn') {
                                el.addClass('fadeIn ftco-animated');
                            } else if (effect === 'fadeInLeft') {
                                el.addClass('fadeInLeft ftco-animated');
                            } else if (effect === 'fadeInRight') {
                                el.addClass('fadeInRight ftco-animated');
                            } else {
                                el.addClass('fadeInUp ftco-animated');
                            }
                            el.removeClass('item-animate');
                        }, k * 50, 'easeInOutExpo');
                    });

                }, 100);

            }

        }, { offset: '95%' });
    };
    contentWayPoint();


    // navigation
    var OnePageNav = function () {
        $(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on('click', function (e) {
            e.preventDefault();

            var hash = this.hash,
                navToggler = $('.navbar-toggler');
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, 'easeInOutExpo', function () {
                window.location.hash = hash;
            });


            if (navToggler.is(':visible')) {
                navToggler.click();
            }
        });
        $('body').on('activate.bs.scrollspy', function () {
            console.log('nice');
        })
    };
    OnePageNav();


    // magnific popup
    $('.image-popup').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        fixedContentPos: true,
        mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            verticalFit: true
        },
        zoom: {
            enabled: true,
            duration: 300 // don't foget to change the duration also in CSS
        }
    });

    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });



    var goHere = function () {

        $('.mouse-icon').on('click', function (event) {

            event.preventDefault();

            $('html,body').animate({
                scrollTop: $('.goto-here').offset().top
            }, 500, 'easeInOutExpo');

            return false;
        });
    };
    goHere();

    function makeTimer() {

        var endTime = new Date("21 December 2019 9:56:00 GMT+01:00");
        endTime = (Date.parse(endTime) / 1000);

        var now = new Date();
        now = (Date.parse(now) / 1000);

        var timeLeft = endTime - now;

        var days = Math.floor(timeLeft / 86400);
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

        if (hours < "10") { hours = "0" + hours; }
        if (minutes < "10") { minutes = "0" + minutes; }
        if (seconds < "10") { seconds = "0" + seconds; }

        $("#days").html(days + "<span>Days</span>");
        $("#hours").html(hours + "<span>Hours</span>");
        $("#minutes").html(minutes + "<span>Minutes</span>");
        $("#seconds").html(seconds + "<span>Seconds</span>");

    }

    setInterval(function () { makeTimer(); }, 1000);

    function loadCart() {
        let products = CART.sort('qty');
        var $spanItemCount = $('.cart-contents span');
        var $cart = $('.widget_shopping_cart_content');
        var $html = '<ul class="woocommerce-mini-cart cart_list product_list_widget">';
        var $buttonGroup = '<p class="woocommerce-mini-cart__buttons buttons"><a href="/cart" class="button wc-forward">View cart</a><a href="/cart/checkout" class="button checkout wc-forward">Checkout</a></p>';
        var totalPrice = 0;
        var countItem = 0;
        products.forEach(item => {
            $html = $html + '<li class="woocommerce-mini-cart-item mini_cart_item"><a href="#" class="remove remove_from_cart_button" aria-label="Remove this item" data-product_id="' + item.id + '">x</a><a href="#"><img src="' + item.image + '" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image" alt=""  sizes="(max-width: 260px) 92vw, 260px">' + item.title + '</a><span class="quantity">' + item.qty + ' x <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol"></span>' + item.itemPrice + '</span></span></li>';
            totalPrice = totalPrice + (item.itemPrice * item.qty);
            countItem = countItem + item.qty;
        })

        $spanItemCount.html(countItem);
        var $total = '<p class="woocommerce-mini-cart__total total"><strong>Subtotal:</strong> <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>' + totalPrice + '</span></p>'
        $html = $html + '</ul>';
        $html = $html + $total;
        $html = $html + $buttonGroup;

        $cart.html($html);

    }

    function mousein_triger() {
        $(this).find('.widget_shopping_cart_content').css('visibility', 'visible');
        $(this).find('.excerpt-wrapper').css('visibility', 'visible');
        $(this).addClass('hovered');
    }

    function mouseout_triger() {
        $(this).removeClass('hovered');
        $(this).find('.widget_shopping_cart_content').delay(300).queue(function () {
            $(this).css('visibility', 'hidden').dequeue();
        });
        $(this).find('.excerpt-wrapper').delay(300).queue(function () {
            $(this).css('visibility', 'hidden').dequeue();
        });
    }


    const CART = {
        KEY: 'funiture_products',
        contents: [],
        init() {
            //check localStorage and initialize the contents of CART.contents
            let _contents = localStorage.getItem(CART.KEY);
            if (_contents) {
                CART.contents = JSON.parse(_contents);
            }
        },
        async sync() {
            let _cart = JSON.stringify(CART.contents);
            await localStorage.setItem(CART.KEY, _cart);
        },
        find(id) {
            //find an item in the cart by it's id
            let match = CART.contents.filter(item => {
                if (item.id == id)
                    return true;
            });
            if (match && match[0])
                return match[0];
        },
        add(obj) {
            //add a new item to the cart
            //check that it is not in the cart already
            if (CART.find(obj.id)) {
                CART.increase(obj.id, 1);
            } else {
                if (obj) {
                    CART.contents.push(obj);
                    //update localStorage
                    CART.sync();
                } else {
                    //product id does not exist in products data
                    console.error('Invalid Product');
                }
            }
        },
        increase(id, qty = 1) {
            //increase the quantity of an item in the cart
            CART.contents = CART.contents.map(item => {
                if (item.id === id)
                    item.qty = item.qty + qty;
                return item;
            });
            //update localStorage
            CART.sync()
        },
        reduce(id, qty = 1) {
            //reduce the quantity of an item in the cart
            CART.contents = CART.contents.map(item => {
                if (item.id === id)
                    item.qty = item.qty - qty;
                return item;
            });
            CART.contents.forEach(async item => {
                if (item.id === id && item.qty === 0)
                    await CART.remove(id);
            });
            //update localStorage
            CART.sync()
        },
        remove(id) {
            //remove an item entirely from CART.contents based on its id
            CART.contents = CART.contents.filter(item => {
                if (item.id !== id)
                    return true;
            });
            //update localStorage
            CART.sync()
        },
        empty() {
            //empty whole cart
            CART.contents = [];
            //update localStorage
            CART.sync()
        },
        sort(field = 'title') {
            //sort by field - title, price
            //return a sorted shallow copy of the CART.contents array
            let sorted = CART.contents.sort((a, b) => {
                if (a[field] > b[field]) {
                    return 1;
                } else if (a[field] < a[field]) {
                    return -1;
                } else {
                    return 0;
                }
            });
            return sorted;
            //NO impact on localStorage
        },
        logContents(prefix) {
            console.log(prefix, CART.contents)
        }
    };

    function showCart() {

        let cartSection = document.getElementById('cart');
        if (cartSection !== null && cartSection !== undefined) {
            let $totalAmount = $('.woocommerce-Price-amount');
            let totalAmount = 0;
            cart.innerHTML = '';
            let s = CART.sort('qty');
            s.forEach(item => {
                let cartitem = document.createElement('tr');
                cartitem.className = 'cart_item';

                let productName = document.createElement('td');
                let productChild = '<div class="product-thumbnail" > <a href="#"><img width="260" height="260" src="' + item.image + '" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image" alt="" sizes="(max-width: 260px) 92vw, 260px"></a></div><a href="#">' + item.title + '</a>';
                productName.innerHTML = productChild;
                productName.className = 'product-name'
                cartitem.appendChild(productName);

                let price = document.createElement('td');
                price.className = 'product-subtotal';

                price.innerHTML = '<span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>' + item.itemPrice + '</span>';
                cartitem.appendChild(price);

                let status = document.createElement('td');
                status.className = 'product-status';
                status.innerHTML = '<p class="stock">In Stock</p>';
                cartitem.appendChild(status);

                let controls = document.createElement('td');
                controls.className = 'product-quantity';
                cartitem.appendChild(controls);

                let plus = document.createElement('span');
                plus.textContent = '+';
                plus.setAttribute('data-id', item.id)
                controls.appendChild(plus);
                plus.addEventListener('click', incrementCart)

                let qty = document.createElement('span');
                qty.textContent = item.qty;
                controls.appendChild(qty);

                let minus = document.createElement('span');
                minus.textContent = '-';
                minus.setAttribute('data-id', item.id)
                controls.appendChild(minus);
                minus.addEventListener('click', decrementCart)

                let total = document.createElement('td');
                total.className = 'product-subtotal';
                let cost = new Intl.NumberFormat('en-CA',
                    { style: 'currency', currency: 'CAD' }).format(item.qty * item.itemPrice);
                totalAmount = totalAmount + (item.qty * item.itemPrice);

                total.innerHTML = '<span class="woocommerce-Price-amount amount">' + cost + '</span>';
                cartitem.appendChild(total);

                let removeItem = document.createElement('td');
                removeItem.className = 'product-remove';
                cartitem.appendChild(removeItem);
                let removebtn = document.createElement('span');
                removebtn.className = 'remove';
                removebtn.textContent = 'x';
                removebtn.setAttribute('data-id', item.id)
                removeItem.appendChild(removebtn);
                removebtn.addEventListener('click', removeEvent)



                cartSection.appendChild(cartitem);
            })
            let totalCost = new Intl.NumberFormat('en-CA',
                { style: 'currency', currency: 'CAD' }).format(totalAmount);
            $totalAmount.html(totalCost);
        }

    }

    function incrementCart(ev) {
        ev.preventDefault();
        let id = parseInt(ev.target.getAttribute('data-id'));
        CART.increase(id, 1);
        showCart();;
    }

    function decrementCart(ev) {
        ev.preventDefault();
        let id = parseInt(ev.target.getAttribute('data-id'));
        CART.reduce(id, 1);
        showCart();
    }

    function removeEvent(ev) {
        ev.preventDefault();
        let id = parseInt(ev.target.getAttribute('data-id'));
        CART.remove(id);
        showCart();
    }


    $(window).load(function () {
        CART.init();
        loadCart();
        showCart();

        $('header .widget_shopping_cart').hover(mousein_triger, mouseout_triger);

        $('.add-to-cart').on('click', function () {
            let element = $(this);
            let getItemId = parseInt(element.prop('id'));
            let $image = element.parent().parent().prev().find('img').attr('src');
            let $priceText = element.parent().prev('.pricing').find('span.price-sale').html();
            let $title = element.parent().prev().prev().find('a').html();

            let $price = parseInt($priceText.replace("$", ""));
            if ($.isNumeric($price) == false) {
                $price = 0;
            }
            let obj = {
                id: getItemId,
                title: $title,
                qty: 1,
                itemPrice: $price,
                image: $image
            };

            CART.add(obj, 1);
            loadCart();
        });

        $(document).on('click', '.remove_from_cart_button', function () {
            let element = $(this);
            let id = parseInt(element.attr("data-product_id"));
            CART.remove(id);
            loadCart();
        });
    });
})(jQuery);

