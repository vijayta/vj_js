function Choice() {
  this.list = document.getElementsByTagName('input');
  this.init(); 
}

Choice.prototype.userInput = function(element) { 
  var currentItem = element.getAttribute("id");
  var list = document.getElementsByName(currentItem);
  var children = document.getElementsByClassName(currentItem);
  element.scrollIntoView(true);
  for(var i = 0; i < list.length; i++){
    list[i].style.display = (list[i].style.display == "none") ? "block" : "none";
  }
  for(var i = 0; i < children.length; i++) {
    console.log(children[i]);
    children[i].checked = element.checked;
  }
} 

Choice.prototype.init = function() {
  var this_obj = this;
  var checkbox = document.getElementsByName('mainList');
  for(var i = 0; i < checkbox.length; i++) {
    checkbox[i].addEventListener('click', function() {
      var element = this.id;
      this_obj.userInput(this);
    }
  )};  
  var chekboxes = document.getElementsByTagName('input');

  for(var i = 0; i < chekboxes.length; i++){
    chekboxes[i].checked = false;
  }  
}

window.onload = function(){
  var userChoice = new Choice();
}