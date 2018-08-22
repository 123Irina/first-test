'use strict';



var xhr = new XMLHttpRequest();
xhr.open('GET', 'js/employees.json', false);
xhr.send();

var obj = JSON.parse(xhr.responseText);
console.log(obj);


xhr.onreadystatechange = function() {
    var li = [];
    for (var i = 0; i < obj.length; i++) {
        if (obj[i].inoffice == true) {
            var a = obj[i].name;
            var b = '<li class="in">' + a + '</li>';
            // console.log (b);
        } else
        if (obj[i].inoffice == false) {
            a = obj[i].name;
            b = '<li class="out">' + a + '</li>';
            // console.log (b);
        }
        li.push(b)
    }
    // console.log (strLi);
    document.getElementById('employeeList').innerHTML = '<ul class="bulleted" id="bullet"></ul>';
    document.getElementById('bullet').innerHTML = li.toString();
};

xhr.onreadystatechange();
