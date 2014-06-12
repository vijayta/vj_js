function DomainSubdomain(){
  this.url = document.getElementById('user_input').value;
  this.regex = /^((https?|ftp):\/\/)?(www\.)?(([A-z0-9]+\.)*)([A-z0-9]+\.[A-z]{2,4})(\/(.)*)?$/;
  this.submit = document.getElementById('submit');
}

DomainSubdomain.prototype.validateUrl = function(event) {
  this.result = this.url != null && this.url.trim && this.regex.test(this.url);  
  if(!this.result) {
    alert('Please enter a valid url');
    event.preventDefault();
  }
  else{
    return this.result;  
  }
}

DomainSubdomain.prototype.extractDomain = function(){  
  this.domain = RegExp.$6;
  this.subDomain =  RegExp.$4.replace(/\.$/, '');  
}

DomainSubdomain.prototype.showDomainSubdomain = function(){
  if(this.result){
    if(this.subDomain.length == 0) {
      alert("Domain is = " + this.domain);  
    }
    else{
      alert("Domain is = " + this.domain + " Sub Domain is : " + this.subDomain); 
    }
  }
}

window.onload = function(){ 
  this.submit.addEventListener('click', function(event) {
    var url = new DomainSubdomain();
    url.validateUrl(event);
    url.extractDomain();
    url.showDomainSubdomain();
  });
}