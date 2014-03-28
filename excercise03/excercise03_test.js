var none = document.getElementById("none").checked;
var inputs = document.weekdays.getElementsByTagName("input");

function CheckSelect(){
}

CheckSelect.prototype.clickSelect = function() {  
  none.checked = false;
  var array = [];
  for (var i = 0, len = inputs.length; i < len-1; i++) {
    if (inputs[i].type == "checkbox" && inputs[i].checked){
      onClickSelect.count = onClickSelect.count + 1;
      if(onClickSelect.count <= 3){
        array[i] = inputs[i].id;
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
  var inputs =  document.weekdays.getElementsByName('list');
  none.checked = true;
  for (i = 0, len = inputs.length; i < len && inputs[i].id != "none"; i++) {
      document.getElementById(inputs[i]).checked=false;
  }  
}

function checkDays(){
  this.onClickSelect = onClickSelect;
  onClickSelect.count = 0;
  this.onClickNone = onClickNone;
  none.checked = true;
}

window.onload = function() { 
  none.addEventListener('click', function() {
    var uncheckoperation = new checkDays();
    uncheckoperation.onClickNone();
  });
  
  
  for(var i = 0; i < inputs.length; i++){
    inputs[i].addEventListener('click', function() {
      var check_limit = new checkDays();
      check_limit.onClickSelect();   
    });
  }
}