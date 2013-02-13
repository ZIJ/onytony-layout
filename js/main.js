(function(){

var currentProject = 0;

$('.jcarousel').each(function(){
	var carousel = $(this).jcarousel({
		wrap: 'circular'
	});
	var left = carousel.parents('.carousel').find('.jcarousel-prev');
	var right = carousel.parents('.carousel').find('.jcarousel-next');
	left.jcarouselControl({
		target: '-=1',
		carousel: carousel
	});
	right.jcarouselControl({
		target: '+=1',
		carousel: carousel
	});
});

$('.submenu a').each(function(index){
	var projects = $('.project');
	var current = $(projects[index]);
	$(this).click(function(e){
		e.preventDefault();
		$(projects[currentProject]).addClass('visuallyhidden');
		$(projects[index]).removeClass('visuallyhidden');
		currentProject = index;
	});
});

}());
