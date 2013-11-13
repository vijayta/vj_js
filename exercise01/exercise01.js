/*jslint devel: true */
var compareAge = { 
  check: function () {
    var john = {name : "John", age : 40 }, mary = {name : "Mary", age : 40 };
    if(john.age < 0 || mary.age < 0) { alert("Age cant be nagetive"); }
      else if (john.age > mary.age) { alert("John is older than Mary"); } 
        else if (john.age < mary.age) { alert("Mary is older than John"); } 
          else if(john.age == mary.age) { alert("Mary and John Are on same age"); } 
  }
}
