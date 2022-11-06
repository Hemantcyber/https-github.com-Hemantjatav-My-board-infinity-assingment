/*var a="99"
var num = Number(a)
console.log(num+10)

let rajHave="12 12"
let num = Number(rajHave)
console.log(num+12)

var a ="99.88"
var num=parseFloat(a)
console.log(num)

var a =23432
var b = Number.isFinite(a)
console.log(b)

var a =4.23133
var b =a.toPrecision(4)
console.log(b)

var a =4.23133
var b =a.toFixed(4)
console.log(b)

var d=true
var e=Number.isInteger(d)
console.log(e)

var d="234.23"
var e=Number.parseInt(d+3)
console.log(e)

let b= alert("Hello Student!")
let a= prompt("enter your name please")
console.log(a)

//alert prompt with if else

let per=prompt("Enter your parecentage here")
if(per >= 80 && per < 100){
   console.log("you are in merit")

}else if(per >=60 && per < 80){
    console.log("you are in 1st division")
}
else if(per >= 45 && per < 60){
    console.log("you are in 2nd division")

}else if(per >= 33 && per < 45){
    console.log("you are in third division")

}else if(per < 33){
    console.log("you are fail")

}else{
    console.log("please enter valid perecentage.")
}
//let a=prompt("please enter your name here!")
//console.log(a)
//let b=alert("hello world")


for(var a = 1; a<= 9; a++){
    document.write("try for loop!");
}

for(let a = 1; a<= 89; a++){
    console.log("hello world")
    document.write("hello again!")
}

var obj = {
    firstName: "hemant",
    lastName: "kumar",
    age: 23,
    email: "hemanthikke@gmail.com"
}
for(var key in obj){
    document.write(key + "   :   " + obj [key] + "<br>");
}

var to=10;
document.write("<ul>")

while(to >= 1){
    document.write("<li>" + to + ")hello india again!</li>")
    to = to - 1;
}document.write("</ul>")

const myStr = ("I am a \"double quoted\" string inside \"double quotes\".")
for(let a=1; a<=45; a++)

document.write(a+myStr)

let now= new Date();
console.log(now);
document.write(now)
//while loop!
 let a=1;
 document.write("<ul>")
 while(a<=155){
    document.write(a+ ") HEMANT JATAV! <br>")
    a=a+1;
 }document.write("</ul>")
 
 let b=1;
 while(b<=10){
    document.write(b+ ")write again this name <br>")
    b=b+1;
 }

 let c=100;
 document.write("<ul>")
 while(c >= 1){
    document.write(c+ ".... HEMANT JATAV! <br>")
    c=c-1;
 }document.write("</ul>")

 //Do while loop!

 let f=1;
 do{
    document.write(f +"HELLO JATAV!<br>")
    f=f+1
 }while(f <=10)

//for loop!

for(let e= 1; e<= 100; e++){
    document.write(e+ "HELLO AGAIN FOR LOOP!<br>")
}

for(let f= 1; f<= 10; f++){
if(f==3){
    document.write("Hey 2nd:" +f+ "<br>")
    //continue;
    break;
}

document.write("Hey again number! :" +f+ "<br>")
}
//find number with loops
for(let g= 1; g<= 10; g++){
    if(g % 2 == 0)
    document.write(g + "<br>")
}
//nested loop!

for(let h =1; h <= 100; h = h+10){
  //  for (var a =h; a< a+10; a++)
    document.write(h + "<br>") 
    //{document.write(a + " ")
}

for(let b=1;){
        document.write(b + " ");
    };
   // document.write("<br>")


for(let k=1; k<=5; k=k+10){
   //document.write(k +"<br>")
    for(let b = k; b < k+5 ; b++){
        document.write(b);
    }
   document.write("<br>")
}

for(let a=1; a<=10; a++){
    for(var b=1; b<= a; b++){
        document.write(a + " ")
    }
    document.write("<br>")
}

for(let a=15; a>=1; a--){
    for(var b=a; b>= 1; b--){
        document.write(b)
    }
    document.write("<br>")
}

function printCustomName(fname,lname,age){
    console.log(`Hello! ${fname} ${lname}: your age is: ${age}`)
}
printCustomName("john","anderson",24)
printCustomName("peter","williams",27)

function printName()
{
    console.log("Hello! Hemant")
}
printName()
printName()
printName()
printName();printName()*/

function sumOfNumbers(a,b){
    let c=a+b
    let d=a-b
    console.log(c)
    //return 30
   return[c,d]

}
sumOfNumbers(30,40)
console.log(sumOfNumbers(30,40))
//let result=sumOfNumbers(30,40)
//console.log(result)