var user_input = document.getElementsByClassName('check');

function UserInput(){
  this.user_input = user_input;
}
UserInput.prototype.validateInfo = function(event) {
  for(var i = 0; i < this.user_input.length; i++) {
    this.value = this.user_input[i].value;
    if(this.value == null || this.value == "") {
      alert("You Cant left \"" + this.user_input[i].name + "\" Field Blank.");
    }  
  }
  event.preventDefault();
}
UserInput.prototype.desc = function(){
  var user_desc01 = document.getElementById('user_desc').value;
  if(user_desc01.length < 50){
    alert("User Information('About me') Cant be less then 50 char.")
  }
}
UserInput.prototype.notify = function(){
  var notify = document.getElementById('notify_me');
  if(!notify.checked){
    alert("Please check Receve Notification")
  }
}
window.onload = function(){  
  var on_submit = document.getElementById('user_info')
  on_submit.addEventListener('submit', function(event) {
    var u = new UserInput();
    u.validateInfo(event);
    u.desc();
    u.notify();
  });
}