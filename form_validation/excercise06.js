/*function get_id(){

}

function set_field(id){
  this.id = id;
  this.id = validate(this.id);
  return this.name_part;
}
function validate(field){
  this.field = field;
  if(field == "" || field == null){
    alert("you cant leave field empty"); 
    return set_field(this.id);
  }
  return this.field;
}
*/
function user_element(id){
  this.id=id;
  this.id = Validate();
  return this.id;
}
function Validate() {
  var element = document.getElementById("user_ID").value;
  if(element == "" || element == null){
    alert('Field cant be left '+ this.id +' blank');
  }
  else{
    return element;
  }
}  
function validateEmpty(validate) {
    var error = "";
    var element = document.getElementsByName("validate").value;
    if (validate.value.length == 0) {
        fld.style.background = 'Yellow'; 
        error = "The required field has not been filled in.\n"
    } else {
        fld.style.background = 'White';
    }
    return error;  
}
/*

function user(){
   var u = new Object();
   u.user_name = set_field('user_name');
   u.lname = set_name('last');
   u.dispName = dispName;
   return u;
}*/
/*function recived(){
  alert("Hello "+this.fname+" "+this.lname);
}*/
window.onload = function(){ 
  //var user1 = new user();
  //user1.dispName(); 
  document.getElementById('submit').onclick = function(){ Validate(); }
}