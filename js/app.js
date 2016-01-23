(function () {
    'use strict';

    var numbers = '';
    var equation = [];
    var buttons = document.getElementsByTagName('button');
    for (var b = 0; b < buttons.length; b++) {
        buttons[b].addEventListener('click', function () {
            var val = this.value;
            if (Number(val) || val == '.') {
                add(this.value);
            } else if (val == '=') {
                equals(equation)
            } else if (val == '-') {
                pushIt('-')
            } else if (val == '+') {
                pushIt('+')
            } else if (val == '*') {
                pushIt('*')
            } else if (val == '/') {
                pushIt('/')
            } else if (val == 'AC') {
                numbers = '';
                equation = [];
                total.innerHTML = '';
            } else if (val == 'CE') {
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
            }
        })
    }

    function pushIt(val) {
        equation.push(numbers, val);
        numbers = '';
    }
    
    function add(num) {
        numbers += num;
        total.innerHTML = numbers;
        console.log(equation, numbers);
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
//            } else if (val == 'CE'){
//                console.log('NAN');
//            }
//        });
//    })
//}(jQuery) );