$(function(){
    /*formular*/
    $('.formular li').on('mouseenter',function(){
        var dataHover=$(this).attr('data-hover')
        console.log(dataHover)
        $(this).children('img').attr({src:dataHover})
    })
    $('.formular li').on('mouseleave',function(){
        var imgOriginal=$(this).attr('data-original')
        console.log(imgOriginal)
        $(this).children('img').attr({src:imgOriginal})
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
	
	
	$('.lnb-contents>li').on('click',function(e){
		e.preventDefault();
        var lnbIndex=$(this).index();
        var scrollPos=$('section').eq(lnbIndex).offset().top;
        $('html, body').animate({scrollTop : scrollPos}, 400);
    })
	
})