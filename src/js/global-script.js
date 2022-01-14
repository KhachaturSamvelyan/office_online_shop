$(document).ready(function () {

    $('.fancybox').fancybox()

    $('.tabs-stage .tabs-stage-menu').hide();
    $('.tabs-stage .tabs-stage-menu:first').show();
    $('.tabs-nav li:first').addClass('tab-active');
    $('.tabs-nav a').on('click', function(event){
    event.preventDefault();
    $('.tabs-nav li').removeClass('tab-active');
    $(this).parent().addClass('tab-active');
    $('.tabs-stage .tabs-stage-menu').hide();
    $($(this).attr('href')).show();
    });

    $(".owl-carousel-sale").owlCarousel({
        items: 1,
        nav: true,
        navRewind: false,
        navText: ["<svg xmlns='http://www.w3.org/2000/svg' width='89' height='89' viewBox='0 0 89 89' fill='none'><path d='M6.53567e-07 44.5C6.53567e-07 69.0767 19.9233 89 44.5 89C69.0767 89 89 69.0767 89 44.5C89 19.9233 69.0767 0 44.5 0C19.9233 0 6.53567e-07 19.9233 6.53567e-07 44.5Z' fill='#2E3F7F'/><path d='M68 42.5C68.8284 42.5 69.5 43.1716 69.5 44C69.5 44.8284 68.8284 45.5 68 45.5V42.5ZM18.9393 45.0607C18.3536 44.4749 18.3536 43.5251 18.9393 42.9393L28.4853 33.3934C29.0711 32.8076 30.0208 32.8076 30.6066 33.3934C31.1924 33.9792 31.1924 34.9289 30.6066 35.5147L22.1213 44L30.6066 52.4853C31.1924 53.0711 31.1924 54.0208 30.6066 54.6066C30.0208 55.1924 29.0711 55.1924 28.4853 54.6066L18.9393 45.0607ZM68 45.5H20V42.5H68V45.5Z' fill='white'/></svg>","<svg xmlns='http://www.w3.org/2000/svg' width='89' height='89' viewBox='0 0 89 89' fill='none'><path d='M89 44.5C89 69.0767 69.0767 89 44.5 89C19.9233 89 0 69.0767 0 44.5C0 19.9233 19.9233 0 44.5 0C69.0767 0 89 19.9233 89 44.5Z' fill='#2E3F7F'/><path d='M21 42.5C20.1716 42.5 19.5 43.1716 19.5 44C19.5 44.8284 20.1716 45.5 21 45.5V42.5ZM70.0607 45.0607C70.6464 44.4749 70.6464 43.5251 70.0607 42.9393L60.5147 33.3934C59.9289 32.8076 58.9792 32.8076 58.3934 33.3934C57.8076 33.9792 57.8076 34.9289 58.3934 35.5147L66.8787 44L58.3934 52.4853C57.8076 53.0711 57.8076 54.0208 58.3934 54.6066C58.9792 55.1924 59.9289 55.1924 60.5147 54.6066L70.0607 45.0607ZM21 45.5H69V42.5H21V45.5Z' fill='white'/></svg>"], 
    })

    $(".slider").slick({
        infinite: false,
        vertical: true,
        verticalSwiping: true,
        prevArrow:"<img width='36' height='29' src='img/top-arr.png'>",
        nextArrow:"<img width='36' height='29' src='img/botom-arr.png'>"
      });

    $(".owl-carousel-cart__img").click(function(e){
        var scrI = $(this).attr("src");
        
        $("#big").attr("src", scrI);
        $(".big-fancy").attr("href", scrI);
    });

    $(".blog-content__item").owlCarousel({
        items: 3,
        nav: true,
        navRewind: false,
        dots: false,
        margin: 36,
        navText: ["<svg xmlns='http://www.w3.org/2000/svg' width='89' height='89' viewBox='0 0 89 89' fill='none'><path d='M6.53567e-07 44.5C6.53567e-07 69.0767 19.9233 89 44.5 89C69.0767 89 89 69.0767 89 44.5C89 19.9233 69.0767 0 44.5 0C19.9233 0 6.53567e-07 19.9233 6.53567e-07 44.5Z' fill='#2E3F7F'/><path d='M68 42.5C68.8284 42.5 69.5 43.1716 69.5 44C69.5 44.8284 68.8284 45.5 68 45.5V42.5ZM18.9393 45.0607C18.3536 44.4749 18.3536 43.5251 18.9393 42.9393L28.4853 33.3934C29.0711 32.8076 30.0208 32.8076 30.6066 33.3934C31.1924 33.9792 31.1924 34.9289 30.6066 35.5147L22.1213 44L30.6066 52.4853C31.1924 53.0711 31.1924 54.0208 30.6066 54.6066C30.0208 55.1924 29.0711 55.1924 28.4853 54.6066L18.9393 45.0607ZM68 45.5H20V42.5H68V45.5Z' fill='white'/></svg>","<svg xmlns='http://www.w3.org/2000/svg' width='89' height='89' viewBox='0 0 89 89' fill='none'><path d='M89 44.5C89 69.0767 69.0767 89 44.5 89C19.9233 89 0 69.0767 0 44.5C0 19.9233 19.9233 0 44.5 0C69.0767 0 89 19.9233 89 44.5Z' fill='#2E3F7F'/><path d='M21 42.5C20.1716 42.5 19.5 43.1716 19.5 44C19.5 44.8284 20.1716 45.5 21 45.5V42.5ZM70.0607 45.0607C70.6464 44.4749 70.6464 43.5251 70.0607 42.9393L60.5147 33.3934C59.9289 32.8076 58.9792 32.8076 58.3934 33.3934C57.8076 33.9792 57.8076 34.9289 58.3934 35.5147L66.8787 44L58.3934 52.4853C57.8076 53.0711 57.8076 54.0208 58.3934 54.6066C58.9792 55.1924 59.9289 55.1924 60.5147 54.6066L70.0607 45.0607ZM21 45.5H69V42.5H21V45.5Z' fill='white'/></svg>"], 
        responsive:{
            320:{
                items:1,
            },
            815:{
                items:3,
            },
        }
    })

    
    $(".buy_more-slider").owlCarousel({
        items: 4,
        nav: true,
        navRewind: false,
        dots: false,
        margin: 29,
        navText: ["<svg xmlns='http://www.w3.org/2000/svg' width='89' height='89' viewBox='0 0 89 89' fill='none'><path d='M6.53567e-07 44.5C6.53567e-07 69.0767 19.9233 89 44.5 89C69.0767 89 89 69.0767 89 44.5C89 19.9233 69.0767 0 44.5 0C19.9233 0 6.53567e-07 19.9233 6.53567e-07 44.5Z' fill='#2E3F7F'/><path d='M68 42.5C68.8284 42.5 69.5 43.1716 69.5 44C69.5 44.8284 68.8284 45.5 68 45.5V42.5ZM18.9393 45.0607C18.3536 44.4749 18.3536 43.5251 18.9393 42.9393L28.4853 33.3934C29.0711 32.8076 30.0208 32.8076 30.6066 33.3934C31.1924 33.9792 31.1924 34.9289 30.6066 35.5147L22.1213 44L30.6066 52.4853C31.1924 53.0711 31.1924 54.0208 30.6066 54.6066C30.0208 55.1924 29.0711 55.1924 28.4853 54.6066L18.9393 45.0607ZM68 45.5H20V42.5H68V45.5Z' fill='white'/></svg>","<svg xmlns='http://www.w3.org/2000/svg' width='89' height='89' viewBox='0 0 89 89' fill='none'><path d='M89 44.5C89 69.0767 69.0767 89 44.5 89C19.9233 89 0 69.0767 0 44.5C0 19.9233 19.9233 0 44.5 0C69.0767 0 89 19.9233 89 44.5Z' fill='#2E3F7F'/><path d='M21 42.5C20.1716 42.5 19.5 43.1716 19.5 44C19.5 44.8284 20.1716 45.5 21 45.5V42.5ZM70.0607 45.0607C70.6464 44.4749 70.6464 43.5251 70.0607 42.9393L60.5147 33.3934C59.9289 32.8076 58.9792 32.8076 58.3934 33.3934C57.8076 33.9792 57.8076 34.9289 58.3934 35.5147L66.8787 44L58.3934 52.4853C57.8076 53.0711 57.8076 54.0208 58.3934 54.6066C58.9792 55.1924 59.9289 55.1924 60.5147 54.6066L70.0607 45.0607ZM21 45.5H69V42.5H21V45.5Z' fill='white'/></svg>"], 
        responsive:{
            320:{
                items:1,
                margin: 0,
            },
            465:{
                items:2,
            },
            815:{
                items:3,
                margin: 0,
            },
            1170:{
                items:4,
            },
        }
    })

    $('.blue-menu .tabs-stage .tabs-stage-menu').hide();
    $('.blue-menu .tabs-stage .tabs-stage-menu:first').show();
    $('.blue-menu .tabs-nav li:first').addClass('tab-active');
    $('.blue-menu .tabs-nav a').on('click', function(event){
    event.preventDefault();
    $('.blue-menu .tabs-nav li').removeClass('tab-active');
    $(this).parent().addClass('tab-active');
    $('.blue-menu .tabs-stage .tabs-stage-menu').hide();
    $($(this).attr('href')).show();
    });
});


