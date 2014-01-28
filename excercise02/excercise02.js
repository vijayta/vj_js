var checkflag = "false";

var checkbox = document.getElementById("checkall");
checkbox.onclick = function () {
  checkboxes = document.getElementsByName('list');
  if (checkflag == "false") {
    for(var i=0, n=checkboxes.length;i<n;i++) {
      checkboxes[i].checked = true;
    }
  }
}

var uncheck = document.getElementById("uncheckall");
uncheck.onclick = function () {
  checkboxes = document.getElementsByName('list');
  if (checkflag == "false") {
    for(var i=0, n=checkboxes.length;i<n;i++) {
      checkboxes[i].checked = false;
    }
  }  
}