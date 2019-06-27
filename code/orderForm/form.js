// Change date format. Will be changed
Date.prototype.toDateInputValue = (function() {
    var local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0,10);
});

// Update date. Will be changed
document.getElementById('datePicker').value = new Date().toDateInputValue();


$(document).ready(function() { 
	$(".addComment").on("click", () => {
		$("#showArea").toggle();
});

	// Need to change switch. I think about it
	$(".take-yourself").on("click", () => {
		$(".formWrap > *:not(#showArea)").show();
		$(".block-hide").hide();
		$(".phoneDiv").css("width", "308px");
		$(".deliveryInfo").css({
			width: "140px",
			paddingRight: "0"
	});
	
});

 	$(".courier-delivery").on("click", () => {
		$(".takeFrom").hide();
		$(".formWrap > *:not(.takeFrom, #showArea)").show();
		$(".phoneDiv").css("width", "308px");
		$(".deliveryInfo").css("width", "200px");
	 });

 	$(".infoByCall").on("click", () => {
 		$(".formWrap > *:not(.phoneDiv, .block1)").hide();
 		$(".phoneDiv").css("width", "100%");
 	})

});
