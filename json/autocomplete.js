var counter = 0;
function AutoComplete(){
  this.init();  
}

AutoComplete.prototype.complete = function(obj, keyevent) {
  var element = (obj.setSelectionRange) ? keyevent.which : keyevent.keyCode;
  var userText = obj.value.replace(/;/gi, ",");
  element = userText.split(",");
  userText = element.pop();
  userText = userText.replace(/^\s*/, "");

  if (obj.createTextRange) {
    var range = document.selection.createRange();
    if (range.parentElement() == obj) {
        element = range.text;
        var ini = obj.value.lastIndexOf(element);
    }
  } 
  else if (obj.setSelectionRange) {
    var ini = obj.selectionStart;
  }
  var listValue = obj.value;
  for (var i = 0; i < this.suggetionList.name.length; i++) {
    element = this.suggetionList.name[i].toString();
    if (element.toLowerCase().indexOf(userText.toLowerCase()) == 0) {
      if(counter == 0){
        obj.value += element.substring(userText.length, element.length);
      }
      else{
        var str = string.match(obj.value)
        listValue += '<li>' + element.substring(0, element.length) + '</li>';
      }
      console.log(listValue);
      this.list.innerHTML =  '<li>' + listValue + '</li>';  
      counter++;
    }
  }
  if (obj.setSelectionRange) {
    obj.setSelectionRange(ini, obj.value.length);
  }
}

AutoComplete.prototype.init = function() {
  this.suggetionList = { "name" : 
    [ "Luigi Damiano",
      "Zenith Coboro",
      "Zig Ziglar",
      "Steve Costner",
      "Bill Grazer",
      "Timothy Frazer",
      "Boris Becker",
      "Glenn Gladwich",
      "Jim Jackson",
      "Aaron Kabin",
      "Roy Goldwin",
      "Jason Goldberg",
      "Tim Ferris",
      "Buck Singham",
      "Malcom Gladwell",
      "Joy Rabura",
      "Vid Luther",
      "Tom Glicken",
      "Ray Baxter",
      "Ari Kama",
      "Kenichi Suzuki",
      "Rick Olson",
      "Anvay",
      "Anvita",
      "Avinash",
      "Catino",
      "Devid",
      "Elic",
      "Former",
    ]
  };
  this.list = document.getElementById('list');
  var nameField = document.getElementById('nameField');
  var obj = this;
  nameField.addEventListener('keyup', function() {
    obj.complete(this, 'keydown');
  });  
}

window.onload = function() {
  var autoComplete = new AutoComplete();
}
