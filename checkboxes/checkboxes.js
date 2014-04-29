function Choice() {
  this.selectOptions = document.getElementsByName('mainList');
  this.init();
}

Choice.prototype.userInput = function(element) { 
  this.element = document.getElementById(element);
  if (this.element.checked) {
    for (var i = 0; i < 4; i++) {
      if (this.selectOptions[i].checked) {
        this.element.checked = true; 
        this.element.parentNode.setAttribute('class', 'active');
        var parentElmnt = (this.element.parentNode.getAttribute('class'));
        var subList = this.element.parentNode.getElementsByTagName('ul')[0].getElementsByTagName('input');

        if(parentElmnt == 'active'){
          for(var x = 0; x < subList.length; x++){
            subList[x].checked = true;
          }  
        }
        else{
          subList[x].checked = false;
        }
      }
    }
  }
  else {
    this.element.parentNode.setAttribute('class', 'notActive');
  }
}

Choice.prototype.init = function() {
  var that = this;
  var userInput = document.getElementsByName('mainList');
  for(var i = 0; i < userInput.length; i++) {
    userInput[i].addEventListener('click', function() {
      var element = this.id;
      that.userInput(element);
    }
  )};  
}

window.onload = function(){
  var userChoice = new Choice();
}