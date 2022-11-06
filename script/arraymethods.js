let fruits=["apple","grape","butterfruit","orange","pomo"]
console.log(fruits[0])
/*for(let fruit=0;fruit<5;fruit++){
    console.log(fruits[fruit])
}
for(let i=0;i<5;i++){
    console.log(fruits[i])
}
for(let fruit of fruits){
    console.log(fruit)
}*/

//array methods
//toString()
console.log(fruits.toString())
console.log(fruits.join(" "))

//pop()
//removes the last element from the array
/*console.log(fruits.pop())
console.log(fruits.pop())
console.log(fruits)
//push()
console.log(fruits.push("mango"))
console.log(fruits)
//shift()
console.log(fruits.shift())
console.log(fruits)
//unshift()
console.log(fruits.unshift("Mango"))
console.log(fruits)
delete fruits[2]
console.log(fruits)
//splice()
console.log(fruits.splice(2,1))
console.log(fruits)
console.log(fruits.splice(2,0,"Mango","berries"))
console.log(fruits)
//concat()
let vegies=["okra","beans","carrots"]
let healtier_options=fruits.concat(["meat","eggs","fish"],vegies)
let healtier_options=fruits.concat(vegies)
let healtier_options=fruits.concat(["meat","eggs","fish"])
console.log(healtier_options)
//slice()
console.log(fruits.slice(2,4))
console.log(fruits.slice(-4,-1))
//es6 methods - transform methods
let add=(a,b)=>{
    let c=a+b
    console.log(c)
}
add(10,5)
fruits.forEach(
    (element)=>{
        console.log(element)
    }
)
fruits.forEach(
    (item)=>
    {
        console.log(item)
    }
)
//filter()
for(let item of fruits){
    if(item.length>5){
        console.log(item)
    }
console.log(fruits.filter(
    (item)=>
    {
        return item.length>5
    }
    
))
let result=fruits.filter(
    (item)=>item.length>5&&item==="orange" 
)
console.log(result)
let result1=fruits.filter(
    (item)=>item.length>5
)
console.log(result1)
let result=fruits.find(
    (item)=>item.length>5
)
console.log(result)
//indexOf //lastIndexOf()
//map , some , every ,reduce
let inputs=[1,2,3,4]
// [2,4,6,8]
let output=[]
for(i=0;i<inputs.length;i++){
    let ele=inputs[i]*2
    output.push(ele)
}
console.log(output)
let inputs=[11,20,30,45]*/

/*let output=inputs.map(
    (item)=>{
        return item*2
    }
)
let output=inputs.map((item)=>item*2)
console.log(output)
let students=[
    {
        fname:"john",
        cgpa:9.0,
        city:"Delhi",
        placed:"XYZ"
    },
    {
        fname:"peter",
        cgpa:8.0,
        city:"Mumbai",
        placed:"ABC"
    },
    {
        fname:"henry",
        cgpa:7.8,
        city:"Delhi",
        placed:"ABC"
    },
]
// list all the students placed in ABC 
//find the first person who is from delhi
//print the student details
let placedABC=students.filter((student)=>student.placed==="ABC")
console.log(placedABC)
let delhi=students.find((student)=>student.city==="Delhi")
console.log(delhi)
students.forEach((item)=>console.log(item))
let inputs=[10,20,30,42]
let output=inputs.every((ele)=>ele%2===0)
console.log(output)
let students=[
    {
        fname:"john",
        cgpa:9.0,
        city:"Delhi",
        placed:"XYZ"
    },
    {
        fname:"peter",
        cgpa:8.0,
        city:"Mumbai",
        placed:"ABC"
    },
    {
        fname:"henry",
        cgpa:7.0,
        city:"Delhi",
        placed:"ABC"
    },
]
let criteria=students.every((ele)=>ele.cgpa>=7.5)
console.log("cgpa",criteria)
let inputs=[10,20,30,42]
let sum=0
for(let i=0;i<inputs.length;i++){
    sum=sum+inputs[i]
}
console.log(sum)
let sum=inputs.reduce((prev,current)=>{
    console.log(prev,current)
    return prev+current //60
})
let inputs=[10,20,30,42]
let sumofArray=inputs.reduce((prev,current,third,fourth)=>{
    console.log(third)
    console.log(fourth)
}
)*/