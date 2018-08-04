'use strict';

// Checked SPAM
var str = prompt( 'Write text' );
str = str.toLowerCase();
var viagra = 'viagra',
    xxx = 'xxx';
function checkSpam(str) {
    if (~str.indexOf("viagra")) {
        alert( 'SPAM' );
    }
    if (~str.indexOf("xxx")) {
        alert( 'SPAM' );
    }
}
checkSpam(str);

//Sum of two prompts

var numOne = prompt('Введите первое число');
var numTwo = prompt('Введите второе число');
//console.log(numTwo);
numOne = +numOne;
numTwo = +numTwo;
var sum = numOne + numTwo;
alert (sum);