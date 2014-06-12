var rowCounter = 1; 
function Table(){
   this.Row = Row;
  }
function Row(){
  this.row = document.getElementById('contact');
  this.rowCount = this.row.rows.length;
  this.count = rowCounter; 
}

Row.prototype.addCell = function (cellCount, value) {
  this.val = value;
  this.cell = this.rowRow.insertCell(cellCount);
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

Row.prototype.actionCell = function (cellCount, value, action) {
  this.value = value;
  this.cell = this.rowRow.insertCell(cellCount);
  this.cell.setAttribute('class', this.value);
  this.element = document.createElement('a');
  this.element.id = this.value + this.count;
  this.element.name = this.value;
  this.element.href = '#'
  this.element.text =  this.value;
  this.element.setAttribute('data-button', 'row' + this.count)
  this.cell.appendChild(this.element);
  this.element.addEventListener('click' , function() {
    action(this);
  })
}

Row.prototype.addRow = function(contact) {
  this.rowRow = this.row.insertRow(this.rowCount);
  this.rowRow.setAttribute('id', 'row' + this.count); 
  var call0 = this.addCell(0, 'name');
  var call1 = this.addCell(1, 'email');
  var cell2 = this.actionCell(2, 'save', this.saveRow);
  var cell2 = this.actionCell(2, 'edit', this.editRow);
  var cell4 = this.actionCell(4, 'delete', this.deleteRow);
  rowCounter++; 
}

Row.prototype.deleteRow = function(e){
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

Row.prototype.saveRow = function(e){
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

Row.prototype.editRow = function(e){
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


// Row.prototype.cellAction = function(e) {
//   var button = e.getAttribute('data-button');
//   var rows = document.getElementsByTagName('tr');
//   var element = document.getElementsByTagName('a');
//   this.action = document.getElementsByName(this.value);
//   for(var i = 0; i < element.length; i++){
//     element[i].addEventListener('click', function() {
//       console.log(rows.id);

//       // this.name = document.getElementById(this.id).getElementsByTagName('input');
//       // this.text = document.getElementById(this.id).getElementsByTagName('span');
//       // for(var i = 0; i < this.name.length; i++) {
//       //   if(button == this.id) { 
//       //     this.name[i].style.display = "block";
//       //     this.text[i].style.display = "none";
//       //   }
//       //   else{
//       //     this.name[i].style.display = "none";
//       //     this.text[i].style.display = "block";
//       //   }
//       // }
//       // if(button == this.id) { 
//       //   if(this.action == 'save'){
//       //     document.getElementById(this.id).getElementsByClassName('edit')[0].style.display = 'none';    
//       //     document.getElementById(this.id).getElementsByClassName('save')[0].style.display = 'table-cell';  
//       //   }
//       //   else{
//       //     document.getElementById(this.id).getElementsByClassName('edit')[0].style.display = 'table-cell';    
//       //     document.getElementById(this.id).getElementsByClassName('save')[0].style.display = 'none';   
//       //   }
      
//     });
//   }
// }

Table.prototype.init = function() {
    var addRow = document.getElementById('addRow');
    addRow.addEventListener('click', function() {
      var row = new Row();
      row.addRow('contact');
    });
  }

window.onload = function() {  
    var table = new Table();
    table.init();
}