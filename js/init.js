//Scroll the menu
$(window).scroll(function(){
$('nav').toggleClass('scrolled',$(this).scrollTop() > 800)
    if( $(this).scrollTop() > 800){
    $('#scroll-link1').attr('style','color: #182326')
    $('#scroll-link2').attr('style','color: #182326')
    $('#scroll-link3').attr('style','color: #182326')
    $('#scroll-link4').attr('style','color: #182326')
    $('#scroll-link5').attr('style','color: #182326')
    }else{
    $('#scroll-link1').attr('style','color: unset')
    $('#scroll-link2').attr('style','color: unset')
    $('#scroll-link3').attr('style','color: unset')
    $('#scroll-link4').attr('style','color: unset')
    $('#scroll-link5').attr('style','color: unset')
    }
});

//back to top
$(".project-link").on("click", function(e){
$('html, body').animate({scrollTop: $('#projects').offset().top}, 750);
e.preventDefault();
});
$(".life-link").on("click", function(e){
$('html, body').animate({scrollTop: $('#activities').offset().top}, 750);
e.preventDefault();
});
$("#scroll-link1").on("click", function(e){
$('html, body').animate({scrollTop: 0}, 750);
e.preventDefault();
});
$("#back-to-top").on("click", function(e){
$('html, body').animate({scrollTop: 0}, 750);
e.preventDefault();
});
$("#scroll-link2").on("click", function(e){
$('html, body').animate({scrollTop: $('#about-me').offset().top}, 750);
e.preventDefault();
});
$("#scroll-link3").on("click", function(e){
$('html, body').animate({scrollTop: $('#projects').offset().top}, 750);
e.preventDefault();
});
$("#scroll-link4").on("click", function(e){
$('html, body').animate({scrollTop: $('#activities').offset().top}, 750);
e.preventDefault();
});
$("#scroll-link5").on("click", function(e){
$('html, body').animate({scrollTop: $('#album').offset().top}, 750);
e.preventDefault();
});

//filter

$('.portfolio').isotope({
    itemSelector: '.portfolio-item',
    layoutMode: 'fitRows'
});
$('.portfolio-menu ul li').click(function(){
    $('.portfolio-menu ul li').removeClass('active');
    $(this).addClass('active');

    var selector = $(this).attr('data-filter');
    $('.portfolio').isotope({
        filter: selector
    });
    return false;
});

//swiper

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 5,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

if ($( window ).width() <= 1000){
    swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 5,
        autoplay: {
            delay: 7500,
            disableOnInteraction: false,
        },
        navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
    
}