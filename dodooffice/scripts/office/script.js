jQuery(function ($) {
	(function () {
		setInterval(function () {
			var widnowHeight = $(window).height();
			var sliderHeight = $(".hero-fullscreen").height();
			var padTop = widnowHeight - sliderHeight;
			$(".hero-fullscreen").css({
				'padding-top': Math.round(padTop / 2) + 'px',
				'padding-bottom': Math.round(padTop / 2) + 'px'
			});
		}, 10);
	}());
});