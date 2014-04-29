function Table(){
  this.table = document.getElementById('contact');
  this.rowCount = this.table.rows.length;
  this.count = this.rowCount;
}

Table.prototype.addCell = function (cellCount, value) {
  this.val = value;
  this.cell = this.tableRow.insertCell(cellCount);
  this.element = document.createElement("input");
  this.element.type = 'text';
  this.element.id = this.val + this.count;
  this.element.name = this.val + this.count;
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
  var cell3 = this.actionCell(3, 'edit', this.editRow);
  var cell4 = this.actionCell(4, 'delete', this.deleteRow);
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
        this.firstCell = document.getElementById(this.id).childNodes[0];
        this.secondCell = document.getElementById(this.id).childNodes[1];
        var fname = this.firstCell.firstChild.value;
        var email = this.secondCell.firstChild.value;
        this.firstCell.innerHTML = fname;
        this.secondCell.innerHTML = email;
        e.parentNode.parentNode.childNodes[2].childNodes[0].setAttribute("style", "display:none;");
        e.parentNode.parentNode.childNodes[3].childNodes[0].setAttribute("style", "display:block;");
      }
    });
  }
}

Table.prototype.editRow = function(e){
var editButton = e.getAttribute('data-button');
var rows = document.getElementsByTagName('tr');
  for(var i = 0; i < rows.length; i++){
    rows[i].addEventListener('click', function() {
      if(editButton == this.id){
        var firstCell = document.getElementById(this.id).childNodes[0];
        var secondCell = document.getElementById(this.id).childNodes[1];
        // alert(document.getElementById(this.id).id);
        alert("first cell value = " + firstCell.id)
        alert("second cell value = " + secondCell.id)
        this.fname = firstCell.value;
        var email = secondCell.value;

        var nameField = document.createElement("input");
        nameField.type = "text";
        nameField.setAttribute('value',this.fname);
        var emailField = document.createElement("input");
        emailField.type = "text";
        emailField.value = emailField;
        firstCell.appendChild(nameField);
        // secondCell.appendChild(emailField);
        
  

        e.parentNode.parentNode.childNodes[3].childNodes[0].setAttribute("style", "display:none;");
        e.parentNode.parentNode.childNodes[2].childNodes[0].setAttribute("style", "display:block;");
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