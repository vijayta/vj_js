function checkOperation() {
  this.checkboxes = document.getElementsByName('list');
  this.none = document.getElementById('uncheckAll');
  this.selectionLimit = 3;
  this.init();
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

checkOperation.prototype.createCheckboxList = function(checkbox) {
  this.checkboxList = [];
  for (var i = 0, len = this.checkboxes.length; i < len; i++) {
    if (this.checkboxes[i].checked && this.checkboxes[i].id != checkbox.id) {
      this.checkboxList.push(this.checkboxes[i].id);
    }
  }
}

checkOperation.prototype.checkOverLimit = function(checkbox) {
  if (this.checkboxList.length >= this.selectionLimit) {
    document.getElementById(checkbox.id).checked = false;
    alert("Only 3 days can be selected. You have already selected : " + this.checkboxList + " ");
  }
}

checkOperation.prototype.init = function() {
  var that = this;
  this.none.addEventListener('click', function() {
    that.uncheckAll();
  });

  for (var i = 0, len = this.checkboxes.length; i < len; i++) {
    this.checkboxes[i].addEventListener('click', function() {
      that.uncheckNone(this);
      that.createCheckboxList(this);
      that.checkOverLimit(this);
    });
  }  
} 

window.onload = function() {  
  var check = new checkOperation();
}