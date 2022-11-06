//Task 2
//1
/*let value=prompt('type a number')
if (value > 0){
 alert(1)
}
else if(value < 0){
    alert(-1)
}
else{
    alert(0)
}
//2
let a = parseInt(prompt('Enter the first number:'));
let b = parseInt(prompt('Enter the second number:'));
function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}
let result = min(a, b);
console.log(`The min Number ${result}`);

//3

if (browser == 'Edge') {
    alert("You've got the Edge!");
} else if (browser == 'Chrome'
    || browser == 'Firefox'
    || browser == 'Safari'
    || browser == 'Opera') {
    alert('Okay we support these browsers too');
} else {
    alert('We hope that this page looks ok!');
}
//4
let a = +prompt('a?', '');

switch (a) {
    case 0:
        alert(0);
        break;

    case 1:
        alert(1);
        break;

    case 2:
    case 3:
        alert('2,3');
        break;
}*/
let add=(a,b)=>{
    let c=a+b
    console.log(c)
}
add(10,5)