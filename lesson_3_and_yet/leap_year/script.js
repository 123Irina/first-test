"use strict";
var userNumber = prompt('какой год?');

if ( userNumber == null ) {
    alert('Отмена ввода');
}
else if ( isNaN( userNumber ) == true ) {
    alert('Неверно указан год');
    }
    else if ( + userNumber == 0 ) {
    alert('Неверно указан год');
    }
     else if (userNumber % 4 > 0) {
        alert('Не високосный год');
    }
    else if ( userNumber % 100 == 0 && userNumber % 400 != 0 ) {
        alert('Не високосный год');
    }
    else alert('Год високосный');

