function Table(){
  this.table = document.getElementById('contact');
  this.rowCount = this.table.rows.length;
  this.count = this.rowCount;
}
Table.prototype.addCell = function (cellCount) {
  this.cell = this.tableRow.insertCell(cellCount);
  this.element = document.createElement("input");
  this.element.type = 'text';
  this.element.name='name' + this.count;
  this.cell.appendChild(this.element);
}
Table.prototype.addRow = function(contact) {
  this.tableRow = this.table.insertRow(this.rowCount);
  this.tableRow.setAttribute('id', 'row' + this.count); 

  var call1 = this.addCell(1);
  var call2 = this.addCell(2);

  // var cell1 = tableRow.insertCell(0);
  // var element1 = document.createElement("input");
  // element1.type = 'text';
  // element1.name='name' + this.count;
  // cell1.appendChild(element1);

  // var cell2 = tableRow.insertCell(1);
  // var element1 = document.createElement("input");
  // element1.type = 'text';
  // element1.name = 'email' + this.count;
  // cell2.appendChild(element1);

  // var cell3 = tableRow.insertCell(2);
  // var element1 = document.createElement('a');
  // element1.id = 'save' + this.count;
  // element1.href = '#'
  // element1.text = 'Save';
  // element1.setAttribute('data-button', 'row' + this.count)
  // cell3.appendChild(element1);
  // element1.setAttribute('onclick', 'saveRow(this)');

  // var element2 = document.createElement('a');
  // element2.id = 'edit' + this.count;
  // element2.href = '#'
  // element2.text = 'Edit';
  // element2.style = 'display: none';
  // cell3.appendChild(element2);  
  // cell3.appendChild(document.createTextNode(' / '));

  // var element3 = document.createElement('a');  
  // element3.href = '#';
  // element3.text = 'Delete';
  // element3.setAttribute('data-button', 'row' + this.count)
  // cell3.appendChild(element3);
  // element3.setAttribute('onclick' , 'removeRow(this)');
}

Table.prototype.removeProfile = function(e){
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

Table.prototype.saveProfile = function(e){
var saveButton = e.getAttribute('data-button');
var rows = document.getElementsByTagName('tr');
  for(var i = 0; i < rows.length; i++){
    rows[i].addEventListener('click', function() {      
      if(saveButton == this.id){
        alert('Saved');
      }
    });
  }

  // var element = e.parentNode.parentNode.getElementsByTagName("td");
  //   ect[0].innerHTML=ect[0].firstChild.value;
  //   ect[1].innerHTML=ect[1].firstChild.value;
  //   ect[2].setAttribute("style", "display:none;");
  //   ect[3].setAttribute("style", "display:block;");
}


function removeRow(row){
  var table = new Table();
  table.removeProfile(row);
}
function saveRow(row){
  var table = new Table();
  table.saveProfile(row);
}

Table.prototype.output = function() {
  that = this;
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