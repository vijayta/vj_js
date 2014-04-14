function Choice() {
  this.selectOptions = document.getElementsByName('mainList');
  this.init();
}

Choice.prototype.userInput = function(element) { 
  this.element = document.getElementById(element);
  if (this.element.checked) {
    for (var i = 0; i < 4; i++) {
      if (this.selectOptions[i].checked) {
        // this.selectOptions[i].parentNode.setAttribute('class', 'notActive');
        this.element.checked = true; 
        this.element.parentNode.setAttribute('class', 'active')
        this.element.scrollIntoView(true);
      }
    }
  }
  else {
    this.element.parentNode.setAttribute('class', 'notActive')
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