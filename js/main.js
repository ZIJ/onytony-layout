$('.jcarousel').each(function(){
	var carousel = $(this).jcarousel({
		wrap: 'circular'
	});
	var left = carousel.parents('.carousel').find('.jcarousel-prev');
	var right = carousel.parents('.carousel').find('.jcarousel-next');
	debugger;
	left.jcarouselControl({
		target: '-=1',
		carousel: carousel
	});
	right.jcarouselControl({
		target: '+=1',
		carousel: carousel
	});
});

