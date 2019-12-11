function products(arr){
  const products = [];
  for (let i = 0; i< arr.length; i++){
    let leftArr = arr.slice(0, i)
    let rightArr = arr.slice(i+1)
    let newArr = leftArr.concat(rightArr)
    let product = newArr.reduce((acc, curr) => acc * curr)
    products.push(product)
  }
  return console.log(products)
}