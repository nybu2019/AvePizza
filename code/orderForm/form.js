Date.prototype.toDateInputValue = (function() {
    var local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0,10);
});

document.getElementById('datePicker').value = new Date().toDateInputValue();
let displayArea = false;

document.getElementsByClassName('addComment')[0].onclick = function() {
    document.getElementById('showArea').style.display = displayArea ? "none" : "block";
    displayArea = !displayArea;
};