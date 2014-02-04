var msg = document.getElementById('message');

function NameInput(){
  var first_name = prompt("Enter first Name");
  var last_name = prompt("Enter Last Name"); 
  if(first_name == "" || first_name == null && last_name == "" || last_name == null ){
   alert("you cant left the Field empty");
   first_name = prompt("Enter first Name");
   last_name = prompt("Enter Last Name");
  }
  alert("Hello " + first_name + " " + last_name);
  msg.innerHTML += "<p> Hello " + first_name + " " + last_name + ".</p>";
} 

window.onload = function() { NameInput(); }