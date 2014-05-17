var rowCounter = 1; 
function Table(){
  this.table = document.getElementById('contact');
  this.rowCount = this.table.rows.length;
  // this.count = this.rowCount;
  this.count = rowCounter; 
}

Table.prototype.addCell = function (cellCount, value) {
  this.val = value;
  this.cell = this.tableRow.insertCell(cellCount);
  this.cell.setAttribute('cell-name', 'cell' + cellCount);
  this.element = document.createElement("input");
  this.element.type = 'text';
  this.element.id = this.val + this.count;
  this.element.name = this.val;
  this.span = document.createElement('span');
  this.span.setAttribute('name',this.val)
  this.cell.appendChild(this.element);
  this.cell.appendChild(this.span);
}

Table.prototype.actionCell = function (cellCount, value, action) {
  this.cell = this.tableRow.insertCell(cellCount);
  this.cell.setAttribute('class', value);
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
  var cell2 = this.actionCell(2, 'edit', this.editRow);
  var cell4 = this.actionCell(4, 'delete', this.deleteRow);
  rowCounter++; 
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
this.rows = document.getElementsByTagName('tr');
  for(var i = 0; i < this.rows.length; i++){
    rows[i].addEventListener('click', function() {      
      if(saveButton == this.id){
        document.getElementById(this.id).getElementsByClassName('edit')[0].style.display = 'table-cell';
        document.getElementById(this.id).getElementsByClassName('save')[0].style.display = 'none';
        this.name = document.getElementById(this.id).getElementsByTagName('input');
        this.text = document.getElementById(this.id).getElementsByTagName('span');
        this.text[0].innerHTML = this.name[0].value;
        this.name[0].style.display = "none";
        this.text[0].style.display = "block"; 
        this.text[1].innerHTML = this.name[1].value;
        this.name[1].style.display = "none";
        this.text[1].style.display = "block"; 


      }
    });
  }
}

Table.prototype.editRow = function(e){
var editButton = e.getAttribute('data-button');
  for(var i = 0; i < this.rows.length; i++){
    rows[i].addEventListener('click', function() {      
      if(editButton == this.id){
        this.text[0].innerHTML = this.name[0].value;
        this.name[0].style.display = "block";
        this.text[0].style.display = "none"; 
        this.text[1].innerHTML = this.name[1].value;
        this.name[1].style.display = "block";
        this.text[1].style.display = "none"; 
        document.getElementById(this.id).getElementsByClassName('edit')[0].style.display = 'none';    
        document.getElementById(this.id).getElementsByClassName('save')[0].style.display = 'table-cell';
      }
    });
  }
}

Table.prototype.init = function() {
  var addRow = document.getElementById('addRow');
  addRow.addEventListener('click', function() {
    var table = new Table();
    table.addRow('contact');
  });
}

window.onload = function() {  
    var table = new Table();
    table.init();
}