function SetUrl(){
  this.webAdd = ValidateUrl(prompt("Enter URL: "));
  return this.webAdd;
}
function ValidateUrl(check_url){
  this.check_url = check_url;
  if(check_url == "" || check_url == null){
    alert("The URL you enter is Empty");
    return SetUrl();
  }
  return this.check_url;
}

SetUrl.prototype.DispURL = function(){
  window.open("http://" + this.webAdd, "", "height=450 , width=400, scrollbars=no ");
}

window.onload = function(){ 
  var u = new SetUrl();
  u.DispURL(); 
}