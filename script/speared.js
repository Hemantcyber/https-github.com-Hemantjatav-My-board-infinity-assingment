/*let studentDetails=["peter",23,9.0,"ECE","MIT University","Pune"]
//rest 
//let [...details,branch,univ,city]=studentDetails wrong
let [fname,age,cgpa,...misc]=studentDetails
console.log(misc)
//spread operator
let candidate=["TCS",...studentDetails,"5,00,000",]
console.log(candidate)
//rest on objects
let studentDetails={
    fname:"peter",
    age:23,
    cgpa:7.0
}
let {fname,...extra}=studentDetails
console.log(typeof extra)
//spread operator
let canidate={
    salary:"50,0000",
    ...studentDetails,
    company:"CTS",
    
}
console.log(canidate)
//function showDetails(fname,age,city)
function showDetails(fname,...details){
    let [age,city]=details
 //   console.log(`Studentname:${fname} city:${city} age:${age}`)
}
showDetails("peter",23,"Mumbai")
let showFunc=()=>console.log("this is a function")
//showDetails()
showFunc()*/

let add=(a,b)=>a+b
//let add=(a,b)=>{ return a+b}
let result=add(3,4)
console.log(result)

const areaOfSquare=(side)=>{
console.log("this a function")
console.log("second line")
return side*side
}
let result2=areaOfSquare(8)
console.log(result2)