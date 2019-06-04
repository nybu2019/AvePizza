// Change date format
Date.prototype.toDateInputValue = (function() {
    var local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0,10);
});

// Update date
document.getElementById('datePicker').value = new Date().toDateInputValue();
let displayArea = false;


document.getElementsByClassName('addComment')[0].onclick = function() {
    document.getElementById('showArea').style.display = displayArea ? "none" : "block";
    displayArea = !displayArea;
    // need .formwrap height += .showarea heigth
};

$(document).ready(function() { 

	$(".take-yourself").on("click", () => {
	$(".block-hide").hide();
	$(".formWrap").css("height", "420px");
})

 	$(".courier-delivery").on("click", () => {
	$(".block-hide").show();
	$(".formWrap").css("height", "650px");
	
	 })

});
