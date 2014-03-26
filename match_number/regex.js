var number_regex = /^\d+(?:\.\d{1,2})?$/;

function UserInput(){
  this.input = document.getElementById('user_input').value;
}

UserInput.prototype.isValidNumber = function(value){
  return number_regex.test(value);
}

UserInput.prototype.validateInfo = function() {
  this.user_value = this.isValidNumber(this.input);
  if((!this.user_value) || (!this.user_value < 0)){
    alert("Please Enter Numeric Value");
  }
  else{
    alert("Form Submitted");
  }
}

UserInput.prototype.dispInfo = function() {
  var result = document.getElementById('result');
  result.value = this.user_value;
}

window.onload = function(){ 
  var numeric_form = document.getElementById('numeric_input');
  numeric_form.addEventListener('submit', function]=[] {
    numeric_form.preventDefault();
    var u = new UserInput();
    u.validateInfo();
    u.dispInfo();
  });
}