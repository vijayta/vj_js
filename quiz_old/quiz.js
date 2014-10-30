var numberRegex = /^[-+]?[\d]*([\.][\d]*)?$/;
function Quiz(){
  this.firstValue = document.getElementById('value01');
  this.secondValue = document.getElementById('value02');
  this.optField = document.getElementById('operator');
  this.reply = document.getElementById('reply');
  this.submit = document.getElementById('submit'); 
  this.jsonArray = [];
  this.init();
}
Quiz.prototype.setValue = function(){
  this.firstValue.value = Math.floor((Math.random() * 20) + 1);
  this.secondValue.value = Math.floor((Math.random() * 20) + 1);
}
Quiz.prototype.setOperator = function() {
  var operators = ['+','-','*','/'];
  setOpt = operators[Math.floor(Math.random()*4)];
  this.optField.value = setOpt;
}
Quiz.prototype.getAllValues = function() {
  this.firstValue = this.firstValue.value;
  this.opt = this.optField.value;
  this.secondValue = this.secondValue.value;
  alert(this.firstValue + " " + this.opt + " " + this.secondValue + " = " + this.reply.value);
}
Quiz.prototype.pushValue = function(){
  for(var i = 0; i < 20; i++){
    this.jsonArray = jsonArray.push(this.secondValue);
  }
}
Quiz.prototype.isValid = function() {
  
  // return numberRegex.test(this.reply.value);
}
Quiz.prototype.validate = function(event) {
  alert(this.reply.value = this.isValid());
  // if (!this.reply.value) {
  //   alert("Please Enter Numeric Value");
  //   event.preventDefault();
  // }
}
Quiz.prototype.init = function(event) {
  this.submit.addEventListener('click', function() {
    var autoComplete = new Quiz();
    autoComplete.validate();
    autoComplete.getAllValues();
  });  
}

window.onload = function() {
  var autoComplete = new Quiz();
  autoComplete.setValue();
  autoComplete.setOperator();
  
}