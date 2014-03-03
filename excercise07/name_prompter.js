function User(){
   this.fname = this.setName('first');
   this.lname = this.setName('last');
}
User.prototype.setName = function(name_part){
  this.name_part = name_part;
  this.name_part = this.validate(prompt("Enter " + this.name_part + " Name:"));
  return this.name_part
}
User.prototype.validate = function(name){
  this.name = name;
  if(this.name.trim()=="" || this.name == null){
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
  user1.dispName(); 
}