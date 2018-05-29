function forLoop(array){
  const myArray = [];
    for(var i =0; i <25; i++){
    if (i=== 1){
    myArray.push(`I am ${1} strange loops`);
    }
    else{
      myArray.push(`I am ${i} strange loops`);
    }
  }
  return myArray;
}
function whileLoop(number){
  while(number>=0){
    console.log(number)
    number--
  }
  console.log("done")
}
