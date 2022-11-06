//desturcting arrays and string

/*let studentDetails=["peter",23,9.0,"ECE","MIT University"]
//let [fname,age=0,cgpa]=studentDetails wrong 
let [fname,age,cgpa,branch,collge="XYZ",company="CTS"]=studentDetails
console.log(fname)
console.log(age)
console.log(cgpa)
console.log(branch)
let fruits="Apple Orange Pineapple"
let [fr1,fr2,fr3]=fruits.split(" ")
console.log(fruits.split(" "))
console.log(fr1)
console.log(fr2)
console.log(fr3)
let example="abcd"
let [al1,al2,al3,al4,al5="e"]=example
console.log(al1)
console.log(al2)
console.log(al3)
console.log(al4)
console.log(al5)*/

//destrcuting an object
let studentDetails={
    fname:"peter",
    age:23,
    cgpa:7.0
}
let {fname,cgpa,age}=studentDetails
console.log(fname)//peter
console.log(age)//7.0
console.log(cgpa)//23

let company={
    CTS:"20,000",
    TCS:"30,000",
    Wipro:"40,000"
}
let {CTS:a,Wipro:c,TCS:b,Capgemini:d="50,000"}=company
console.log(a)
console.log(b)
console.log(c)
console.log(d)