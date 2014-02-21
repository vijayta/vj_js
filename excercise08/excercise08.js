function Url(webAdd){
  this.webAdd = webAdd;
}
Url.prototype.getUrl = function(){
  this.webAdd = Url(prompt("Enter URL: "));
  alert(this.webAdd);
}

Url.prototype.validateUrl = function(value){
  this.value=value;
  if(this.value != "" || this.value != null){
    alert("The URL you enter is Empty");
    return this.getUrl();
  }
}

Url.prototype.dispURL = function(){
  window.open("http://" + webAdd, "", "height=450 , width=400, scrollbars=no ");
}
window.onload = function(){ 
  var u = new Url("text");
  u.getUrl();
  u.dispURL();
}