var numberRegex = /^[-+]?[\d]*([\.][\d]*)?$/;

function NumberTest(){
  this.inputValue = document.getElementById('user_input').value;
  this.resultBox = document.getElementById('result');
}

NumberTest.prototype.isValid = function() {
  return numberRegex.test(this.inputValue);
}

NumberTest.prototype.validate = function(event) {
  this.result = this.isValid();
  if (!this.result) {
    alert("Please Enter Numeric Value");
    event.preventDefault();
  }
}

NumberTest.prototype.displayResult = function() {
  this.resultBox.value = this.result;
}

window.onload = function() { 
  var numericForm = document.getElementById('numeric_input');
  numericForm.addEventListener('submit', function(event) {
    var numberTest = new NumberTest();
    numberTest.validate(event);
    numberTest.displayResult();
  });
}