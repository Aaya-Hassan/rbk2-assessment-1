// your code here
var NewArray=function() {
	var instance={}

	instance.firstElement=function(arr) {
	  return arr.shift()
	}

	instance.lastElement=function(arr) {
		return arr.pop()
	}
	return instance;
}