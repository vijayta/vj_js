function Choice() {
  this.init(); 
}

Choice.prototype.SelectList = function(element) { 
  var currentItem = element.getAttribute("id");
  var list = document.getElementsByName(currentItem)[0];
  var children = document.getElementsByClassName(currentItem);
  
  list.style.display = (list.style.display == "none") ? "block" : "none";
  
  for(var i = 0, children_length = children.length; i < children_length; i++) {
    children[i].checked = element.checked;
  }
  element.scrollIntoView(true);
} 

Choice.prototype.init = function() {
  var this_obj = this;
  var checkbox = document.getElementsByName('mainList');
  for(var i = 0, checkbox_length = checkbox.length; i < checkbox_length; i++) {
    checkbox[i].addEventListener('click', function() {
      this_obj.SelectList(this);
    }
  )};  
  
  var chekboxes = document.getElementsByTagName('input');
  for(var i = 0, check_length = chekboxes.length; i < check_length; i++){
    chekboxes[i].checked = false;
  }  
}

window.onload = function(){
  var userChoice = new Choice();
}