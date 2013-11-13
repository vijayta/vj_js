/*jslint devel: true */
var compareAge = { check: function () {
    var john = {name : "John", age : 40 }, mary = {name : "Mary", age : 10 };
    if (john.age > mary.age) { alert("John is older than Mary"); }
     else if (john.age < mary.age) { alert("Mary is older than John"); }
     else { alert("Mary and John Are on same age"); }      
}}
