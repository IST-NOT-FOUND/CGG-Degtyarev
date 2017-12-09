
$('#R').slider();
$("#R").on("slide", function(slideEvt) {
	$("#redSlider").text(slideEvt.value);
});
$('#G').slider();
$("#G").on("slide", function(slideEvt) {
	$("#greenSlider").text(slideEvt.value);
});
$('#B').slider();
$("#B").on("slide", function(slideEvt) {
	$("#blueSlider").text(slideEvt.value);
});