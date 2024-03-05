//  assignmentno2
//  storing a person name in a veriable
var personName = ("faiz bano");
// printing a personName in lowercase
console.log("lowercase:", personName.toLowerCase());
// printing a personName in Uppercase
console.log("Uppercase:", personName.toUpperCase());
// printing a personName in titlecase
console.log("titlecase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
