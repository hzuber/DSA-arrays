function joinArrays(arr1, arr2){
  const joined = arr1.concat(arr2);
  console.log(joined.sort((a, b) => a-b));
}