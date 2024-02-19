const header = document.querySelector("header");
const img = header.querySelector('img');

window.addEventListener("scroll", function(){
    const isScrollPast80 = window.scrollY > 80;

    header.classList.toggle("sticky", isScrollPast80);

    const imgSrc = isScrollPast80 ? 'img/logo-yuna-branco.png' : 'img/logo-yuna.png';
    img.setAttribute('src', imgSrc);
});

$('.show_hide').click(function () {
    $('.navlist').toggleClass( "-active");
    $('.overlayMenuM').toggleClass( "-active");
});

$('.navlist.-active li a').click(function () {
    $('.navlist.-active').toggleClass( "-active");
    $('.overlayMenuM').toggleClass( "-active");
});

$('.fade').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay:true,
    cssEase: 'linear'
  });