$('#open').on('click', function() {
    $(".header-content__btn-menu").toggle();
    if ($(this).find("img").attr('src') == "img/menu-b.svg") { 
        $("#open img").attr("src","img/menu-c.svg");
    } else { 
        $("#open img").attr("src","img/menu-b.svg");
    }; 
});

$(window).click(function() {
    $(".header-content__btn-menu").hide();
    if($('.header-content__btn-menu').is(":visible")){
        $("#open img").attr("src","img/menu-c.svg");
    }
    else{
        $("#open img").attr("src","img/menu-b.svg");
    }
  });
  
  $('.header-content__btn').click(function(event){
    event.stopPropagation();
  });

$(".more a").click(function(e){
    e.preventDefault();
   });

$(".more").click(function(e){
    $(this).siblings(".hide").toggle();
    if ($(this).find("span").text() == "Еще") { 
        $(this).find("span").text("Свернуть");
        $(this).find("svg").css("transform", "rotate(-180deg)");
    } else { 
        $(this).find("span").text("Еще");
        $(this).find("svg").css("transform", "rotate(0deg)");
    }; 
  });

  $(".sale-close").click(function(e){
        $(".sale").hide();
    });

    $(".header-mobile-content__search svg").click(function(e){
        $(".search-modal").toggle();
    });
    

    $("#open-menu").click(function(){
        $('.header-mobile-content-menu').animate({width:'toggle'},250,function (){
        if($('.header-mobile-content-menu').is(":visible")){
            $('body').addClass("open_body");
        }
        else{
            $('body').removeClass("open_body");
        }
        })
    })
    $(".menu-close").click(function(){
        $('.header-mobile-content-menu').animate({width:'toggle'},250,function (){
        if($('.header-mobile-content-menu').is(":visible")){
            $('body').addClass("open_body");
        }
        else{
            $('body').removeClass("open_body");
        }
        })
    })


    $('.header-mobile-content-menu').on('click', function(e) {
        if (e.target !== this)
            return;

        $('.header-mobile-content-menu').animate({width:'toggle'},250,function (){
      
        })
        
        });

    // document.addEventListener('gesturestart', function (e) {
    //     e.preventDefault();
    // });


    $("#open-catalog").click(function(e){
        $(".blue-menu").toggle();
        if($('.blue-menu').is(":visible")){
            $('body').addClass("open_body2");
        }
        else{
            $('body').removeClass("open_body2");
        }
    });

    $(".menu-close-t").click(function(e){
        $(".blue-menu").toggle();
        if($('.blue-menu').is(":visible")){
            $('body').addClass("open_body2");
        }
        else{
            $('body').removeClass("open_body2");
        }
    });
    $("#open-catalog-2").click(function(e){
        $(".blue-menu").toggle();
        $(".header-mobile-content-menu").hide();
        if($('.blue-menu').is(":visible")){
            $('body').addClass("open_body2");
        }
        else{
            $('body').removeClass("open_body2");
        }
        if($('.header-mobile-content-menu').is(":visible")){
            $('body').addClass("open_body");
        }
        else{
            $('body').removeClass("open_body");
        }
        
    });
    

     $(".mob-filter").click(function(e){
        $(".mob-filter-blok").toggle();
        if($('.mob-filter-blok').is(":visible")){
            $('body').addClass("open_body2");
        }
        else{
            $('body').removeClass("open_body2");
        }
    });

    $(".close-icon").click(function(e){
        $(".mob-filter-blok").toggle();
        if($('.mob-filter-blok').is(":visible")){
            $('body').addClass("open_body2");
        }
        else{
            $('body').removeClass("open_body2");
        }
    });



