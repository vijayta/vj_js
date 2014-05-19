
function addRow(contact){
  var table = document.getElementById(contact);

  var rowCount = table.rows.length;
  var row = table.insertRow(rowCount);
  var iteration = row; 

  var cell1 = row.insertCell(0);
  cell1.innerHTML = rowCount + 0;

  var cell2 = row.insertCell(1);
  var element1 = document.createElement("input");
  element1.type = "text";
  element1.name="text[]";
  cell2.appendChild(element1);

  var cell3 = row.insertCell(2);
  var element1 = document.createElement("input");
  element1.type = "text";
  element1.name="text[]";
  cell3.appendChild(element1);

  var cell4 = row.insertCell(3);
  var element1 = document.createElement("input");
  element1.type = "button";
  element1.value = "Save";
  element1.name = "btn" + iteration;
  cell4.appendChild(element1);
  var element2 = document.createElement("input");
  element2.type = "button";
  element2.value = "remove";
  //element2.name = "btn_remove";
  element2.id = "btn_remove" + iteration;
  cell4.appendChild(element2);
}

function deleteRow(contact) {
  var table = document.getElementById(contact);
  var rowCount = table.rows.length;
  table.deleteRow(rowCount -1);
}

function removeProfile(rows)
  {
    var _row = rows.parentElement.parentElement;
    document.getElementById('contact').deleteRow(_row.rowIndex);
  }

window.onload = function() {  
  document.getElementById('addRow').onclick = function(){
    addRow('contact');
  };
  document.getElementById('deleteRow').onclick = function(){ 
    deleteRow('contact');
  };
  var t_row= document.contact.getElementsByTagName('tr');
  for(var i = 0; i < t_row.length; i++){
    t_row.addEventListener('click', function() {
      removeProfile(this) 
    });
  }
}  