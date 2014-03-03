function SelectMoveRows(firstSel,secondSel)
{
  for (i=firstSel.options.length - 1; i >= 0; i--){
    if (firstSel.options[i].selected == true)
    {
      var SelID = firstSel.options[i].value;
      var SelText = firstSel.options[i].text;
      var newRow = new Option(SelText,SelID);
      secondSel.options[secondSel.length] = newRow;
      firstSel.options[i] = null;
    }
  }
}

function manageMove(){
   this.SelectMoveRows = SelectMoveRows;
}

window.onload = function(){ 
  var add = document.getElementById('add');
  var remove = document.getElementById('remove');
  var left = document.getElementById('contry_list_left');
  var right = document.getElementById('contry_list_right')
  
  var mover = new manageMove();

  add.addEventListener('click', function() {
    mover.SelectMoveRows(left ,right);
  });
  remove.addEventListener('click', function() {
    mover.SelectMoveRows(right ,left);
  });
}  