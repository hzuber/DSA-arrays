function maxSum(array){
  const sums = [];
  for (let i = 1; i < array.length; i++){
    const leftArray = array.slice(0, i);
    const rightArray = array.slice(i);
    sums.push(leftArray.reduce((acc, val)=> acc+val));
    sums.push(rightArray.reduce((acc, val)=> acc+val));
  }
  console.log(Math.max(...sums))
}