function CheckSelect(){
  this.none = document.getElementById("none").checked;
  this.inputs = document.weekdays.getElementsByTagName("input");
}

CheckSelect.prototype.clickSelect = function() {  
  this.none.checked = false;
  var array = [];
  for (var i = 0, len = this.inputs.length; i < len-1; i++) {
    if (this.inputs[i].type == "checkbox" && this.inputs[i].checked){
      onClickSelect.count = onClickSelect.count + 1;
      if(onClickSelect.count <= 3){
        array[i] = this.inputs[i].id;
      }
      else{
        document.getElementById(inputs[i].id).checked=false;
        alert("Only 3 days can be selected. You have already selected : " + array);
        return false;
      }
    }
  }
}

CheckSelect.prototype.ClickNone = function(){
  this.none.checked = true;
  for (i = 0, len = this.inputs.length; i < len && this.inputs[i].id != "none"; i++) {
      document.getElementById(this.inputs[i]).checked = false;
  }  
}



window.onload = function() { 
  none.addEventListener('click', function() {
    var uncheckoperation = new checkDays();
    uncheckoperation.onClickNone();
  });
  
  
  for(var i = 0; i < inputs.length; i++){
    this.inputs[i].addEventListener('click', function() {
      var check_limit = new checkDays();
      check_limit.onClickSelect();   
    });
  }
}