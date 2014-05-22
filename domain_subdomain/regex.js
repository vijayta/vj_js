function UserInfo(){
  this.userUrl = document.getElementById('user_input').value;
  this.regex = /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
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
  domain = this.userUrl.replace(new RegExp(/^[a-z]{2,4}./i),"")

  var subDomain = this.userUrl.match(new RegExp(/[a-z]{2,4}/i));
   
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



