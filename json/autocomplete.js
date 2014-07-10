var suggetionList = '[{"name":"Luigi Damiano"}, {"name":"Zenith Coboro"}, {"name":"Zig Ziglar"}, {"name":"Steve Costner"}, {"name":"Bill Grazer"}, {"name":"Timothy Frazer"}, {"name":"Boris Becker"}, {"name":"Glenn Gladwich"}, {"name":"Jim Jackson"}, {"name":"Aaron Kabin"}, {"name":"Roy Goldwin"}, {"name":"Jason Goldberg"}, {"name":"Tim Ferris"}, {"name":"Buck Singham"}, {"name":"Malcom Gladwell"}, {"name":"Joy Rabura"}, {"name":"Vid Luther"}, {"name":"Tom Glicken"}, {"name":"Ray Baxter"}, {"name":"Ari Kama"}, {"name":"Kenichi Suzuki"}, {"name":"Rick Olson"}]';

function AutoComplete(list, nameField, userForm){
  this.list = list;
  this.userForm = userForm;
  this.nameField = nameField;
  this.init();  
}

AutoComplete.prototype.completeText = function() {
  var this_obj = this;
  var nameList = JSON.parse(suggetionList), nameValue = this.nameField.value, regex = new RegExp("^" + nameValue + "[a-z0-9\s]*","i");
    this.list.innerHTML = "";
    var userArray = [];
    if (nameValue != "") {
      for (i in nameList) {
        if (nameList[i].name.match(regex) !== null && nameList[i].name.match(regex).length > 0) {
          userArray.push(nameList[i]);
        }
      }
    }
    if (userArray.length > 0) {
      this_obj.showList(userArray);
    }
}
AutoComplete.prototype.showList = function(userArray) {
  var userListFragment = document.createDocumentFragment();
    for (var i in userArray) {
      var newListElement = userListFragment.appendChild(document.createElement("li"));
      newListElement.appendChild(document.createTextNode(userArray[i].name));
    }
    this.list.appendChild(userListFragment);
}

AutoComplete.prototype.init = function() {
  var this_obj = this;
  this.nameField.addEventListener('keyup', function() {
    this_obj.completeText();
  });  
}

window.onload = function() {
  var list = document.getElementById('list');
  var nameField = document.getElementById('nameField');
  var userForm = document.getElementById('userForm');
  var autoComplete = new AutoComplete(list, nameField, userForm);
}
