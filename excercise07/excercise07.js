function user_name(val) {
  this.val = val;
}

user_name.prototype.NameInput = function() {
  var name = prompt("Enter " + this.val + " Name");
  if(name == "" || name == null){
    alert("you cant left " + this.val + " name empty"); 
  }
  else{
    alert("Hello " + name);
    var msg = document.getElementById('message');
    msg.innerHTML += "<p> Your " + this.val + " name is :" + name + ".</p>";  
  }
}

window.onload = function(){ 
  var first = new user_name("First");
  var last = new user_name("Last");
  first.NameInput();
  last.NameInput();
}