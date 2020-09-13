$(function(){
    /*lnb*/
    var windowHight=$(window).height;
    $('.lnb-allProducts .lnb-allProducts-on').height(windowHight);
    
    $('.lnb-allProducts-off').on('mouseenter',function(){
        $('.lnb-allProducts-on').stop().animate({left:0})
    })
    $('.lnb-allProducts-on').on('mouseleave',function(){
        $('.lnb-allProducts-on').stop().animate({left:-222})
    })
    
    $('.lnb-allProducts-on>li').on('click',function(){
        var lnbIndex=$(this).index();
        var scrollPos=$('.allProducts-bycategory>div').eq(lnbIndex).offset().top;
        $('html, body').animate({scrollTop : scrollPos}, 400);
    })
    
    
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
})

