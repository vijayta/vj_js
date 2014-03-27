var number_regex = /^[-+]?[\d]*(\.\d)*$/;

function UserInput(){
  this.input = document.getElementById('user_input').value;
}

UserInput.prototype.isValidNumber = function(value) {
  return number_regex.test(value);
}

UserInput.prototype.validateInfo = function(event) {
  this.user_value = this.isValidNumber(this.input);
  if (!this.user_value) {
    alert("Please Enter Numeric Value");
    event.preventDefault();
  }
}

UserInput.prototype.dispInfo = function() {
  var result = document.getElementById('result');
  result.value = this.user_value;
}

window.onload = function() { 
  var numeric_form = document.getElementById('numeric_input');
  numeric_form.addEventListener('submit', function(event) {
    var u = new UserInput();
    u.validateInfo(event);
    u.dispInfo();
  });
}