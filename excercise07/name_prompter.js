function user(){
   var u = new Object();
   u.fname = this.setName('first');
   u.lname = this.setName('last');
   u.dispName = this.dispName;
   return u;
}
user.prototype.setName = function(name_part){
  this.name_part = name_part;
  this.name_part = validate(prompt("Enter " + name_part + " Name:"));
  return this.name_part;
}
function validate(name){
  this.name = name;
  if(name == "" || name == null){
    alert("you cant leave name empty"); 
    return set_name(this.name_part);
  }
  return this.name;
}

user.prototype.dispName = function(){
  alert("Hello "+this.fname+" "+this.lname);
  var msg = document.getElementById('message');
  msg.innerHTML += "<p>Hello " + this.fname + " " + this.lname + ".</p>";  
}
window.onload = function(){ 
  var user1 = new user();
  user1.dispName(); 
}