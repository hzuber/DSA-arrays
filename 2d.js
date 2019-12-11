function twoD(arr){
  let height = arr.length;
  let length = arr[0].length;
  var result = new Array(height);
  
  for (let inner = 0; inner < height; inner++){
    result[inner] = new Array(length)
  }
  
  for (let i = 0; i < height; i++){
    for (let j = 0; j< length; j++){
        console.log("ij is ", i, j, result)
      
      if (arr[i][j] === 1){
        result[i][j] == undefined ? result[i][j] = 1 : result[i][j] = 0;
        
      } else {
        //console.log("change, i is ", i, "j is ", j)
        
        for (let y=0; y < result.length; y++){
          for (let x=0; x < result[y].length; x++){
            
            if (y === i){
              //console.log("y is ", y, "i is ", i, "yx is ", y, x)
              result[y][x] = 0;
            }
            if (x === j){
              //console.log("x is ", x, "j is ", j, "yx is ", y, x)
              result[y][x] = 0
            }
            
          }
        }
        
      }
    }
  }
  console.log("end ", result)
}

const inputArr = 
      [
        [1,0,1,1,0],
        [0,1,1,1,0],
        [1,1,1,1,1],
        [1,0,1,1,1],
        [1,1,1,1,1]
      ];

twoD(inputArr)
[3][1]