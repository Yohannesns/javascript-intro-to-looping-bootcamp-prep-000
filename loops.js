function forLoop(array){
  var myArray = [];
  for(var i =0; i <25; i++){
    if (i=== 1){
    myArray.push("I am ${1} strange loops");
    }
    else{
      myArray.push("I am ${i} strange loops");
    }
  }
  return myArray;
}
