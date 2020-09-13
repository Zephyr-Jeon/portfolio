$(function(){
    //menu_area height
    var heightWindow=$(window).height();
    $('#menu_area').height(heightWindow);
    $('.menu_depth2').height(heightWindow);
    
    //hamburger
    $('#hamburger_icon').on('click',function(e){
		e.preventDefault();
        $(this).toggleClass('on')
        var has=$(this).hasClass('on')
        if(has){
            $('#menu_area').stop().delay(300).slideDown();
            $('.menu_depth2').css({display:'block'})
        }else{
            $('.menu_depth1>li').removeClass('on')
            $('#menu_area').stop().animate({left:0},function(){
                $('.menu_depth2').delay(4000).css({display:'none'})
            $('#menu_area').slideUp();
            })
            
            
        }
    })
    
    //menu_on
    $('.menu_depth1>li>a').on('click',function(){
        var has=$(this).parent('li').hasClass('on')
        if(has){
             $('#menu_area').stop().animate({left:0},function(){
                $('.menu_depth1>li>a').parent('li').removeClass('on')
             })
           
        }else{
            $(this).parent('li').addClass('on')
            $(this).parent('li').siblings().removeClass('on')
            $(this).parent('li').children('.menu_depth2').css({display:'block'})
            $(this).parent('li').siblings().children('.menu_depth2').css({display:'none'})
            $('#menu_area').stop().animate({left:'-500px'})
        }
    })
    //menu_language&currency_on
    $('.country label input').on('click',function(){
        var has=$(this).parent('label').hasClass('on');
        console.log(has)
        if(has){
            $(this).parent('label').removeClass('on')
        }else{
            $(this).parent('label').addClass('on')
            $(this).parent('label').siblings().removeClass('on')
        }
    })
	//gnb
	$('.gnb_depth1>li>div>a').on('mouseenter',function(){
		var index=$(this).parent('div').parent('li').index()
		function gnbSlide(){
			$(this).children('.gnb_depth2').stop().slideDown();
			$(this).siblings().children('.gnb_depth2').hide();
		}
		if(index==4){
			$('#gnb_bg_search').stop().slideDown(600);
			$('#gnb_bg').hide()
			$(this).parent('div').addClass('on')
			$(this).parent('div').parent('li').siblings().children('div:first-child').removeClass('on')
			$(this).parent('div').next().stop().slideDown(600);
			$(this).parent('div').parent('li').siblings().children('.gnb_depth2').hide();
			gnbSlide()
		}else{
			$('#gnb_bg').stop().slideDown(600);
			$('#gnb_bg_search').hide()
			$(this).parent('div').addClass('on')
			$(this).parent('div').parent('li').siblings().children('div:first-child').removeClass('on')
			$(this).parent('div').next().stop().slideDown(600);
			$(this).parent('div').parent('li').siblings().children('.gnb_depth2').hide();
			gnbSlide()
		}
		$('.gnb_depth1').on('mouseleave',function(){
			$('.gnb_depth1>li>div').removeClass('on')
			$('#gnb_bg_search').stop().slideUp()
			$('#gnb_bg').stop().slideUp()
			$('.gnb_depth2').stop().slideUp();
		})
		
		
	})
	//toTop
	$(window).on('scroll',function(e){
        e.preventDefault();
		var scrollPos=$(document).scrollTop();
		var floatPos=parseFloat(scrollPos);
		if(floatPos >= 80){
			$('#toTop').stop().animate({right:'48px'})
		}else{
			$('#toTop').stop().animate({right:'-48px'})
		} 
	})
    $('#toTop').on('click',function(){
            $('html, body').animate({scrollTop : 0}, 400)
        })
    
    
	//footer
	$('#siteMap a').on('click',function(e){
        e.preventDefault();
		$(this).toggleClass('on')
		$(this).parent('#siteMap').next().stop().slideToggle()
	})
	
	$('document a').on('click',function(e){
		e.preventDefault();
	})

})