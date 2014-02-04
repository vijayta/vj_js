function changeCheckBoxState(toggle, form) {
  checkboxes = document.getElementsByName('list');
  for( var i=0; i < checkboxes.length; i++ ) { 
    if(toggle) {
        checkboxes[i].checked = true;
    } 
    else {
         checkboxes[i].checked = false;
    }
  }
}

window.onload = function() {
  document.getElementById('checkall').onclick = function() { changeCheckBoxState(true, 'signup') };
  document.getElementById('uncheckall').onclick = function() { changeCheckBoxState(false, 'signup') };
}
