// With JQuery
$("#sliderbarHorizontal").slider({
	min: -1,
	max: 1,
	value: 0,
	tooltip_position:'bottom'
});
$("#sliderbarVertical").slider({
	min: -1,
	max: 1,
	value: 0,	
	tooltip_position:'bottom'
	
});

$("#sliderbarHorizontal").on("slide", function(slideEvt) {
	$("#sliderbarHorizontalValue").text(slideEvt.value);
});
$("#sliderbarVertical").on("slide", function(slideEvt) {
	$("#sliderbarVerticalValue").text(slideEvt.value);
});

