window.onload = function() {
    document.getElementById("search-input").focus();
  };
var input = document.getElementById ("search-input");
input.focus(); //sets focus to element
var val = this.input.value; //store the value of the element
this.input.value = ''; //clear the value of the element
this.input.value = val; //set that value back.  