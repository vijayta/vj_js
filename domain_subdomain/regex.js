function DomainSubdomain(){
  this.url = document.getElementById('user_input').value;
  this.regex = /^((https?|ftp):\/\/)?(www\.)?(([A-z0-9]+\.)*)([A-z0-9]+\.[A-z]{2,4})(\/(.)*)?$/;
  this.init();
}

DomainSubdomain.prototype.validateUrl = function(){
  var result = this.url != null && this.url.trim && this.regex.test(this.url);
  if(!result) {
    alert('Please enter a valid url');
  }
  return result;
}

DomainSubdomain.prototype.extractDomain = function(){  
  this.domain = RegExp.$6;
  this.subDomain =  RegExp.$4.replace(/\.$/, '');
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
  var submit = document.getElementById('submit');
  var url = document.getElementById('user_input').value;
  submit.addEventListener('click', function() {
    var url = new DomainSubdomain();
    url.validateUrl();
    url.extractDomain();
    url.showDomainSubdomain();
  });
}

window.onload = function(){ 
  var userInput = new DomainSubdomain();
}



