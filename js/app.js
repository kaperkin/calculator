(function () {
    'use strict';

    var numbers = '';
    var equation = [];
    var buttons = document.getElementsByClassName('num');
    for(var b = 0; b <buttons.length; b++){
        buttons[b].addEventListener('click', function(){
            add(this.value);
        })
    }
    equal.addEventListener('click', function () {
        equals(equation)
    });
    plus.addEventListener('click', function () {
        equation.push(numbers, '+');
        numbers = '';
        return equation;
    });
    minus.addEventListener('click', function () {
        equation.push(numbers, '-');
        numbers = '';
        return equation
    });
    multiply.addEventListener('click', function () {
        equation.push(numbers, '*');
        numbers = '';
        return equation
    });
    divide.addEventListener('click', function () {
        equation.push(numbers, '/');
        numbers = '';
        return equation
    });
    allClear.addEventListener('click', function () {
        numbers = '';
        equation = [];
        total.innerHTML = '';
    });
    clearLast.addEventListener('click', function () {
        if (numbers.length > 0) {
            numbers = '';
            total.innerHTML = equation[equation.length - 2];
        } else {
            equation.pop();
            if (numbers.length == 0 && equation.length == 0) {
                total.innerHTML = 0;
            } else {
                total.innerHTML = equation[equation.length - 1];
            }
        }

    });


    function add(num) {
        numbers += num;
        total.innerHTML = numbers;
    }

    function equals(equation) {
        equation.push(numbers);
        var answer = Number(equation[0]);

        for (var i = 1; i < equation.length; i++) {
            var next = equation[i + 1];
            if (equation[i] == '+') {
                answer += Number(next);
            } else if (equation[i] == '-') {
                answer -= Number(next);
            } else if (equation[i] == '*') {
                answer *= Number(next);
            } else if (equation[i] == '/') {
                answer /= Number(next);
            }
        }
        total.innerHTML = answer;
        numbers = '';
        equation = [];
    }

})();

//( function ($) {
//    'use strict';
//    $(document).ready(function () {
//        var temp = '';
//        var entries =[];
//        var total = 0;
//        $("button").on('click', function () {
//            var val = this.value;
//            if (Number(val) || val == '.') {
//                temp += val;
//                $('#total').text(temp);
//            } else if(val == 'AC'){
//                temp = '';
//                entries = [];
//                total = 0;
//                $('#total').text(temp);
//            } else {
//                console.log('NAN');
//            }
//        });
//    })
//}(jQuery) );