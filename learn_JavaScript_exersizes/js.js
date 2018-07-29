'use strict'

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
//
// function checkSpam(str) {
//     var lowerStr = str.toLowerCase();
//
//     return !!(~lowerStr.indexOf('viagra') || ~lowerStr.indexOf('xxx'));
// }
//
// alert( checkSpam('buy ViAgRA now') );
// alert( checkSpam('free xxxxx') );
// alert( checkSpam("innocent rabbit") );