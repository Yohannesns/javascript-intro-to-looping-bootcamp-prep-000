function forLoop(array){
  const myArray = [];
  const t = Math.floor(Math.random()*25)
  for(var i =0; i <t; i++){
    if (i=== 1){
    myArray.push(`I am ${1} strange loops`);
    }
    else{
      myArray.push(`I am ${i} strange loops`);
    }
  }
  return [myArray,t];
}
// function makeArray() {
//   const array = []
//   const t = Math.floor(Math.random() * 10)
// 
//   for (let i = 0; i < t; i++) {
//     array.push("I am a strange loop.")
//   }
// 
//   return [array, t]
// }