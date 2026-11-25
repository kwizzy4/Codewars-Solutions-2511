function highAndLow(numbers){
  let max = -Infinity;
  let min = Infinity;
  
  for (let num of numbers.split(/\s+/)){
    let n = Number(num);
  
  if (n > max) max = n;
  if (n < min) min = n;
  }
return `${max} ${min}`;
}
