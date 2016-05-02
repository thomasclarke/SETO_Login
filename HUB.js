function main() {
	$("#guestButton").click(function() {
		window.location.href = "http://github.com";
		});
	
	$("#userButton").click(function() {
		$("#uMenu").toggle();
		});
	
	$("#uEntr").click(function(){
		$("#uMenu").toggle();
	});
	
	$("#signUp").click(function() {
		$("#sMenu").toggle();
	});
	
	$("#sEntr").click(function() {
		$("#sMenu").toggle();
	});
	
};

$(document).ready(main);