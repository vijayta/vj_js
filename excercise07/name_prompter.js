function User(){
   var u = new Object();
   u.fname = this.SetName('first');
   u.lname = this.SetName('last');
   u.DispName = this.DispName;
   return u;
}
User.prototype.SetName = function(name_part){
  this.name_part = name_part;
  this.name_part = Validate(prompt("Enter " + name_part + " Name:"));
  return this.name_part;
}
function Validate(name){
  this.name = name;
  if(name == "" || name == null){
    alert("you cant leave name empty"); 
    return set_name(this.name_part);
  }
  return this.name;
}

User.prototype.DispName = function(){
  alert("Hello "+this.fname+" "+this.lname);
  var msg = document.getElementById('message');
  msg.innerHTML += "<p>Hello " + this.fname + " " + this.lname + ".</p>";  
}
window.onload = function(){ 
  var user1 = new User();
  user1.DispName(); 
}