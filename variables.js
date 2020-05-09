let name='aninda' //let x=1 and later x=x+1

let score=100
score=score+100

let bonus=20
bonus=30

const a= score+bonus //notice let a had 220, after bonus was changed to 30 
//and at the same time const added before a the final output of a stayed 220 and didnt change to 230

console.log(a)

let firstName='aninda'
firstName='arunava'
const lastName='maulik'
//lastName='chatterjee' will give an error because lastName cannot be changed now

let fullName=firstName+'**'+lastName

console.log(firstName+' '+lastName)
console.log(fullName)
console.log(a)