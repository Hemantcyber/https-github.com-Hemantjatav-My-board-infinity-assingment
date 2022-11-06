// start is should be finite
//end should be finite
// execute some process continously from start to end
/**
 * for loop
 * for in 
 * for of
 * while
 * do while
 */
//for loop
/*for(initialization of looping variable ;stop condition ; step value )
for(let i=1;i<=15;i=i+1)
{
    console.log(i) // 1 2 3 ..... 15
}
let i=1
for(;i<=15;i=i+2)
{
    console.log(i) // 1 3 5 7 9 11 13 15
}
for(let i=1;i<=15;){
    console.log(i) // 1  for infinite times
}
let i=1
for(;;){
    if(i<=15){
        console.log(i) 
        i=i+1
    }
    
}
let i=16
while(i<=15){
    console.log(i)
    i=i+1 
}*/
/* initialization is global
while(stop condition){
//processing
step count
}*/
/**
 * do while
 * initlization global
 * do{
 * //processing
 * step count
 * }while(condition);
 */
 let i=1
 do{
     console.log(i) // 1 2 
     i=i+1 // 3
 }while(i<=200)
 