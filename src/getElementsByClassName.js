// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  //containsTarget() checks for a string className in an arraylike classList
  var containsTarget = function(classList, className) {
    for (var i = 0; i < classList.length; i++) {
        if (classList[i] === className) {
            return true;
        }
    }
    return false;
  }
  //global result array
  var result = [];

  //define a function that adds elements to the global array if they have className, then traverses childNodes recursively
  var recursive = function(element) {
    var classes = element.classList === undefined ? [] : element.classList;
    if (containsTarget(classes, className)) {
        result.push(element);
    }
    for (var i = 0; i < element.childNodes.length; i++) {
        var child = element.childNodes[i];
        recursive(child);
    }
    return result;
  }

  //call the recusive function on document.body, this returns the global result array
  return recursive(document.body);
};
