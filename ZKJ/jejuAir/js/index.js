/*$(document).ready(function(){
  $('.your-class').slick({
    setting-name: setting-value
  });
});*/

/*$(function(){
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
})*/


$(function(){
	let lt = $('#landingText li')
    let li = $('#landingImg li')
    let ln = $('#landingNext')
    let lp = $('#landingPrev')
	
    
	lp.on('click', function () {
        if(li.is(':animated')==true){
           return;
           }else{
               landingPrev();
           }
    })
	ln.on('click', function () {
        if(li.is(':animated')==true){
           return;
           }else{
               landingNext();
           }
    })
    
    var current = 0;
    
	function landingText() {
		lt.eq(current).addClass('on')
		lt.eq(current).siblings().removeClass('on')
		var bg=lt.eq(current).children('h2').text();
        li.eq(current).fadeIn(1000);
        li.eq(current).siblings().fadeOut(1000);
        $('#landing').removeClass('on');
        setTimeout(function(){
            $('#landing').addClass('on')
        },100)
        
        /*$('#landing').removeClass('on').addClass('on');*/
		/*$('#landing').removeClass('on',function(){
			$('#landing').addClass('on');
		});*/
		//lt.eq(current).find('i, p, b').animate({height:})
		
		var a=current-1;
		if(a == -1){
			a=10
		}
		lt.eq(a).addClass('onPrev')
		lt.eq(a).siblings().removeClass('onPrev')
		var b=a-1;
		if(b == -1){
			b=10
		}
		lt.eq(b).addClass('onPrevPrev')
		lt.eq(b).siblings().removeClass('onPrevPrev')
		var c=current+1;
		if(c == 11){
			c=0
		}
		lt.eq(c).addClass('onNext')
		lt.eq(c).siblings().removeClass('onNext')
		var d=c+1;
		if(d == 11){
			d=0
		}
		lt.eq(d).addClass('onNextNext')
		lt.eq(d).siblings().removeClass('onNextNext')
	}
	function landingPrev(){
		current--;
        if (current == -1) {
            current = 10
		}
		landingText();
		
	}
	function landingNext(){
		current++;
        if (current == 11) {
            current = 0
		}
		landingText();
	}
	
    
    //booking and managing tap
    //book or manage
    $('#BMtitle li').on('click',function(){
		var index=$(this).index();
        $(this).addClass('on').siblings().removeClass('on');
        if(index == 0){
            $('#stepBookArea').show();
            $('#stepManageArea').hide();
        }else{
            $('#stepBookArea').hide();
            $('#stepManageArea').show();
        }
    })
    //step1 tap
    $('#step1 input').on('click',function(){
        var index=$(this).parent('label').parent('li').index();
        var $class=$(this).parent('label').parent('li').hasClass('on');
        if($class){
            $(this).parent('label').parent('li').removeClass('on');
            $('#step2 ul').parent('#step2').stop().animate({height:0})
            
        }else{
            $(this).parent('label').parent('li').addClass('on').siblings().removeClass('on');
            $('#step2 ul').eq(index).siblings().css({display:'none'});
            step2height(index);
            
        }
        $('#step2').find('li.on').find('input').trigger('click')
    })
    //step2 tap
    function step2height(index){
        var s2h=$('#step2 ul').eq(index).css({display:'flex'}).height();
        $('#step2').stop().animate({height:s2h})
    }
    $('#step2 input').on('click',function(){
        var index=$(this).parent('label').parent('li').index();
        var $class=$(this).parent('label').parent('li').hasClass('on');
        if($class){
            $(this).parent('label').parent('li').removeClass('on');
            $('#step3 ul').parent('#step3').stop().animate({height:0});
            
        }else{
            $(this).parent('label').parent('li').addClass('on').siblings().removeClass('on');
            $('#step3 ul').eq(index).css({display:'flex'})
            $('#step3 ul').eq(index).siblings().css({display:'none'});
            
            step3height(index);
        }
       $('#step3').find('li.on').trigger('click');
    })
    
    //step3 tap
    function step3height(index){
        var s3h=$('#step3 ul').eq(index).css({display:'flex'}).height();
        $('#step3').stop().animate({height:s3h})
    }
    $('#step3 li').on('click',function(){
        var index=$(this).parent('ul').index();
        var $class=$(this).hasClass('open');
        var $$class=$(this).hasClass('on');
        var $$$class=$(this).siblings().hasClass('on');
        if($class){
            $(this).removeClass('open');
            $('#step4 ul').parent('#step4').stop().animate({height:0})
        }else{
            $(this).addClass('open').siblings().removeClass('open');
            $('#formCity').slideDown();
        }
        if($$class && $$$class){
            $('#step4 ul').eq(index).css({display:'flex'})
            step4height(index);
        }
        $('#step4 ul').eq(index).siblings().css({display:'none'});
        $('#step4').find('li.on').trigger('click');
    })
    
    //step4 tap
    function step4height(index){
        var s4h=$('#step4 ul').eq(index).css({display:'flex'}).height();
        $('#step4').stop().animate({height:s4h})
    }
    $('#step4 li').on('click',function(){
        var index=$(this).index();
        var $class=$(this).hasClass('on');
        if($class){
            $(this).removeClass('on');
            $('#step5').stop().animate({height:0})
        }else{
            $(this).addClass('on').siblings().removeClass('on');
            step5height();
        }
    })
    //step5 tap
    function step5height(){
        var s5ph=$('#step5 p').height();
        var s5ulh=$('#step5 ul').height();
        $('#step5').stop().animate({height:s5ph+s5ulh+20})
    }
    //offer slider
    $('.offerSlideBox').slick({
        autoplay: true,
        mobileFirst:true,
        arrows: false,
        dots: true,
        variableWidth: true,
        centerMode: true,
        slidesToShow: 1,
        speed: 2000,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: true,
                dots: false,
                variableWidth: true,
                centerMode: false,
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 1280,
              settings: {
                arrows: true,
                dots: false,
                variableWidth: true,
                centerMode: false,
                slidesToShow: 4,
              }
            }
          ]
    })  
    //banner
	$('.bannerSlide').slick({
		autoplay: true,
		arrows: true,
		mobileFirst:true,
	})
    
    //supportHeight
    /*function supportHeight(){
        var highest = $('.supportBox:nth-of-type(1) h2').height();
        $('.supportBox h2').css({height:highest*3})
        console.log(highest)
    }*/
    
	//award
	$('.awardSlide1').slick({
		autoplay: true,
		arrows: false,
		mobileFirst:true,
		variableWidth: true,
		autoplaySpeed: 0,
        cssEase: 'linear',
		speed: 4000,
		pauseOnHover:false,
	})
    //$('.awardSlide2').attr('dir', 'ltr');
    $('.awardSlide2').slick({
		autoplay: true,
		arrows: false,
		mobileFirst:true,
		variableWidth: true,
        cssEase: 'linear',
		autoplaySpeed: 0,
		speed: 4000,
		rtl: true,
        pauseOnHover:false,
	})
	//testimonial
	$('.testimonialSlider').slick({
		arrows: true,
		dots:true,
        variableWidth: true,
		autoplay: true,
		mobileFirst:true,
		speed: 1000,
		autoplaySpeed: 5000,
        responsive: [
            {
              breakpoint: 1280,
              settings: {
                dots: false,
              }
            }
        ]
	})
    //photo slide
    $('.photoSlide').slick({
		centerMode: true,
  		centerPadding: '40px',
		autoplay: true,
		variableWidth: true,
        mobileFirst:true,
    	infinite: true,
    	speed: 4000,
    	slidesToShow: 1,
		autoplaySpeed: 0,
		arrows: false,
    })
    
    //connect title height
    $(window).on('load resize',function(){
        windowWidth=$(this).width();
        connectTitle();
    })
    
    function connectTitle(){
        var titleHeight=parseFloat($('#connect>h1').css('font-size'));
        $('#app').css({paddingTop:titleHeight*4.5, paddingBottom:titleHeight*2})
        if(windowWidth < 768){
            $('#subscribe').css({paddingTop:titleHeight*2, paddingBottom:titleHeight*2})
        }else if(windowWidth => 960 && windowWidth < 1280){
			$('#subscribe').css({paddingTop:titleHeight*4.5, paddingBottom:titleHeight*2})
		}else if(windowWidth => 1280){
            $('#subscribe').css({paddingTop:titleHeight*1, paddingBottom:titleHeight*1})
        }
    }
    
})
