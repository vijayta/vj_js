function user(name, age) {
  this.name = name;
  this.age = parseInt(age, 10);
}

user.prototype.compare = function(object) {
  if (this.age > object.age) {
    alert(this.name + " is older than " + object.name);
  }
  else if (this.age < object.age) {
    alert(object.name + " is older than " + this.name);
  }
  else {
    alert(object.name + " and " + this.name + " are of same age.")
  }
};

window.onload = function(){
  var user1 = new user("Mary", "50");
  var user2 = new user("John", "100");
  user1.compare(user2);
}