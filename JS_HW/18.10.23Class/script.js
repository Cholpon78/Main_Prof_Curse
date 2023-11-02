class NumberArray{
    constructor(array){
        this.array = array
    }
    getLastElem(){
       return this.array[this.array.length - 1];
    }
} 
let number1 =new NumberArray([1,2,5,7,8,9])
console.log(number1.getLastElem());

