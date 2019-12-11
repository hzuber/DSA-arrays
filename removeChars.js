function removeChars(str, c){
  let newString = "";
  for (let i = 0; i < str.length; i++){
    const thisC = str.charAt(i);
    if(!c.includes(thisC)){
      newString = newString + thisC;
    }
  }
  console.log(newString);
}