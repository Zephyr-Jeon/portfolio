$(function(){
    
	/*hamburgerMenu*/
    $('#hamburger').on('click',function(){
        $(this).toggleClass('on');
        $('#allMenu').stop().slideToggle(600);
    })
    
    //toTop
    $('#toTop').on('click',function(){
        $('body, html').animate({scrollTop:0})
    })
    
    /*subMenuHeight*/
    function subMenuSizingFunction(){
        var gnbHeight=$('#gnb').height();
        var windowHeight=$(window).height();
        var subMenuHeight=windowHeight - gnbHeight - 60;
        $('#subMenu').height(subMenuHeight);
    }
    /*menu sizing by scrolling*/
    subMenuSizingFunction();
    $(window).on('scroll',function(){
        var windowPos=$(window).scrollTop();
        console.log(windowPos);
        if(windowPos > 60){
            $('#gnb').css({height:'60px'});
            $('#gnbLogo').css({width:'134px'})
        }else if(windowPos == 0){
           $('#gnb').css({height:'calc(57.8125vh - 310px)'});
           $('#gnbLogo').css({width:'calc(39.0625vh - 116px)'})
        }
        subMenuSizingFunction()
    })
    
    /*subMenuControl*/
    $('#menuControl li').on('click',function(){
		var index=$(this).index();
		$('#subMenu').children('li').eq(index).addClass('on');
		$('#subMenu').children('li').eq(index).siblings().removeClass('on');
		
	})
    
    //subMenuDepth3
    $('#allMenuList li span').on('click',function(){
        $(this).parent('li').siblings().children('ul').stop().slideUp();
        $(this).siblings().stop().slideToggle();
    })
    
})