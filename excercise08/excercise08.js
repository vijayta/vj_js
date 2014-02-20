function Url(webAdd){
  this.webAdd = webAdd; 
  this.getUrl;
}
Url.prototype.getUrl = function(){
  this.webAdd = Url(prompt("Enter URL: "));
  return this.webAdd;
}
Url.prototype.serUrl = function(){
  if(this.webAdd != "" || this.webAdd != null){
    return this.webAdd;
  }
  else{
    alert("The URL you enter is Empty");
    return this.getUrl;
  }

}
Url.prototype.dispURL = function(){
  window.open("http://" + webAdd, "", "height=450 , width=400, scrollbars=no ");
}
window.onload = function(){ 
  var u = new Url();
  u.getUrl();
  u.dispURL(); 
}