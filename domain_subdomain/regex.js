var Regex = {
  URL: /^((https?|ftp):\/\/)?(www\.)?(([A-z0-9]+\.)*)([A-z0-9]+\.[A-z]{2,4})(\/(.)*)?$/
}

function DomainSubdomain(){
  this.init();
}

DomainSubdomain.prototype.validateUrl = function(event) {
  var result = this.url != null && this.url.trim && this.url.match(Regex.URL);  
  if(!result) {
    alert('Please enter a valid url');
    event.preventDefault();
  }
  else{
    this.extractDomain();
  }
}

DomainSubdomain.prototype.extractDomain = function(){  
  this.domain = RegExp.$6;
  this.subDomain =  RegExp.$4.replace(/\.$/, '');  
  this.showDomainSubdomain();
}

DomainSubdomain.prototype.showDomainSubdomain = function(){
  if(this.subDomain.length == 0) {
    alert("Domain is = " + this.domain);  
  }
  else{
    alert("Domain is = " + this.domain + " Sub Domain is : " + this.subDomain); 
  }
}

DomainSubdomain.prototype.init = function() {
  this.url = document.getElementById('user_input').value;
  this.submit = document.getElementById('submit');
  this.bindEvent();
}
DomainSubdomain.prototype.bindEvent = function(){
  var obj = this; 
  this.submit.addEventListener('click', function(event) {
    obj.validateUrl(event);
  });
}

window.onload = function(){ 
  var testUrl = new DomainSubdomain();
}