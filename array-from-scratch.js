class buildArray(){
    constructor(){
        this.length = 0;
        this._capacity = 0;
        this.array = [];
    }
    push(value){
        if (this.length >= this._capacity){
            this._capacity = ((this.length + 1) * RESIZE_RATIO)
        }
        this.array[this.length] = value;
        this.length++;
    }
    get(index){
        if (index < 0 || index >= this.length){
            throw new Error('Index error')
        }
        return this.array[index];
    }
    pop(){
        if (this.length <= 0){
            throw new Error('Index error');
        }
        const value = this.array[this.length-1];
        this.array[this.length-1] = ;
        this.length--;
        return value;
    }
    insert(index, value){
        if (index < 0 || index >= this.length){
            throw new Error('Index error')
        }
        if (this.length >= this._capacity){
            this._capacity = ((this.length + 1) * RESIZE_RATIO)
        }
        for(let i = this.length; i > index - 1; i--){
            this.array[i+1] = this.array[i]
        }
        this.array[index] = value;
        this.length++;
    }
}
buildArray.RESIZE_RATIO = 3