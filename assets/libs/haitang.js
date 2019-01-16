$(function(){
	console.log('js load-->apeClass');
	$('#banner-canvas').height($(window).height() - $("#banner-canvas").offset().top);
	// $('#banner-canvas').children('canvas').height( $(window).height() - $("#banner-canvas").offset().top );
	$('#banner-canvas').children('canvas').height( $(window).height() - $("#banner-canvas").offset().top );

	$('#course-list-section').remove();
	// vip page
	$('.vip-item-list').parent().css({'border':'none'});
	
});
