var makeHashTable = function() {
  //Do not change the max!
  var max = 4;
  return {
    _storage: [],

retrieve = function(key) {
      //your code is here
      var ind = hashFn(key,max);
  for (var i = 0; i < _storage[ind].length; i++) {
    if(storage[ind][i][0]===key){
      return storage[ind][i][1];
    }
  }
      
  }

insert = function(key, value) {
     //your code is here
     var ind=hashFn(key,max)
     var flag=true;
     if(_storage[ind]===undefined){
      _storage[ind]=[];
     }
     for (var i = 0; i < _storage[index].length; i++) {
       if(_storage[ind][i][0]===key){
        _storage[ind][i][1]=value;
      flag=false
      }
     }
  if(flag){
    _storage[ind].push([key,value])
  }
};

 





// This is a "hashing function". You don't need to worry about it, just use it to turn any key into a pseudo-random key
var hashFn = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    hash = (hash << 5) + letter.charCodeAt(0);
    hash = (hash & hash) % max;
  }
  return hash;
}
}