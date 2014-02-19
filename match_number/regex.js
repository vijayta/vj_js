
function SetInfo(){
  var number = document.getElementById('number').value;
  this.number = ValidNumber(number);
  return this.number;
}

function ValidNumber(value){
  return /^\d+(?:\.\d{1,2})?$/.test(value);
}

SetInfo.prototype.DispInfo=function (){
  var result = document.getElementById('result');
  result.value = this.number;
  if(this.number==true){
    alert("Form Submitted");
  }
  else{
    alert("Please Enter Numeric Value");
  }
}

window.onload = function(){ 
  var submit = document.getElementById('submit');
  submit.addEventListener('click', function() {
    var u = new SetInfo();
    u.DispInfo();
  });
}