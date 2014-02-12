function ValidURL(str) {
  var pattern = new RegExp('^(https?:\/\/)?'+ // protocol
    '((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|'+ // domain name
    '((\d{1,3}\.){3}\d{1,3}))'+ // OR ip (v4) address
    '(\:\d+)?(\/[-a-z\d%_.~+]*)*'+ // port and path
    '(\?[;&a-z\d%_.~+=-]*)?'+ // query string
    '(\#[-a-z\d_]*)?$','i'); // fragment locater
  if(!pattern.test(str)) {
    alert("Please enter a valid URL.");
    return false;
  } else {
    return true;
  }
}
/*function Web_Url(){
  var webAdd = prompt("Please enter Web URL");
  if(webAdd=="" || webAdd==null) 
  {
   alert("The URL you enter is Empty");
  }
  else 
  {
    window.open("http://" + webAdd, "", "height=450 , width=400, scrollbars=no ")
  }
} */ 
window.onload=function(){ ValidURL('vijayta.com') }