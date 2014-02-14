function onCheck(id){
  this.id=id;
  inputs = document.weekdays.getElementsByTagName("input");
  
}
onCheck.prototype.checkLimit = function(val){  
  var val = val;
  document.getElementById("none").checked = false;
  var i, len;
  var array = [];
  var count = 0; 
  for (i = 0, len = inputs.length; i < len; i++) {
    if (inputs[i].type == "checkbox" && inputs[i].checked){
      count = count + 1;
      if(count <= val){
        array[i] = inputs[i].id;
      }
      else{
        document.getElementById(inputs[i].id).checked=false;
        var text = array.join(" ");
        alert("Only 3 days can be selected. You have already selected : " + text);
        return false;
      }
    }
  }
}

function onClickNone(){
  var inputs =  document.weekdays.getElementsByTagName("input");
  for (i = 0, len = inputs.length; i < len; i++) {
    if(inputs[i].id != "none"){
      document.getElementById(inputs[i].id).checked=false;
    }
  }  
}

window.onload=function(){ 
  var none = document.getElementById('none');
  none.addEventListener('click', function() {
    onClickNone()
  });
  
  var inputs = document.weekdays.getElementsByTagName("input");
  for(var i = 0; i < inputs.length; i++){
    inputs[i].addEventListener('click', function() {
      var check_limit = new onCheck(this.id);
      check_limit.checkLimit(3)
    });
  }
}