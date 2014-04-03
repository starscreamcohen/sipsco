$(document).ready(function(){
	$('#price-wrapper').on('keyup', '.quantity', function() {
	//Get the price for blocks
		var price = +$(this).closest('#price-wrapper').data('price');
		//Get the quantity of blocks enter
		var quantity = +$(this).val();
		//Set the total of blocks * price
		$('#total').text(price * quantity);

});
});