
function compare(user1, user2) {
  if(user1<0 || user2<0 ){
    alert("Age cant be Nagative")
  }
  else if(user1 > user2){
    alert("Mary is elder then John")
  }
  else if (user2 > user1){
    alert("John is elder then Mary")
  }
  else{
    alert("Both are same age")
  }  
}  
compare(15,11);
