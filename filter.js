function filter(array, value){
    const filteredArray = [];
    for(let i = 0; i < array.length; i++){
        if (array[i] === value){
            filteredArray.push(value);
        }
    }
    return console.log(filteredArray);
}