function set_url(){
  this.webAdd = validateUrl(prompt("Enter URL: "));
  return this.webAdd;
}
function validateUrl(check_url){
  this.check_url = check_url;
  if(check_url == "" || check_url == null){
    alert("The URL you enter is Empty");
    return set_url();
  }
  return this.check_url;
}

set_url.prototype.dispURL = function(){
  window.open("http://" + this.webAdd, "", "height=450 , width=400, scrollbars=no ");
}

window.onload = function(){ 
  var u = new set_url();
  u.dispURL(); 
}