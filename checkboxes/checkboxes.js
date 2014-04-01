function Choice() {
  this.selectedOption = document.getElementsByName('mainList');
}

Choice.prototype.userInput = function(ID) {
  this.id = ID;
  for(var count = 1; count <= this.selectedOption.length; count++){
    if (document.getElementById('item' + count).id != this.id) {
      document.getElementById('item' + count).checked = false;
      this.selectedOption[count-1].parentNode.setAttribute('class', 'notActive')
    }
    else{
      document.getElementById('item' + count).checked = true;
      this.selectedOption[count-1].parentNode.setAttribute('class', 'active')
    }
  }
}

Choice.prototype.output = function() {
  var that = this;
  var userInput = document.getElementsByTagName('input');
  for(var i = 0; i < userInput.length; i++) {
    userInput[i].addEventListener('click', function(){
      that.userInput(this.id);
    }
  )};  
}

window.onload = function(){
  var userChoice = new Choice();
   userChoice.output();
}