$(document).ready(function() {

	$('.block').hover(function() {
		if ( $('.overlay') ) {
			$('.block').hover(function() {
				$('.overlay').toggleClass('animated bounce');
			});
		}
	});

});
