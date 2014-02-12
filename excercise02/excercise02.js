function changeCheckBoxState() {
  var checkboxes = document.getElementsByName('list');
  for( var i = 0; i < checkboxes.length; i++ ) {
    if(this.toggle) {
        checkboxes[i].checked = true;
    }
    else {
         checkboxes[i].checked = false;
    }
  }
}

function checkBoxOperation(toggle){
  this.toggle = toggle ;
  this.changeCheckBoxState = changeCheckBoxState;
}

window.onload = function() {  
  document.getElementById('checkAll').onclick = function(){ 
    var checkall = new checkBoxOperation(true); checkall.changeCheckBoxState()
  };
  document.getElementById('uncheckAll').onclick = function(){
    var uncheckall = new checkBoxOperation(false).changeCheckBoxState()
  };

}