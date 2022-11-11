//desturcting arrays and string

/*let studentDetails=["peter",23,9.0,"ECE","MIT University"]
//let [fname,age=0,cgpa]=studentDetails wrong 
let [fname,age,cgpa,branch,collge="XYZ",company="CTS"]=studentDetails
console.log(fname)
console.log(age)`
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
console.log(al5)

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
console.log(d)*/

//practice
let studentDetails=["peter",25,7.8 ,"ECE"]
let [fname,age,cgpa,branch,collge="DU"]=studentDetails
console.log(fname)
console.log(age)
console.log(cgpa)
console.log(branch)
console.log(collge)

let fruits ="Apple Orange Pineapple"
let [fr1,fr2,fr3]=fruits.split(" ")
console.log(fruits.split(" "))
console.log(fr1)
console.log(fr2)
console.log(fr3)



let company={
    wipro:"40000",
    samsung:"50000",
    hire:"34200"
    
}
let {wipro:w,...extra}=company
console.log(typeof extra)
//console.log(typeof extra)
let canidate={salary:"500000",...extra,company:"cts"}
console.log(canidate)


function showDetails(...details){
    console.log(details)
    let [fname,age,city]=details
   // console.log(`Studentname:${fname} city:${city} age:${age}`)
}
showDetails("peter",29,"mumbai","colloge","40000","50000","34200"
)


let add=(a,b)=>a+b
let result=add(34,3)
console.log(result)


let areaOfsquare=(side)=>side*side
let take=areaOfsquare(8)
console.log(take)

const ano=(side)=>{
    console.log("this a function")
    console.log("second line")
    return side*side
}
let result2=ano(8)
console.log(result2)


let a=10
console.log(++a)
console.log(a++)
console.log(a)
console.log((a++)+10)

let option ="coffee"
if (option==="coffee"){
    console.log("i want coffee")
}
else{
    console.log("i want tea")
}
option==="coffee"?console.log("i want coffee"):console.log("i want tea")




  
(function(a){
    return (function(){
      console.log(a);
      a = 6;
    })()
   })(21);
   
   

const obj1 = {first: 20, second: 30, first: 50 ,third:50};
console.log(obj1);


var q=1;
var d=0;
while (q <= 5)
{
    q++;
    d += q *  2;
    console.log(d);
}
var r = Math.max();
var t = Math.min();
console.log(r)
console.log(t)
console.log(parseInt("Hello123"));
console.log(NaN===NaN)
console.log(typeof(NaN))