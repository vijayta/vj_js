var user_input = document.getElementsByClassName("check");  

function userElement(id){
  this.id=id;
}
userElement.prototype.validate = function() {
  var element = document.getElementsByClassName("check").value;
  if(element == "" || element == null){
    alert('Field cant be left '+ this.id +' blank');
  }
  else{
    return element;
  }
}  
function validateEmpty(validate) {
    var error = "";
    var element = document.getElementsByClassName("check").value;
    if (validate.value.length == 0) {
        error = "The required field has not been filled in.\n"
    } else {
        fld.style.background = 'White';
    }
    return error;  
}

window.onload = function(){  
  document.getElementById('submit').onclick = function(){ 

   }
}