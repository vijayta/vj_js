var counter = 0;
var elem = [];
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

  // for (var i = 0; i < this.suggetionList.name.length; i++) {
  //   element = this.suggetionList.name[i].toString();
  //   if (element.toLowerCase().indexOf(userText.toLowerCase()) == 0) {
  //     obj.value += element.substring(userText.length, element.length);
  //     break;
      
  //     if(counter == 0){
  //       obj.value += element.substring(userText.length, element.length);
  //     }
  //     else{
  //       obj.value += element.substring(0, element.length);
  //       elem[counter] = element.substring(0, element.length);
  //     }
  //     elem[counter] = obj.value;
  //     this.list.innerHTML =  '<li>' + obj.value + '</li>';  
  //     counter++;
  //   }
    listValue = obj.val;
    for (var i = 0; i < this.suggetionList.name.length; i++) {
      element = this.suggetionList.name[i].toString();
      if (element.toLowerCase().indexOf(userText.toLowerCase()) == 0) {
        if(counter == 0){
          obj.value += element.substring(userText.length, element.length);
          listValue += '<li>' + element.substring(userText.length, element.length) + '</li>';
        }
        else{
          listValue += '<li>' + element.substring(0, element.length) + '</li>';
        }
        this.list.innerHTML =  '<li>' + listValue + '</li>';  
        counter++;
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
      "Former"
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
