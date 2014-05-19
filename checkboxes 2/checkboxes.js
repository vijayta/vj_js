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
      if (checkItem == this.element) {
        // console.log(checkItem);
        checkItem.checked = true;
      }
      else{
        checkItem.checked = false
        console.log(checkItem == this.element);
      }
    }
    else{
      this.element.parentNode.setAttribute('class', 'notActive');
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