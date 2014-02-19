function SelectMoveRows(firstSel,secondSel)
{
  var SelID='';
  var SelText='';
  for (i=firstSel.options.length - 1; i >= 0; i--){
    if (firstSel.options[i].selected == true)
    {
      SelID = firstSel.options[i].value;
      SelText = firstSel.options[i].text;
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
  
  add.addEventListener('click', function() {
    SelectMoveRows(left ,right);
  });
  remove.addEventListener('click', function() {
    SelectMoveRows(right ,left);
  });
}  