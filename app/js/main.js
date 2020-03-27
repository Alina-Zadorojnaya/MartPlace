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




      var $range = $(".js-range-slider"),
      $inputFrom = $(".js-input-from"),
      $inputTo = $(".js-input-to"),
      instance,
      min=0,
      max = 400,
      from = 0,
      to = 0;
      
  
  $range.ionRangeSlider({
    skin: "round",
      type: "double",
      min: min,
      max: max,
      from: 30,
      to: 300,
      onStart: updateInputs,
      onChange: updateInputs
  });
  instance = $range.data("ionRangeSlider");
  
  function updateInputs (data) {
    from = data.from;
      to = data.to;
      
      $inputFrom.prop("value", '$ '+ from);
      $inputTo.prop("value", '$ '+ to);	
  }
  
  $inputFrom.on("input", function () {
      var val = $(this).prop("value");
      
      // validate
      if (val < min) {
          val = min;
      } else if (val > to) {
          val = to;
      }
      
      instance.update({
          from: val
      });
  });
  
  $inputTo.on("input", function () {
      var val = $(this).prop("value");
      
      // validate
      if (val < from) {
          val = from;
      } else if (val > max) {
          val = max;
      }
      
      instance.update({
          to: val
      });
  });




 
    /*  $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 400,
        from: 30,
        to: 300,
        prefix: "$"
    });*/


    $('.icon-list').on('click', function(){
      $('.probuct__item').addClass('list');
      $('.icon-list').addClass('active');
      $('.icon-th-large').removeClass('active')   
    });
      
    $('.icon-th-large').on('click', function(){
      $('.probuct__item').removeClass('list');
      $('.icon-th-large').addClass('active');
      $('.icon-list').removeClass('active');
    });
     

      $('.followers__slider').slick({
        dots: false,
        infinite: true,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,

        prevArrow:'<button class="slick-arrow slick-prev" type="button"><img src="images/icons/chevron-left.png" alt=""></button>',
        nextArrow:'<button class="slick-arrow slick-next" type="button"><img src="images/icons/chevron-right.png" alt=""></button>'

      });

      $('.menu__btn').on('click', function(){
        $('.menu__list').slideToggle();
      });
      $('.header-btn-menu').on('click', function(){
        $('.header__box').toggleClass('active');
      });
      var mixer = mixitup('.products__item-box');
});