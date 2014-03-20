
var number_regex = /^\d+(?:\.\d{1,2})?$/;

function UserInfo(){
  this.input = document.getElementById('user_input').value;
}

UserInfo.prototype.validNumber =function(value){
  return number_regex.test(value);
}

UserInfo.prototype.validateInfo = function(){
  this.user_value = this.validNumber(this.input);
  if(this.user_value){
    alert("Form Submitted");
  }
  else{
    alert("Please Enter Numeric Value");
  }
}

UserInfo.prototype.dispInfo = function (){
  var result = document.getElementById('result');
  result.value = this.user_value;
}

window.onload = function(){ 
  var submit = document.getElementById('submit');
  submit.addEventListener('click', function() {
    var u = new UserInfo();
    u.validateInfo();
    u.dispInfo();
  });
}