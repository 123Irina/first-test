"use strict";

var userNumber = prompt('Введите число от 0 до 10 000');
userNumber = userNumber.replace(/\s+/g,'');

if ( userNumber == null ) {
    alert('Отмена ввода');
}
else if ( isNaN( userNumber ) == true ) {
    alert('Неверно введено число');
    }
    else if ( userNumber > 10000 ) {
    alert('Неверно введено число');
    }
    else if ( userNumber < 0 ) {
    alert('Неверно введено число');
    }
    else if ( userNumber == '' ) {
    alert('Неверно введено число');
    }
     else {
        var thous = userNumber / 1000;
        thous = Math.floor (thous);

        var hundredths = (userNumber - 1000 * thous)/100;
        hundredths = Math.floor (hundredths);

        var dozens = (userNumber - 1000 * thous - 100 * hundredths)/10;
        dozens = Math.floor (dozens);

        var units = userNumber - 1000 * thous - 100 * hundredths - 10 * dozens;
        units = Math.floor (units);

        alert ( thous + ' тысяч ' + hundredths + ' сотен ' + dozens + ' десятков ' + units + ' единиц')
    }


