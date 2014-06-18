function AutoComplete(){
  this.jsonData = { "name" : 
    [
      "Luigi Damiano",
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
      "Rick Olson"
    ]
  };
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

  for (var i = 0; i < this.jsonData.name.length; i++) {
    element = this.jsonData.name[i].toString();
    if (element.toLowerCase().indexOf(userText.toLowerCase()) == 0) {
      obj.value += element.substring(userText.length, element.length);
      break;
    }
  }
  if (obj.createTextRange) {
    range = obj.createTextRange();
    range.moveStart("character", ini);
    range.moveEnd("character", obj.value.length);
    range.select();
  }
  else if (obj.setSelectionRange) {
    obj.setSelectionRange(ini, obj.value.length);
  }
}

AutoComplete.prototype.init = function() {
  var name = document.getElementById('name');
  name.addEventListener('keyup', function() {
    var autoComplete = new AutoComplete();
    autoComplete.complete(this, 'keydown');
  });  
}

window.onload = function() {
  var autoComplete = new AutoComplete();
}
