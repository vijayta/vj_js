function Table(){
  this.table = document.getElementById('contact');
  this.rowCount = this.table.rows.length;
  
  this.count = this.rowCount;
}

Table.prototype.addRow = function(contact) {
  var tableRow = this.table.insertRow(this.rowCount);
  tableRow.setAttribute('id', 'row' + this.count);

  var cell1 = tableRow.insertCell(0);
  var element1 = document.createElement("input");
  element1.type = 'text';
  element1.name='name' + this.count;
  cell1.appendChild(element1);

  var cell2 = tableRow.insertCell(1);
  var element1 = document.createElement("input");
  element1.type = 'text';
  element1.name = 'email' + this.count;
  cell2.appendChild(element1);

  var cell3 = tableRow.insertCell(2);
  var element1 = document.createElement('a');
  element1.id = 'save' + this.count;
  element1.href = '#'
  element1.text = 'Save';
  cell3.appendChild(element1);

  var element2 = document.createElement('a');
  element2.id = 'edit' + this.count;
  element2.href = '#'
  element2.text = 'Edit';
  element2.style = 'display: none';
  cell3.appendChild(element2);  
  cell3.appendChild(document.createTextNode(' / '));

  var element3 = document.createElement('a');
  element3.id = 'remove' + this.count;
  element3.name = 'remove';
  element3.href = '#';
  element3.text = 'Remove';
  cell3.appendChild(element3);
  element3.setAttribute('onclick' , 'removeRow("this")');
}

Table.prototype.removeProfile = function(e){
  //console.log(e.parentNode);
  //console.log(e.parentNode.parentNode);
  console.log('hello')
  //e.parentNode.parentNode.parentNode.removeChild(e.parentNode.parentNode);
  // var remove = document.getElementsByName('remove');
  // for(var i = 0; i < remove.length ; i++){
  //  document.getElementById(remove[i].id).parentNode.parentNode;
  //  console.log('Hello');
  // } 
}
function removeRow(row){
  var table = new Table();
      table.removeProfile(row);
}

Table.prototype.output = function() {
  that = this;
  var addRow = document.getElementById('addRow');
  addRow.addEventListener('click', function() {
    var table = new Table();
    table.addRow('contact');
  });
   
  var remove = document.getElementsByName('remove');

  for(var i = 0; i < remove.length ; i++){
    remove[i].addEventListener('click', removeRow(this));
  }
}


window.onload = function() {  
    var table = new Table();
    table.output();
}