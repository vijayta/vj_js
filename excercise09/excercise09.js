function SelectMoveRows()
{
  this.add = document.getElementById('add');
  this.remove = document.getElementById('remove');
  this.left = document.getElementById('contry_list_left');
  this.right = document.getElementById('contry_list_right')
}

SelectMoveRows.prototype.manageMove = function(firstSel,secondSel){
  var index = firstSel.selectedIndex;
  while(index != -1) {
    secondSel.add(firstSel.options[index], secondSel.options[null]);
    index = firstSel.selectedIndex;
  }
}

SelectMoveRows.prototype.addClickEventListeners = function(){
  var that = this;
  this.add.addEventListener('click', function() {
    that.manageMove(that.left ,that.right);
  });

  this.remove.addEventListener('click', function() {
    that.manageMove(that.right ,that.left);
  }); 
}

window.onload = function(){ 
  var move = new SelectMoveRows();
  move.addClickEventListeners();
}