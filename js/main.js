$(document).ready(function () {

	$('.image-popup-fit-width').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        image: {
            verticalFit: false
        }
	});

	$('.image-popup-no-margins').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
    });

});

$(function () {

    $('.smooth').rlSmooth('slide', {
        y: 20, //ms default settings for vertical window position
        on: 200, // ms default settings effect speed
        off: 200 // ms default settings effect speed
    });
});
