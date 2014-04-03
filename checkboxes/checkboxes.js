function Choice() {
  this.selectedOption = document.getElementsByName('mainList');
  this.init();
}

Choice.prototype.userInput = function(currentId) {
  for (var count = 0; count <= this.selectedOption.length; count++) {
    this.selectedItem = document.getElementById('item' + count);

    if (this.selectedItem.id != currentId) {
      this.selectedItem.checked = false;
      this.selectedOption[count].parentNode.setAttribute('class', 'notActive');
    }
    else {
      this.selectedItem.checked = true;
      this.selectedOption[count].parentNode.setAttribute('class', 'active')
      this.selectedItem.scrollIntoView(true);
    }
  }
}

Choice.prototype.init = function() {
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
}