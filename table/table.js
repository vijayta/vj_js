function Table(){
  this.table = document.getElementById('contact');
  this.rowCount = this.table.rows.length;
  this.count = this.rowCount;
}

Table.prototype.addCell = function (cellCount, value) {
  this.cell = this.tableRow.insertCell(cellCount);
  this.element = document.createElement("input");
  this.element.type = 'text';
  this.element.name = value + this.count;
  this.cell.appendChild(this.element);
}

Table.prototype.actionCell = function (cellCount, value, action) {
  this.cell = this.tableRow.insertCell(cellCount);
  this.element = document.createElement('a');
  this.element.id = value + this.count;
  this.element.href = '#'
  this.element.text =  value;
  this.element.setAttribute('data-button', 'row' + this.count)
  this.cell.appendChild(this.element);
  this.element.addEventListener('click' , function() {
    action(this);
  })
}

Table.prototype.addRow = function(contact) {
  this.tableRow = this.table.insertRow(this.rowCount);
  this.tableRow.setAttribute('id', 'row' + this.count); 
  var call0 = this.addCell(0, 'name');
  var call1 = this.addCell(1, 'email');
  var cell2 = this.actionCell(2, 'save', this.saveRow);
  var cell3 = this.actionCell(3, 'delete', this.deleteRow);
}

Table.prototype.deleteRow = function(e){
  var removeButton = e.getAttribute('data-button');
  var rows = document.getElementsByTagName('tr');
  for(var i = 0; i < rows.length; i++){
    rows[i].addEventListener('click', function() {      
      if(removeButton == this.id){
        document.getElementById('tbody').removeChild(this);
      }
    });
  }
}

Table.prototype.saveRow = function(e){
var saveButton = e.getAttribute('data-button');
var rows = document.getElementsByTagName('tr');
  for(var i = 0; i < rows.length; i++){
    rows[i].addEventListener('click', function() {      
      if(saveButton == this.id){
        console.log(this.count);
      }
    });
  }

  // var element = e.parentNode.parentNode.getElementsByTagName("td");
  //   ect[0].innerHTML=ect[0].firstChild.value;
  //   ect[1].innerHTML=ect[1].firstChild.value;
  //   ect[2].setAttribute("style", "display:none;");
  //   ect[3].setAttribute("style", "display:block;");
}

Table.prototype.isValidate = function() {
  var textField = document.getElementsByTagName('input');
  if ( textField.value == null || textField.value.trim() ) {
    alert('Text field is empty');
  }
}
Table.prototype.output = function() {
  var addRow = document.getElementById('addRow');
  addRow.addEventListener('click', function() {
    var table = new Table();
    table.addRow('contact');
  });
}

window.onload = function() {  
    var table = new Table();
    table.output();
}