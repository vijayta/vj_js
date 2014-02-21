function User(){
   var u = new Object();
   u.fname = this.setName('first');
   u.lname = this.setName('last');
   u.dispName = this.dispName;
   return u;
}
User.prototype.setName = function(name_part){
  this.name_part = name_part;
  var name = prompt("Enter " + this.name_part + " Name:");
  if(name != null){
    this.validate(name);
  }
  else{ 
    alert('you escape ur code') 
  }  
}
User.prototype.validate = function(name){
  this.name = name;
  var name = name.trim();
  if(name == "" || name == null){
    alert("you cant leave " + this.name_part + " name empty"); 
    return this.setName(this.name_part);
  }
  return this.name;
}

User.prototype.dispName = function(){
  alert("Hello " + this.fname + " " + this.lname);
  var msg = document.getElementById('message');
  msg.innerHTML += "<p>Hello " + this.fname + " " + this.lname + ".</p>";  
}
window.onload = function(){ 
  var user1 = new User();
  user1.setName; 
}