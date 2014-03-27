function UserInfo(){
  this.user_url = document.getElementById('user_input').value;
}

UserInfo.prototype.extractDomain = function(){
  var urlParts = this.user_url.replace('http://','').replace('https://','').split(/[/?#]/);
  this.domain = urlParts[0];
  alert("Domain is: " + this.domain);
}

UserInfo.prototype.extractSubDomain = function(url){
  var regex = /^([a-z]+\:\/{2})?([\w-]+\.[\w-]+\.\w+)$/;
  regex.test(url);
}

window.onload = function(){ 
  var submit = document.getElementById('submit');
  var url = document.getElementById('user_input').value;
  submit.addEventListener('click', function() {
    var u = new UserInfo();
//    u.checkDomain(url);
    u.extractDomain();
    //u.extractSubDomain(url);
  });
}