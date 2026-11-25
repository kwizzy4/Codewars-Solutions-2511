function descendingOrder(n){
  let arr = String(n)
  .split('')
  .sort()
  .reverse();
  
//   for (let i = 0; i < arr.length; i++){
//     for (let j + 1; j < arr.length; j++){
//       if (Number(arr[i]) < Number(arr[j])){
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
  
return Number(arr.join(''));
}
