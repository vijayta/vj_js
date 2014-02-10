
function checkLimit(j){
  var total = 0;
  list = document.signup.elements['list']; // Global Variable list
  var max = list.length;
  var txt ="";
  for (var x = 0; x < max; x++) {
  if (list[x].checked) {
    total += 1;
    if(total > 3)
    { 
      list[j].checked=false;
      total--;
      alert("you cant select more then 3 item at once you have already selected " + total + " : " + txt);
    }
     else {
      txt += list[x].value + ' '; 
    } 
  }
}
  for(var z=0; z < max; z++){
      if("list[" + z + "].  "){
      document.signup.uncheckall.checked=false; 
    }
  }
}


function unCheckAll(checkItem){
  for (i = 0; i < checkItem.length; i++){
    checkItem[i].checked = false ;
  }
}


window.onload = function() {
  document.getElementById('uncheckall').onclick = function() { unCheckAll(list); };
}