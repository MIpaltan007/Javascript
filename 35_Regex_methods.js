console.clear();

var str="This is a black pen, black pen runs smooth"
/*var pattern=/black/gi;*/
var pattern = new RegExp('black','gi')
//console.log(str.search(pattern))
console.log(str.match(pattern))


