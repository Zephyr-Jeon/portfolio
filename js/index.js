$(function () {
  gnb();
  landingBGspan();
  landingText();
  landingImg();
  workBGspan();
  workOpen();
  contactBGspan();

  $(document).on('scroll', function () {
    workSection();
    about();
    namecard();
  });

  function gnb() {
    $('#navTap li span').on('click', function () {
      var index = $(this).parent().index();
      var offsetWork = $('#navWork').offset().top;
      var offsetAbout = $('#navAbout').offset().top;
      var offsetContact = $('#navContact').offset().top;
      if (index == 0) {
        $('html,body')
          .stop()
          .animate({ scrollTop: offsetWork - 100 });
      } else if (index == 1) {
        $('html,body')
          .stop()
          .animate({ scrollTop: offsetAbout - 100 });
      } else if (index == 2) {
        $('html,body')
          .stop()
          .animate({ scrollTop: offsetContact - 100 });
      }
    });
  }

  function landingBGspan() {
    for (var i = 0; i < 24; i++) {
      $('#landing').find('div.container').prepend('<span></span>');
    }
  }

  function landingImg() {
    $('#landing-img div').animate({ left: 0, width: '100%' }, 800, function () {
      $('#landing-img img').animate({ left: 0 }, 800);
    });
  }

  function landingText() {
    var textBox = $('#landing-text').children('div');
    for (var i = 0; i < 4; i++) {
      textBox
        .eq(i)
        .children()
        .delay((i + 2) * 800)
        .animate({ top: 0 }, 800);
    }
  }

  function workBGspan() {
    for (var i = 0; i < 120; i++) {
      $('.work-bg').append('<span></span>');
    }
  }

  function workSection() {
    var browserScrollTop = $(document).scrollTop();
    var workTop = $('#navWork').offset().top;
    var letterHeight = $('#navWork').height();
    if (browserScrollTop > workTop - letterHeight) {
      for (var i = 0; i < 10; i++) {
        $('main')
          .children('section.work')
          .eq(i)
          .delay(i * 200)
          .stop()
          .animate({ top: '0vw', opacity: 1 });
      }
    } else {
      if ($('main').children('section.work').is(':animated') == true) {
        return;
      } else {
        $('main').children('section.work').css({ top: '6vw', opacity: 0 });
      }
      // $("main").children("section.work").css({ top: "6vw", opacity: 0.1 });
    }
  }

  /*function workOpen(){
        $('section.work').on('click',function(){
            $(this).siblings().removeClass('on');
            $(this).toggleClass('on');
            var has = $(this).hasClass('on');
            if(has){
                $(this).find('.work-open').stop().animate({height:'75vh'},800)
                $(this).siblings().find('.work-open').stop().animate({height:'0vh'},800)
            }else{
                $(this).find('.work-open').stop().animate({height:'0vh'},800)
            }
        })
    }*/

  function workOpen() {
    $('div.work-title-box').on('click', function () {
      $(this).parent('section.work').siblings().removeClass('on');
      $(this).parent('section.work').toggleClass('on');
      var has = $(this).parent('section.work').hasClass('on');
      if (has) {
        $(this)
          .parent('section.work')
          .find('.work-open')
          .stop()
          .animate({ height: '75vh' }, 800);
        $(this)
          .parent('section.work')
          .siblings()
          .find('.work-open')
          .stop()
          .animate({ height: '0vh' }, 800);
      } else {
        $(this)
          .parent('section.work')
          .find('.work-open')
          .stop()
          .animate({ height: '0vh' }, 800);
      }
    });
  }

  function about() {
    var browserScrollTop = $(document).scrollTop();
    var aboutOffsetTop = $('#navAbout').offset().top;
    var letterHeight = $('#navAbout').height();
    if (browserScrollTop > aboutOffsetTop - letterHeight) {
      $('#about-box').stop().animate({ top: 0, opacity: 1 });
    } else {
      $('#about-box').stop().animate({ top: '6vw', opacity: 0 });
    }
  }

  function contactBGspan() {
    for (var i = 0; i < 24; i++) {
      $('#contact-box').append('<span></span>');
    }
  }

  function namecard() {
    var browserScrollTop = $(document).scrollTop();
    var contactOffsetTop = $('#navContact').offset().top;
    var letterHeight = $('#navContact').height();
    if (browserScrollTop > contactOffsetTop - letterHeight) {
      $('#contact').addClass('on');
    } else {
      $('#contact').removeClass('on');
    }
  }
});
