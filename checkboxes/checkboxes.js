function Choice() {
  this.init(); 
}

Choice.prototype.SelectList = function(element) { 
  var currentItem = element.getAttribute("id");
  var list = document.getElementsByName(currentItem);
  var children = document.getElementsByClassName(currentItem);
  for(var i = 0; i < list.length; i++){
    list[i].style.display = (list[i].style.display == "none") ? "block" : "none";
  }
  for(var i = 0; i < children.length; i++) {
    children[i].checked = element.checked;
  }
  element.scrollIntoView(true);
} 

Choice.prototype.init = function() {
  var this_obj = this;
  var checkbox = document.getElementsByName('mainList');
  for(var i = 0; i < checkbox.length; i++) {
    checkbox[i].addEventListener('click', function() {
      this_obj.SelectList(this);
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