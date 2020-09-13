$(function(){
	$('body a').on('click',function(e){
		e.preventDefault();
	})
    /*mainBanner*/
	var imgCarouselWidth=$('#mainBanner-imgCarousel li').width();
	var textCarouselHeight=$('#mainBanner-textCarousel li').height();
	
	$('#mainBanner-imgCarousel li').each(function(i){
		$(this).css({left:i*imgCarouselWidth});
		var leftPos=parseFloat($(this).css('left'));
		if(leftPos > imgCarouselWidth){
			$(this).css({left:-imgCarouselWidth})
		}else if(leftPos < -imgCarouselWidth){
			$(this).css({left:imgCarouselWidth})
		}
	})
	$('#mainBanner-textCarousel li').each(function(i){
		$(this).css({top:-i*textCarouselHeight})
		var topPos=parseFloat($(this).css('top'));
		if(topPos < -textCarouselHeight){
			$(this).css({top:textCarouselHeight})
		}else if(topPos > textCarouselHeight){
			$(this).css({top:-textCarouselHeight})
		}
	})

	$('#mainBanner-prev').on('click',function(){
		clearInterval(autoSlide)
		prevSlide();
		autoSlide=setInterval(function(){
		nextSlide();
		},4000)
	})
	function prevSlide(){
		$('#mainBanner-imgCarousel li').animate({left:'+='+imgCarouselWidth},1000,function(){
			var leftPos=parseFloat($(this).css('left'));
			if(leftPos > imgCarouselWidth){
				$(this).css({left:-imgCarouselWidth})
			}else if(leftPos < -imgCarouselWidth){
				$(this).css({left:imgCarouselWidth})
			}
		})
		$('#mainBanner-textCarousel li').animate({top:'-='+textCarouselHeight},1000,function(){
			var topPos=parseFloat($(this).css('top'));
			if(topPos < -textCarouselHeight){
				$(this).css({top:textCarouselHeight})
			}else if(topPos > textCarouselHeight){
				$(this).css({top:-textCarouselHeight})
			}
		})
	}
	
	
	$('#mainBanner-next').on('click',function(){
		clearInterval(autoSlide)
		nextSlide();
		autoSlide=setInterval(function(){
		nextSlide();
		},4000)
	})
	function nextSlide(){
		$('#mainBanner-imgCarousel li').animate({left:'-='+imgCarouselWidth},1000,function(){
			var leftPos=parseFloat($(this).css('left'));
			if(leftPos > imgCarouselWidth){
				$(this).css({left:-imgCarouselWidth})
			}else if(leftPos < -imgCarouselWidth){
			$(this).css({left:imgCarouselWidth})
		}
		})
		$('#mainBanner-textCarousel li').animate({top:'+='+textCarouselHeight},1000,function(){
			var topPos=parseFloat($(this).css('top'));
			if(topPos < -textCarouselHeight){
				$(this).css({top:textCarouselHeight})
			}else if(topPos > textCarouselHeight){
			$(this).css({top:-textCarouselHeight})
		}
		})
	}
	
	
	var autoSlide=setInterval(function(){
		nextSlide();
	},4000)
    /*bestSeller*/
    /*producType01-component*/
	$('.productType01').on('mouseenter',function(){
        $(this).children('a').addClass('on');
        $(this).siblings('li').children('a').removeClass('on');
        $(this).children('a').children('img').stop().animate({top:-24})
        $(this).children('div').stop().slideDown();
        
    })
    $('.productType01').on('mouseleave',function(){
        $(this).children('a').removeClass('on');
        $(this).children('a').children('img').stop().animate({top:0})
        $(this).children('div').stop().slideUp();
    })
    
    /*concernTab*/
/*    $('.concernTapArea>li').each(function(i){
        $(this).children('a.skinConcern').css({left:(i)*1256/5})
        
    })*/
    $('.skinConcern').on('click',function(e){
        e.preventDefault();
        $(this).parent().addClass('on')
        $(this).parent().siblings().removeClass('on')
        var index=$(this).parent().index();
        $('.concernTapBox').eq(index).show();
        $('.concernTapBox').eq(index).siblings().hide();
    })
	
	
    $('.productType02').on('mouseenter',function(){
        $(this).children('a').addClass('on');
        $(this).siblings('li').children('a').removeClass('on');
        $(this).children('a').children('img').stop().animate({top:-24})
        $(this).children('div').stop().slideDown();
        
    })
    $('.productType02').on('mouseleave',function(){
        $(this).children('a').removeClass('on');
        $(this).children('a').children('img').stop().animate({top:0})
        $(this).children('div').stop().slideUp();
    })
    
    /*youMayAlsoLike*/
    $('.youMayAlsoLike .productType02').each(function(e){
            $(this).css({left:(e-3)*324})
        })
    setInterval(function(){
        $('.youMayAlsoLike .productType02').stop().animate({left:'-=324'},1000,function(){
            for(var i=0; i<10; i++){
            var leftPos=parseFloat($('.youMayAlsoLike .productType02').eq(i).css('left'))
            if( leftPos < -324*3){
                $('.youMayAlsoLike .productType02').eq(i).css({left:324*6});
                }
            }
        });
        
    },3000)
    /*belifNews*/
    $('.videoPostOff>li').on('mouseenter',function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        var index=$(this).index();
        $('.videoPostOn>li').eq(index).addClass('active');
        $('.videoPostOn>li').eq(index).siblings().removeClass('active');
        
    })
})