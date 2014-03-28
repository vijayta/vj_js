var numberRegex = /^[-+]?[\d]*([\.][\d]*)?$/;

function UserInput(){
  this.input = document.getElementById('user_input').value;
}

UserInput.prototype.isValidNumber = function(value) {
  return numberRegex.test(value);
}

UserInput.prototype.validateInfo = function(event) {
  this.userValue = this.isValidNumber(this.input);
  if (!this.userValue) {
    alert("Please Enter Numeric Value");
    event.preventDefault();
  }
}

UserInput.prototype.dispInfo = function() {
  var result = document.getElementById('result');
  result.value = this.userValue;
}

window.onload = function() { 
  var numericForm = document.getElementById('numeric_input');
  numericForm.addEventListener('submit', function(event) {
    var u = new UserInput();
    u.validateInfo(event);
    u.dispInfo();
  });
}