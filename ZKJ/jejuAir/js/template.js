$(function(){
	/*hamburerContorl*/
	$('#hamburgerBtn').on('click',function(){
		var close=$(this).hasClass('close');
		var back=$(this).hasClass('back');
		if(back){
			$(this).removeClass('back');
			$('#gnbContentsBox').stop().animate({left:'100%'},function(){
			$('.gnbContents').removeClass('on')
			})
		}else if(close){
			$(this).removeClass('close');
			$('nav').removeClass('on');
			$('#utilContents li').stop().delay(400).slideUp();
		}else{
			$(this).addClass('close');
			$('nav').addClass('on')
		}
	})
	/*gnbContent below 768*/
	$(window).on('resize load',function(){
		var winWidth=parseFloat($(window).width());
		if(winWidth < 768){
			$('#gnbContentsBox').css({top:'calc(120px - 100vh)', left:'100%', opacity:1})
		}else{
            $('#gnbContentsBox').css({top:0, left:0,opacity:1})
        }
	})
	$('#gnbTap li').on('click',function(){
		var index=$(this).index();
		var winWidth=parseFloat($(window).width());
		console.log(winWidth)
		if(winWidth < 768){
			$('#hamburgerBtn').addClass('back');
			$('#gnbContentsBox').css({top:'calc(120px - 100vh)', left:'100%'})
			$('.gnbContents').eq(index).siblings().removeClass('on')
			$('.gnbContents').eq(index).addClass('on')
			$('#gnbContentsBox').stop().animate({left:0})
		}else if(winWidth > 768){
			$('.gnbContents').eq(index).siblings().removeClass('on')
			$('.gnbContents').eq(index).addClass('on')
      $(this).addClass('on');
      $(this).siblings().removeClass('on');
		}
	})
	$('#utilTap li').on('click',function(){
		var index=$(this).index();
		$('#utilContents li').eq(index).siblings().hide();
		$('#utilContents li').eq(index).stop().slideToggle();
	})
  /*gnbslide*/
	$('#gnbSlide').slick({
		autoplay: true,
    	infinite: true,
    	speed: 3000,
    	slidesToShow: 1,
		centerMode: true,
    	variableWidth: true,
		autoplaySpeed: 0,
		arrows: false,
    });
})