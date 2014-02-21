function set_fname(){
  this.fname = validate(prompt("Enter first Name:"));
  return this.fname; 
}
function set_lname(){
 this.lname = validate(prompt("Enter last Name:"));
 return this.lname;
}
function dispName(user){
  alert("Hello "+user.fname.toString()+" "+user.lname.toString());

}
function user(fname,lname){
   this.fname=fname;
   alert("Entered firstname:"+this.fname);
   this.lname=lname;
   alert("Entered lastname:"+this.lname);
   this.dispName=dispName;
}
function validate(name){
  this.name = name;
  if(name == "" || name == null){
    alert("you cant leave name empty"); 
    return set_fname;
  }
  return this.name;
}
window.onload = function(){ 
  var a = new set_fname();
  alert("test:"+a.name);
  var user1 = new user(new set_fname(),new set_lname());
  
  user1.dispName(user1);
  
}