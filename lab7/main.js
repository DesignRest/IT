$(function() {
$(".image").css("opacity","0.5");
$(".image").hover(function () {
$(this).stop().animate({
opacity: 1.0
}, "slow");
},

function () {
$(this).stop().animate({
opacity: 0.5
}, "slow");
});
});
   