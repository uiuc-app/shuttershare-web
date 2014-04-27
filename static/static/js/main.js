$(function() {
    $('.jcarousel').jcarousel({
        // Configuration goes here
        wrap: 'both'
    }).jcarouselAutoscroll({
    	interval: 3000,
    	target: '+=1',
    	autostart: true
    });
});