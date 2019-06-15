// Change date format. Will be changed
Date.prototype.toDateInputValue = (function() {
    var local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0,10);
});

// Update date. Will be changed
document.getElementById('datePicker').value = new Date().toDateInputValue();


$(document).ready(function() { 
	// need .formWrap height += .showArea height
	$(".addComment").on("click", () => {
	$("#showArea").toggle();
});

	// Need to change switch. I think about it
	$(".take-yourself").on("click", () => {
	$(".block-hide").hide();
	$(".takeFrom").show();
	
	$(".deliveryInfo").css({
		width: "140px",
		paddingRight: "0"
	});

	$(".formWrap").css("height", "420px");
});

 	$(".courier-delivery").on("click", () => {
	$(".block-hide").show();
	$(".takeFrom").hide();
	$(".deliveryInfo").css("width", "200px");
	$(".formWrap").css("height", "650px");
	
	 });

});
