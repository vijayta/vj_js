function Choice() {
  this.list = document.getElementsByTagName('input');
  this.init();
}

Choice.prototype.userInput = function(element) { 
  this.element = document.getElementById(element);
  for(var i = 0; i < this.list.length; i++){
    var checkItem = this.list[i].getAttribute('data-type');
    if(this.element.checked){
      this.element.parentNode.setAttribute('class', 'active');
      if (checkItem == this.element.getAttribute('data-type')) {
        this.list[i].checked = true;
      }
      else{
        this.list[i].checked = false
      }
    }
    else{
      this.element.parentNode.setAttribute('class', 'notActive');
       this.list[i].checked = false
    }
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