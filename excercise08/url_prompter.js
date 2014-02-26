function Url(webAdd){
  this.webAdd = webAdd;
  this.getUrl = function(){
    return this.webAdd;
  }
}

Url.prototype.validateUrl = function(value){
  this.value=value;
  if(value == null || value.trim()==""){
    alert("The URL you enter is Empty");
    return this.getUrl();
  }
}

Url.prototype.dispURL = function(){
  window.open(this.webAdd , "", "height=450 , width=400, scrollbars=no ");
}
window.onload = function(){ 
  var u = new Url(prompt("Enter URL: "));
  u.getUrl();
  u.dispURL();
}