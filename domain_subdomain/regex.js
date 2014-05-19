function UserInfo(){
  this.userUrl = document.getElementById('user_input').value;
}

UserInfo.prototype.extractDomain = function(){  
  // var regex = new RegExp(/^https?\:\/\/([^\/:?#]+)(?:[\/:?#]|$)/i);
  var regex = new RegExp(/^([a-z]+\:\/{2})?([\w-]+\.[\w-]+\.\w+)$/);
  this.userUrl = this.userUrl.replace(new RegExp(/\\/g),"/");
  this.userUrl = this.userUrl.replace(new RegExp(/^www\./i),"");  
  this.userUrl = this.userUrl.replace(new RegExp(/\/(.*)/),"");

  if(this.userUrl.match(new RegExp(/\.[a-z]{2,3}\.[a-z]{2}$/i))) {
    this.userUrl = this.userUrl.replace(new RegExp(/\.[a-z]{2,3}\.[a-z]{2}$/i),"");
    console.log(this.userUrl);
  }
    
   else if (this.userUrl.match(new RegExp(/\.[a-z]{2,4}$/i))) {
        this.userUrl = this.userUrl.replace(new RegExp(/\.[a-z]{2,4}$/i),"");
        console.log(this.userUrl);
    }

}

window.onload = function(){ 
  var submit = document.getElementById('submit');
  var url = document.getElementById('user_input').value;
  submit.addEventListener('click', function() {
    var u = new UserInfo();
    u.extractDomain();
  });
}



