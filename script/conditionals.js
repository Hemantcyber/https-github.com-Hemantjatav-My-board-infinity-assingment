/*let wish="tea"
//conditionals
/*
simple if
if else
if elseif esle
switch

if(wish==="tea"){
    console.log("prepare tea")
}
console.log(end)

let age=19
if(age>=18){
    console.log("you are eligible for voting")
    console.log('go to booth no.12')

}

else{
console.log('you are not eligible for voting')
}
let wish='sandwich'
if(wish==='coffee'){
    console.log('prepare coffee')
}
else if(wish==='tea'){
    console.log('prepare tea')
}
else if(wish==='juice'){
    console.log('prepare juice')
}
else{
    console.log("give some water")
}

let age=18
switch(age){
    case 10:
        console.log("age is 10")
    case 18:
        console.log("age is 18")
        console.log('you are eligible')
}
let day=8
switch(day){
    case 0:
        console.log('sunday')
        break
    case 1:
        console.log('monday')
        break
    case 2:
        console.log('tuesday')
        break
    default:
        console.log('day order does not exixts')
        break  
    
}

let department="CSE"
switch(department){
    case "CSE":
        console.log("go to second floor")
        break
    case "MECH":
        console.log("go to third floor")
        break
    case "ECE":
        console.log("go to first floor")
        break
        default:
            console.log("wrong input")
}
let number=10
switch(number>0)
{
    case true:
        console.log("positive no")
        break
    case false:
        console.log("negative no")
        break
}
//scope
// let vs var
let country="India"//global 
if(country==="India")
{
   // var state="Kerala" -> it will be accessed outside the block -> not right , use let
let state="Kerala"//local to the block
console.log(`the country is ${country} and the state is ${state}`)
}
//console.log(`the country is ${country} and the state is ${state}`)


let day = 9
switch (day){
    case 0:
        console.log('sunday')
        break
    case 1:
        console.log('monday')
        break
    case 2:
        console.log('tuesday')
        break
    case 3:
        console.log('wednesday')
        break
    case 4:
        console.log('thursday')
        break
    case 5:
        console.log('friday')
        break
    case 6:
        console.log('saturday')
        break
    default:
        console.log('day order does not exist')
        break
}

let department='ECE'
switch(department){
    case "CSE":
        console.log("go to ground floor")
        break
    case "MECH":
        console.log("go to first floor")
        break
    case "ECE":
        console.log("go to second floor")
}*/


let number=18
switch(number>18){
    case true:
        console.log("positive no.")
        break
    case false:
        console.log("negative no.")
        break
    default:
        console.log("enter the valid number")
}