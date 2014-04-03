function checkOperation() {
  this.checkboxes = document.getElementsByName('list');
  this.none = document.getElementById('uncheckAll');
}

checkOperation.prototype.uncheckAll = function() {
  for (var i = 0, len = this.checkboxes.length; i < len; i++) {
    if (this.none.checked) {
        this.checkboxes[i].checked = false;
    }
  }
}
checkOperation.prototype.uncheckNone = function(checkbox) {
  if (checkbox.checked && this.none.checked){
    this.none.checked = false;
  }  
}

checkOperation.prototype.validateCheckLimit = function(checkbox) {
  this.array = [];
  for (var i = 0, len = this.checkboxes.length; i < len; i++) {
    if (this.checkboxes[i].checked && this.checkboxes[i].id != checkbox.id) {
      this.array.push(this.checkboxes[i].id);
    }
  }
}

checkOperation.prototype.checkOverLimit = function(checkbox) {
  if (this.array.length >= 3) {
    document.getElementById(checkbox.id).checked = false;
    alert("Only 3 days can be selected. You have already selected : " + this.array + " ");
  }
}

checkOperation.prototype.display = function() {
  var that = this;
  this.none.addEventListener('click', function() {
    that.uncheckAll();
  });

  for (var i = 0; i < this.checkboxes.length; i++) {
    this.checkboxes[i].addEventListener('click', function() {
      that.uncheckNone(this);
      that.validateCheckLimit(this);
      that.checkOverLimit(this);
    });
  }  
} 

window.onload = function() {  
  var check = new checkOperation();
  check.display();
}