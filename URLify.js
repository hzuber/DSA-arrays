function URLify(string){
    var res = string.split(" ");
    var joined = res.join("%20");
    return joined
}