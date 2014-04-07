function Choice() {
  this.selectedOption = document.getElementsByName('mainList');
  this.init();
}

Choice.prototype.userInput = function(element) {
  for (var i = 0; i <= this.selectedOption.length; i++) {
    
    this.element = document.getElementById(element);
    if (this.element.checked == false) {
      this.element.parentNode.setAttribute('class', 'notActive');
    }
    else {
      this.element.parentNode.setAttribute('class', 'active')
      this.element.scrollIntoView(true);
    }
  }
}

Choice.prototype.init = function() {
  var that = this;
  var userInput = document.getElementsByName('mainList');
  for(var i = 0; i < userInput.length; i++) {
    userInput[i].addEventListener('click', function(){
      var element = this.id;
      that.userInput(element);
    }
  )};  
}

window.onload = function(){
  var userChoice = new Choice();
}