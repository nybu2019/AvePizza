Date.prototype.toDateInputValue = (function() {
    var local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0,10);
});

document.getElementById('datePicker').value = new Date().toDateInputValue();


function openbox(showArea) {
    display = document.getElementById('showArea').style.display;

    if (display =='none') {
       document.getElementById('showArea').style.display ='block';

    } else {
       document.getElementById('showArea').style.display ='none';
    }

}

