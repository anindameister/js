console.log("hello world");
let name="aninda"; //string literal
console.log(name)
// cannot be a reserved keyword eg:if
//should be meaningful
//cannot start with a number(1name)
//cannot contain a space or (-)hyphen
//variables are case-sensitive
let firstname="aninda" , lastname="maulik";
let fullname=firstname+"**"+lastname
console.log(fullname)
const interestRate=0.3

let age=31 //number literal
let isApproved= false; //boolean literal
let middleName=undefined; //undefined is a type and value
let thirdName=null; // in situation where we wanna clear the value of variable

let person = {name:'Arunava', age:27}
console.log(interestRate)
console.log(person)

//Dot notation
person.name="Kalpana"
console.log(person.name)

//bracket notation
person['name']='Asish'
console.log(person['name'])

let selection='name'
person[selection]='Ashim'
console.log(person[selection])
console.log(person[selection]="Gouri")

let selectedColour=["red","green","blue"]
selectedColour[2]="brown"
selectedColour[2]=00000
console.log(selectedColour[2]) //technically an array is an object
console.log(selectedColour)
console.log(selectedColour.length) //an array is a datastructure that we use to represent a list of items

//performing a task
function greet(name,lastName){
    console.log('hello',name," ",lastName);
}
greet("aninda","maulik"); //'aninda' is an argument to the greet function and 'name' is a paramenter of the greet function
//default vALUE of a variable is undefined and we get to see that if we fail to pass on the required argument corresponding to the parameter

function square(number){
    return number*number
}

let value=square(3);
console.log(value)

