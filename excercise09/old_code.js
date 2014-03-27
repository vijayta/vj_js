function SelectMoveRows()
{
}

SelectMoveRows.prototype.manageMove = function(firstSel,secondSel){
  var len = firstSel.options.length;
   for (i = len - 1; i >= 0; i--){
    if (firstSel.options[i].selected)
    {
      var SelID = firstSel.options[i].value;
      var SelText = firstSel.options[i].text;
      var newRow = new Option(SelText,SelID);
      secondSel.options[secondSel.length] = newRow;
      firstSel.options[i] = null;
    }
  }
}

window.onload = function(){ 
  var add = document.getElementById('add');
  var remove = document.getElementById('remove');
  var left = document.getElementById('contry_list_left');
  var right = document.getElementById('contry_list_right')
  
  var move = new SelectMoveRows();

  add.addEventListener('click', function() {
    move.manageMove(left ,right);

  });
  remove.addEventListener('click', function() {
    move.manageMove(right ,left);
  });
}