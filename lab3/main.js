function green() {
	if ($("#box1").attr("checked") != "checked")
	{
		$("#q").css("border", "3px solid green");
	}
}

function red() {
	if ($("#box2").attr("checked") != "checked")
	{
		$("#w").css("border", "3px solid red");
	}
}

function blue() {
	if ($("#box3").attr("checked") != "checked")
	{
		$("#e").css("border", "3px solid blue");
	}
}
