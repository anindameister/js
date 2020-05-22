const numbers=new Array(1,2,3,4,5,true,'fruits'); //new:-constructor
console.log(numbers)
console.log(numbers[1])
numbers[7]="love"
numbers.unshift("strawberry") //inserts item at the beginning
console.log(numbers)
numbers.pop(2) //<------took out the last one no matter what number you give here
console.log(numbers)

let number=new Array(1,2,3,4,5,true,'fruits'); 
number=(6)
console.log(number)
let x=[7]
console.log(x)
//append(python)=push(js)
//pop()<---python--->js
//but---not the same with js here, no matter what number you put inside pop the last item is popped out.
console.log(Array.isArray(numbers))
console.log(Array.isArray(number))
console.log(numbers.indexOf(3))