/**
 * Assignment Operator
 * =
 * +=
 * -=
 * *=
 * /=
 * %=
 
var x = 23;
var y = 55;
console.log("Assignment x += y:" + (x += y))
console.log("Assignment :" + (y))
console.log(y)
console.log(+x)
console.log("Assignment x -= y:" + (x -= y))
console.log("Assignment x *= y:" + (x *= y))
console.log("Assignment x /= y:" + (x /= y))
console.log("Assignment x %= y:" + (x %= y))
//Special Operator
//?:
//,
//delete
//in
//instactof
//new
//typeof
//void

//?:
let x = true;
let y = false;
var person = {
    firstname: "joel",
    lastname: "Christian",
    age: 28,
    eyecolor: "brown"
}

//?: operator
var z=y ? 23 : 42;
console.log('value of : ' + z)

//comma Operator
let a = (2,5,6,0);
console.log("value of a:" + a)

//delete
console.log(person)
delete person.lastname;
console.log(person)

//In operator
var z= 'age' in person ? true: false;
console.log(z)

//instance of operator
console.log("if person is a instance of string object: " + (person instanceof Object));

//'new operator
//var b = new abc();

//typeof
console.log(typeof x)

//void

javascript: void (person)


//let fname = prompt("Enter your name")
//console.log(fname)
var a=false;
if(a){
    console.log("If condition is working")
}
console.log("code not working please try again")


//if else
//let n=prompt("enter your per no.")
let marks = 66;

if(marks >= 35){
    console.log("Student has clear the examination")
}
else {
    console.log("Student has not cleared the exmaination")
}

// if else if

let day = 61;
if (day == 1){
    console.log("today is monday");
}else if(day == 2){
    console.log("today is tuesday");
}else if (day == 3){
    console.log("today is wednesday");
}else if(day == 4){
    console.log("today is thursday");
}else if(day == 5){
    console.log("friday");
}else if(day == 6){
    console.log("saturday")
}else if(day == 7){
    console.log("today is sunday")
}else{
    console.log("please enter a valid input between 1 to 7")
}

let grade= 'C'
switch(grade){
    case 'A':
        console.log("The student has secured A")
        break
    case 'B':
        console.log("The student secured B");
        break
    case 'C':
        console.log("The student secured C")
        break
    default:
        console.log("The student has not secured any grades")
    
}
switch(new Date().getDay()){
    case 1:
        console.log("Its Monday")
        break;
    case 2:
        console.log("Its Tuesday")
        break
    case 3:
        console.log("Its Wednesday")
        break
    case 4:
        console.log("Its Thursday")
        break;
    case 5:
        console.log("Its Friday")
        break
    case 6:
        console.log("Its Saturday")
        break;
    case 7:
        console.log("Its Sunday")
        break;
    default:
        console.log("Incorrect Input")
}
for(a =1; a<=50; a++){console.log(a)}
let b=1;
    
while(b <=5){
console.log(b);b++
}

let c=1;
do{
    console.log(c);
    c++
   
}while(c<=5);

let temp = "";

let person = {
    firstname: "hemant",
    lastname: "jatav",
    age: 24,
    qualification: "graduate",
}
for( value in person ){  //only work with object
    temp = temp + person[value] + " ",
    document.writeln(person[value]);
}
//document.writeln(temp)

var alphabets = ["A","B","C","D","E"];

//for(let i = 0; i <= alphabets.length - 1; i++){
    //console.log(alphabets[i])}

for( value of alphabets){
    console.log(value)// easy way to write for of 
}

let s = "Learnvern";
for( value of s){
    document.write(value + "<br>")
}

//this is function 
function showMe(){
    alert("Alert button is clicked!");
}
//<input type="button" onclick="showMe()" value="alert!"/>
*/
var add = new Function("num1","num2","return num1 + num2");
console.log(add(2,8))
console.log(add(10,10))