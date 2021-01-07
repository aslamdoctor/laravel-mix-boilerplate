import 'bootstrap';
import 'slick-carousel';

// On Dom Ready
$(function () {
	// toggle hamburget menu
	$('.menu-open').on('click', function (e) {
		e.preventDefault();
		$(this).toggleClass('is-active');
	});
});

// After page loaded completely
$(window).on('load', function () {});
