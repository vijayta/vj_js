function UserInfo(){
  this.userUrl = document.getElementById('user_input').value;
  this.regex = /^((https?|ftp):\/\/)?(www\.)?(([A-z0-9]+\.)*)([A-z0-9]+\.[A-z]{2,4})(\/(.)*)?$/;
}

UserInfo.prototype.validateUrl = function(){
  var result = (this.userUrl != null && this.userUrl.trim && this.regex.test(this.userUrl));
  if(!result) {
    alert('Please enter a valid url');
  }
  return result;
}

UserInfo.prototype.extractDomain = function(){  
  this.userUrl = this.userUrl.replace(new RegExp(/^\s+/),""); 
  
  this.userUrl = this.userUrl.replace(new RegExp(/\s+$/),""); 
   
  this.userUrl = this.userUrl.replace(new RegExp(/\\/g),"/");
   
  this.userUrl = this.userUrl.replace(new RegExp(/^http\:\/\/|^https\:\/\/|^ftp\:\/\//i),"");
   
  this.userUrl = this.userUrl.replace(new RegExp(/^www\./i),"");

  this.userUrl = this.userUrl.replace(new RegExp(/\/(.*)/),"");

  var domain = this.userUrl.replace(new RegExp(/\/(.*)/),"");
  domain = this.userUrl.replace(new RegExp(/^[a-zA-Z0-9]{2,4}./i),"")

  var subDomain = this.userUrl.match(new RegExp.$4.replace(/\.$/, ''));


   
  alert("Domain is = " + domain + "      Sub Domain is : " + subDomain); 
}

window.onload = function(){ 
  var submit = document.getElementById('submit');
  var url = document.getElementById('user_input').value;
  submit.addEventListener('click', function() {
    var u = new UserInfo();
    u.validateUrl();
    u.extractDomain();
  });
}



