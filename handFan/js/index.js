
/*$(document).ready(function(){
  $('.your-class').slick({
    setting-name: setting-value
  });
});*/

$(function(){
    $('.exhiSlider').slick({
        autoplay: true,
        dots: true,
    })
    
    $('.productFanSlider').slick({
        autoplay: true,
    })
    
    $('.photoSlider').slick({
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      variableWidth: true
    });
})