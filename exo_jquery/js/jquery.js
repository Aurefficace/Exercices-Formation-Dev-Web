$(document).ready(function(){

	$("p").click(function(){
		$(this).hide();
	});
	$("#button_appear").click(function(){
		$("p").show();
	});
	$("#pop_up").click(function(){
		$(".pop_up_appear").slideDown(1000);
	})
	$("#close").click(function(){
		$(".pop_up_appear").slideUp(1000);
	})












});