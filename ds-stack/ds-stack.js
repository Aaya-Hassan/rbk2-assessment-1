var Stack = function() {
	//your code is here
	var someInstance={};
	var storage ={};
	var count=0;
 someInstance.add=function(value) {
 	storage[count]=value;
 	count++;
 },
 someInstance.remove=function() {
 	var remo=storage[Object.keys(storage)[Object.keys(storage).length-1]]
    delete storage[Object.keys(storage)[Object.keys(storage).length-1]]
    return remo;

 }	
 return someInstance;
};