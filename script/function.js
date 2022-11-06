//console.log("hello")//hello as input
//program which is going to print browser console
//output

//examples of inbuilt functions
//log()
//write()
//alert()
//prompt()

//user defined function
/**
 * 1. will take some input // not mandatory
 * 2. should process the input
 * 3. some output
 
//creating a function - function  definition
function printName()
{
console.log("hello john")
}
//DRY principle - dont repeat by yourself
//function call / invoke
printName()
printName()
printName()
printName()
//inputs
function printCustomName(fname,lname,age){
console.log(`Hello ${fname} ${lname} : your age is :${age}`)
}
printCustomName("john","anderson",23)
printCustomName("peter","Williams",25)
function sumOfNumbers(a,b){
    let c=a+b
    let d=a-b
    //console.log(c)
    //return 30  =>result will be 30
    //return c,d => result will be d
    return [c,d] 
}
//sumOfNumbers(20,30)
//console.log(sumOfNumbers(10,20))
let result=sumOfNumbers(30,40)
console.log(result[0],result[1])*/

//Math operations
//properties
console.log(Math.PI)
console.log(Math.SQRT2)
//functions
console.log(Math.abs(-10))
console.log(Math.abs(10))
console.log(Math.sqrt(16))
console.log(Math.ceil(4.3))
console.log(Math.floor(4.5))
console.log(Math.max(10,4,5))
console.log(Math.min(10,4,5))
console.log(Math.pow(3,2))
