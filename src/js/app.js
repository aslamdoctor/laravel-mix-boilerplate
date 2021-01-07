import 'bootstrap';
import 'slick-carousel';

setTimeout(() => {
	$('h1').text('Text Changed using jQuery');
}, 5000);

// Slider
$('.slider').slick({
	autoplay: true,
	autoplaySpeed: 3000,
	dots: false,
	arrows: true,
	infinite: true,
	speed: 300,
	slidesToShow: 3,
	slidesToScroll: 3,
	adaptiveHeight: true,
	prevArrow: '<button type="button" class="slick-prev">Previous</button>',
	nextArrow: '<button type="button" class="slick-next">Next</button>',
	responsive: [
		{
			breakpoint: 769,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
			},
		},
		{
			breakpoint: 579,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
	],
});
