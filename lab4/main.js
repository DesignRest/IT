function color(){
	$("#btn").css("background", "gray");
	$("#btn").css("color", "white");
	let w = $("button").width();
	let h = $("button").height();
	$("button").width(w*=2);
	$("button").height(h*=2);  
}