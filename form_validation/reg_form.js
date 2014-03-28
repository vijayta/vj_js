function UserInput(){
  this.user_input = document.getElementsByClassName('check');
  this.user_desc = document.getElementById('user_desc').value;
  this.notify = document.getElementById('notify_me');
}
UserInput.prototype.validateInfo = function(event) {
  for(var i = 0; i < this.user_input.length; i++) {
    this.value = this.user_input[i].value;
    if(this.value == null || this.value == "") {
      alert("You Cant left " + this.user_input[i].name + " Field Blank.");
      event.preventDefault();
    }  
  }
}
UserInput.prototype.validateDesc = function(){
  if(this.user_desc.length < 50){
    alert("User Information('About me') Cant be less then 50 char.")
  }
}
UserInput.prototype.checkNotify = function(){
  
  if(!this.notify.checked){
    alert("Please check Receive Notification")
  }
}
UserInput.prototype.validateAndCheckNotification = function(event){
  this.validateInfo(event);
  this.validateDesc();
  this.checkNotify();
}

window.onload = function(){  
  var on_submit = document.getElementById('user_info')
  on_submit.addEventListener('submit', function(event) {
    var u = new UserInput();
    u.validateAndCheckNotification(event);
  });
}