$(window).scroll(function(){
	if($('.navbar').offset().top > 50){
		$('.navbar-fixed-top').addClass('top-nav-collapse');
	} else {
		$('.navbar-fixed-top').removeClass('top-nav-collapse');
	}
});

$(function(){
	$('.page-scroll a').bind('click', function(){
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1500, 'easeInOutExpo');
		event.preventDefault();
	});
});

$(function () {
	$(".goliath-container").slice(0, 6).show();
	$("#loadMore").on('click', function (e) {
		e.preventDefault();
		$(".goliath-container:hidden").slice(0, 4).slideDown();
		if ($(".goliath-container:hidden").length == 0) {
			$("#load").fadeOut('slow');
		}
		$('html,body').animate({
			scrollTop: $(this).offset().top
		}, 1500);
	});
});

$('a[href=#top]').click(function () {
	$('body,html').animate({
		scrollTop: 0
	}, 600);
	return false;
});

$(window).scroll(function () {
	if ($(this).scrollTop() > 50) {
		$('.totop a').fadeIn();
	} else {
		$('.totop a').fadeOut();
	}
});

jQuery(document).ready(function($) {  
	
	// site preloader -- also uncomment the div in the header and the css style for #preloader
	$(window).load(function(){
		$('#preloader').fadeOut('slow',function(){$(this).remove();});
	});

});

$(document).ready(function(){
	$('.venobox').venobox(); 
});

$('.main-carousel').flickity({
	// options
	cellAlign: 'left',
	contain: true,
	freeScroll: true,
	wrapAround: true
});