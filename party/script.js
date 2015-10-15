var counter = 0;
var colors = [
    "red",
	"orange",
	"yellow",
    "green",
	"blue",
	"violet"];
var interval;

$(document).ready(function () {
    interval = window.setInterval(changeColor, 1000); //set the interval of 1 sec for image to change while hovered.
});

function changeColor() {
    var color = colors.shift();
    colors.push(color);
    $('body').css({"background-color": color});

}