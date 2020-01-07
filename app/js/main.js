$(function(){

  $(".rate-star").rateYo({
    rating: 4.6,
    normalFill: "#FFFFFF",
    starWidth: "12px",
    readOnli: true
  });

 
    $('.slider-wrapper').slick({
        dots: false,
        infinite: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,

        prevArrow:'<button class="slick-arrow slick-prev" type="button"><img src="images/icons/chevron-left.png" alt=""></button>',
        nextArrow:'<button class="slick-arrow slick-next" type="button"><img src="images/icons/chevron-right.png" alt=""></button>'

      });
        
      var mixer = mixitup('.products__item-box');

      $('.followers__slider').slick({
        dots: false,
        infinite: true,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,

        prevArrow:'<button class="slick-arrow slick-prev" type="button"><img src="images/icons/chevron-left.png" alt=""></button>',
        nextArrow:'<button class="slick-arrow slick-next" type="button"><img src="images/icons/chevron-right.png" alt=""></button>'

      });

     /* $('.feedback__slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        
        prevArrow:'<button class="slick-arrow slick-prev" type="button"><img src="images/icons/left.png" alt=""></button>',
        nextArrow:'<button class="slick-arrow slick-next" type="button"><img src="images/icons/right.png" alt=""></button>'
      });*/

});