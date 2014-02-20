function getUrl(){
  this.webAdd = serUrl(prompt("Enter URL: "));
  return this.webAdd;
}
function serUrl(url){
  this.url =  url;
  if(url != "" || url != null){
    return this.url;
  }
  else{
    alert("The URL you enter is Empty");
    return getUrl();
  }
}

getUrl.prototype.dispURL = function(){
  window.open("http://" + this.webAdd, "", "height=450 , width=400, scrollbars=no ");
}

window.onload = function(){ 
  var u = new getUrl();
  u.dispURL(); 
}