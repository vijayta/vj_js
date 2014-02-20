function Url(){
  this.getUrl(); 
}
Url.prototype.getUrl = function(){
  this.webAdd = this.serUrl(prompt("Enter URL: "));
  return this.webAdd;
}
Url.prototype.serUrl = function(webAdd){
  this.webAdd = webAdd;
  if(this.webAdd != "" || this.webAdd != null){
    return this.webAdd;
  }
  else{
    alert("The URL you enter is Empty");
    return this.getUrl;
  }

}
Url.prototype.dispURL = function(){
  window.open("http://" + this.webAdd, "", "height=450 , width=400, scrollbars=no ");
}
window.onload = function(){ 
  var u = new Url();
  u.dispURL(); 
}