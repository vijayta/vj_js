var msg = document.getElementById('message');

var NameInput = function(fname, lname) {
  this.fname = fname;
  this.lname = lname;
  if(fname == "" || fname == null || lname == "" || lname == null){
    alert("you cant left the Field empty"); 
  }
  else{
    alert("Hello " + this.fname + " " + this.lname);
    msg.innerHTML += "<p> Hello " + this.fname + " " + this.lname + ".</p>";  
  }
}

window.onload = function(){ 
  var first_name = prompt("Enter first Name");
  var last_name = prompt("Enter Last Name"); 
  NameInput(first_name, last_name); 
}