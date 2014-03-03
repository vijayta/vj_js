function Url(webAdd){
  this.webAdd = webAdd;
  this.getUrl = getUrl;
  this.validateUrl = validateUrl;
}
function getUrl(){
  this.webAdd = prompt("Enter URL: ");
  return 
}

function validateUrl(){
 // this.validateUrl = value;
  if(this.webAdd.trim()=="" || this.webAdd  == null){
    alert("The URL you enter is Empty");
    return this.getUrl();
  }
}

Url.prototype.dispURL = function(){
  window.open("http://" + this.webAdd, "", "height=450 , width=400, scrollbars=no ");
}
window.onload = function(){
  var u = new Url();
  u.getUrl();
  u.validateUrl();
  u.dispURL();
}