// Show the first tab by default
$('.tabs-stage-slider .tabs-stage-slider__blok').hide();
$('.tabs-stage-slider .tabs-stage-slider__blok:first').show();
$('.tabs-nav-slider li:first').addClass('tab-active-slider');

// Change tab class and display content
$('.tabs-nav-slider a').on('click', function(event){
  event.preventDefault();
  $('.tabs-nav-slider li').removeClass('tab-active-slider');
  $(this).parent().addClass('tab-active-slider');
  $('.tabs-stage-slider .tabs-stage-slider__blok').hide();
  $($(this).attr('href')).show();
});



$(".m-text").click(function(e){
    $(this).siblings(".text-cart-hide").toggle();
    
    if ($(".m-text span").text() == "Раскрыть") { 
        $(".m-text span").text("Закрыть");
        $(this).find("svg").css("transform", "rotate(-180deg)");
    } else { 
        $(".m-text span").text("Раскрыть");
        $(this).find("svg").css("transform", "rotate(0deg)");
    }; 
  });

   
    

  
$(".more-btn").click(function(e){
    $(this).siblings(".hide-label").toggle();
    if ($(this).find("span").text() == "Еще") { 
        $(this).find("span").text("Свернуть");
        $(this).find("svg").css("transform", "rotate(-180deg)");
    } else { 
        $(this).find("span").text("Еще");
        $(this).find("svg").css("transform", "rotate(0deg)");
    }; 
  });
  

    $(function() {
        $('.t-li').on('click', function() {
           $(this).siblings().removeClass('sh').end().toggleClass('sh');
           $(this).find(".m-li").click(false);
        });
    });

    $(function() {
        $('.m-li').on('click', function() {
           $(this).siblings().removeClass('mh').end().toggleClass('mh');
           $(this).find(".menu-third a").click(function(){
                    var href = $(this).attr('href');
                  window.location.href = href; 
                });
        });
    });