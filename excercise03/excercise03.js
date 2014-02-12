function onCheck(id){
  this.id=id;
  var i, len, inputs;
  var count = 0;
  var array = [];
  var inputs = document.weekdays.getElementsByTagName("input");
  document.getElementById("none").checked = false;
  for (i = 0, len = inputs.length; i < len; i++) {
    if (inputs[i].type == "checkbox" && inputs[i].checked){
      count = count+1;
      if(count < 4){
        array[i] = inputs[i].id;
      }
      else{
        document.getElementById(inputs[i].id).checked=false;
        alert("Only 3 days can be selected. You have already selected : "+array);
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
      onCheck(this.id) 
    });
  }
}