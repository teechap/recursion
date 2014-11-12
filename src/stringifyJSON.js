// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {

  if (typeof obj === "object" && !Array.isArray(obj) && obj !== null) {
    var result = [];
    for (var k in obj) {
        if (typeof obj[k] === undefined || typeof obj[k] === "function") {
            return "{}";
        }
        var val = stringifyJSON(obj[k]);
        result.push('"' + k + '"' + ":" + val);
    }
    return "{" + result + "}";
  } else if (Array.isArray(obj)) {
    var result = [];
    for (i=0; i < obj.length; i++) {
        var item = stringifyJSON(obj[i]);
        result.push(item);
    }
    return "[" + result + "]";
  } else if (typeof obj === "string") {
    return '"' + obj + '"';
  } else if ((typeof obj === "boolean") || (typeof obj === "number")) {
    return "" + obj;
  } else if (obj === null) {
    return "null";
  } else {
    return "{}";
  }
};
