function UserInfo(){
  this.user_url = document.getElementById('user_input').value;
}

UserInfo.prototype.extractDomain = function(){  
  var sub = this.user_url.replace(/^(www\.)?([^.]+)\.mydomain\.com/i,"$2");
  var domain = this.user_url.match(/\(?(?:(http|https|ftp):\/\/)?(?:((?:[^\W\s]|\.|-|[:]{1})+)@{1})?((?:www.)?(?:[^\W\s]|\.|-)+[\.][^\W\s]{2,4}|localhost(?=\/)|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})(?::(\d*))?([\/]?[^\s\?]*[\/]{1})*(?:\/?([^\s\n\?\[\]\{\}\#]*(?:(?=\.)){1}|[^\s\n\?\[\]\{\}\.\#]*)?([\.]{1}[^\s\?\#]*)?)?(?:\?{1}([^\s\n\#\[\]]*))?([\#][^\s\n]*)?\)?/gi);
  console.log ("Sub Domain is : " + domain + " Sub Domain Name is : " + sub);
}

window.onload = function(){ 
  var submit = document.getElementById('submit');
  var url = document.getElementById('user_input').value;
  submit.addEventListener('click', function() {
    var u = new UserInfo();
    u.extractDomain();
  });
}



