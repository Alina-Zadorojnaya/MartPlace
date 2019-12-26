$(function(){

   
    $('.slider-wrapper').slick({
        dots: false,
        infinite: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,

        prevArrow:'<button class="slick-arrow slick-prev" type="button"><img src="images/icons/chevron-left.png" alt=""></button>',
        nextArrow:'<button class="slick-arrow slick-next" type="button"><img src="images/icons/chevron-right.png" alt=""></button>'

      });
            

});