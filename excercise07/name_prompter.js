function User(){
   this.fname = this.setName('first');
   this.lname = this.setName('last');
}
User.prototype.setName = function(name_part){
  this.name_part = name_part;
  var name_partial = this.validate(prompt("Enter " + this.name_part + " Name:"));
  return name_partial;
}
User.prototype.validate = function(name){
  if(name=="" || name == null || name.trim()==""){
    alert("you cant leave " + this.name_part + " name empty"); 
    return this.setName(this.name_part);
  }
  return name;
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