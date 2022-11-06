//1.Using if..else, write the code which gets a number via prompt and then shows in alert:

//1, if the value is greater than zero,
//-1, if less than zero,
//0, if equals zero.
//In this task we assume that the input is always a number.

//2. Write a function min(a,b) which returns the least of two numbers a and b.

For instance:

min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1

//3. Write the code using if..else which would correspond to the following switch:
switch (browser) {
case 'Edge':
alert( "You've got the Edge!" );
break;

case 'Chrome':
case 'Firefox':
case 'Safari':
case 'Opera':
alert( 'Okay we support these browsers too' );
break;

default:
alert( 'We hope that this page looks ok!' );
}

//4. Rewrite the code below using a single switch statement:
let a = +prompt('a?', '');

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
}