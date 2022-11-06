/*let no1=10
//let no2=new Number(20)
let no3=Number("30") //explicit type conversion
let res=Number("30")+70
let res2=String(30)+70
let res3=Boolean(0)//false , any +ve no or -ve no is true
let res4=Boolean("")// false
console.log(no1)
console.log(no3,typeof no3)
console.log(res2)
console.log(res4)
let eg=+"30"
console.log(eg)*/
let m1="20"
let m2=20
console.log(Number(m1)+m2)

let a=10
let b=0
let c=a/b
console.log(isNaN(c))
console.log(isNaN(a))
console.log(isFinite(10))//true
console.log(isFinite(c))//false

let no1="10"
let no2="hello10"
let no4="20hello"
let no3=123.45
console.log(parseInt(no1))
console.log(parseInt(no2))
console.log(parseInt(no4))

let no="12.5px"
console.log(parseFloat(no))

let salary=30000.560
console.log(salary.toFixed(1))

let sum=456000
console.log(sum.toExponential())
console.log(sum.toExponential(3))