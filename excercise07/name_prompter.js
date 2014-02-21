function User(){
   var u = new Object();
   u.fname = this.setName('first');
   u.lname = this.setName('last');
   u.dispName = this.dispName;
   return u;
}
User.prototype.setName = function(name_part){
  this.name_part = name_part;
  this.name_part = this.validate(prompt("Enter " + name_part + " Name:"));
  return this.name_part;
}
User.prototype.validate = function(name){
  this.name = name;
  if(name){
    return this.name;
  }
  else{
    alert("you cant leave " + this.name_part + " name empty"); 
    return this.setName(this.name_part);
  }
}

User.prototype.dispName = function(){
  alert("Hello " + this.fname + " " + this.lname);
  var msg = document.getElementById('message');
  msg.innerHTML += "<p>Hello " + this.fname + " " + this.lname + ".</p>";  
}
window.onload = function(){ 
  var user1 = new User();
  user1.dispName(); 
}