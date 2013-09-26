function fValid ()
  {
    var login = document.reg.login.value;
    var email = document.reg.email.value;
    var fname = document.reg.fname.value;
    var url = document.reg.url.value;
    var msg = document.reg.textbox.value;
    var noti = document.reg.notification;

    var user = {"login":"vijayta", "email":"vijayta@vinsol.com", "fname":"vijayta", "url":"vvvv", "msg":"ddd"};
    
    
    if(login=="" || login==null)
      {
        alert("You cant left Login ID Blank");
        return false;
      } 
    if(email=="" || email==null)
      {
        alert("You cant left Email Blank");
        return false;
      }   
    if(fname=="" || fname==null)
      {
        alert("You cant left Name Blank");
        return false;
      }       
    if(url=="" || url==null)
      {
        alert("You cant left Home Page Blank");
        return false;
      }
    if(msg.length < 50 || msg=="" || msg==null)
    {
      alert("Message should not be less then 50 charecter or empty")
      return false;
    }
    /*if(noti.checked == false)
    {
      alert("please check notification");
    }*/
    if(noti.checked){
      var link = "mailto:vijayta@vinsol.com?subject=Message from"
      +"&body="+document.getElementById('msg').value;
      window.location.href = link;
      return false;
    }  
    else
    {
      welcome=window.open("","" , "height=400 , width=400")
      welcome.document.write("<h1>Your form is submitted</h1>");
    }
  }  