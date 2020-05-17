let baseSalary=30000;
let overtime=10;
let rate=20;

function getWage(baseSalary,overtime,rate){
    return baseSalary+(overtime*rate)
}

console.log(getWage(35000,1,10)); //didn't work with no ';'

//encapsulation
let employee= {
    baseSalary: 30000, //note the changes, just copy pasted from above and relaised that no 'let' required and no ';' required and instead ',' is required
    overtime: 10,
    rate: 20,
    getWage: function(){
        return this.baseSalary+(this.overtime*this.rate);
    }
};

console.log(employee.getWage(35000,10,20))