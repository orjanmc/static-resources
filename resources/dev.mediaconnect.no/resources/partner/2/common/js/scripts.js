$(document).ready(function() {
	$('#openMe').on('click', function(){
		$('.bodyFooter').toggleClass("open");
	});
	
	$('.formHeader').click(function() {
		history.back();
		return false;
   });
});
