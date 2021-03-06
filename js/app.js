/*(function () {
//    'use strict';
//
//    var numbers = '';
//    var equation = [];
//    var buttons = document.getElementsByTagName('button');
//    for (var b = 0; b < buttons.length; b++) {
//        buttons[b].addEventListener('click', function () {
//            var val = this.value;
//            if (val === '0') {
//                add('0');
//            }
//            if (Number(val) || val == '.') {
//                add(this.value);
//            }
//            switch (val) {
//                case '=':
//                    equals(equation);
//                    break;
//                case '-':
//                    pushIt('-');
//                    break;
//                case '+':
//                    pushIt('+');
//                    break;
//                case '*':
//                    pushIt('*');
//                    break;
//                case '/':
//                    pushIt('/');
//                    break;
//                case 'AC':
//                    numbers = '';
//                    equation = [];
//                    total.innerHTML = '';
//                    break;
//                case 'CE':
//                    if (numbers.length > 0) {
//                        numbers = '';
//                        total.innerHTML = equation[equation.length - 2];
//                    } else {
//                        equation.pop();
//                        if (numbers.length == 0 && equation.length == 0) {
//                            total.innerHTML = 0;
//                        } else {
//                            total.innerHTML = equation[equation.length - 1];
//                        }
//                    }
//                    break;
//            }
//
//        })
//    }
//
//    function pushIt(val) {
//        equation.push(numbers, val);
//        numbers = '';
//    }
//
//    function add(num) {
//        console.log(num);
//        console.log(typeof num);
//        numbers += num;
//        total.innerHTML = numbers;
//    }
//
//    function equals(equation) {
//        equation.push(numbers);
//        var answer = Number(equation[0]);
//
//        for (var i = 1; i < equation.length; i++) {
//            var next = equation[i + 1];
//            if (equation[i] == '+') {
//                answer += Number(next);
//            } else if (equation[i] == '-') {
//                answer -= Number(next);
//            } else if (equation[i] == '*') {
//                answer *= Number(next);
//            } else if (equation[i] == '/') {
//                answer /= Number(next);
//            }
//        }
//        total.innerHTML = answer;
//        numbers = '';
//    }
//})
//();
*/

( function ($) {
    'use strict';
    $(document).ready(function () {
        var numbers = '';
        var equation = [];

        $("button").on('click', function () {
            var val = this.value;
            if (val === '0') {
                add('0');
            }
            if (Number(val) || val == '.') {
                add(this.value);
            }
            switch (val) {
                case '=':
                    equals(equation);
                    break;
                case '-':
                    pushIt('-');
                    break;
                case '+':
                    pushIt('+');
                    break;
                case '*':
                    pushIt('&times');
                    break;
                case '/':
                    pushIt('&#247');
                    break;
                case '%':
                    pushIt('%');
                    break;
                case 'AC':
                    numbers = '';
                    equation = [];
                    total.innerHTML = '';
                    break;
                case 'CE':
                    if (numbers.length > 0) {
                        numbers = '';
                        total.innerHTML = equation.join(' ');
                    } else {
                        equation.pop();
                        if (numbers.length == 0 && equation.length == 0) {
                            total.innerHTML = 0;
                        } else {
                            total.innerHTML = equation.join('');
                        }
                    }
                    break;
            }
            function pushIt(val) {
                equation.push(numbers, val);
                numbers = '';
                total.innerHTML = equation.join(' ') + ' ' + numbers;
            }

            function add(num) {
                numbers += num;
                total.innerHTML = equation.join(' ') + ' ' + numbers;
            }

            function equals(equation) {
                equation.push(numbers);
                var answer = Number(equation[0]);
                if (!Number(answer)) {
                    equation = [];
                }
                for (var i = 1; i < equation.length; i++) {
                    var next = equation[i + 1];
                    if (equation[i] == '+') {
                        answer += Number(next);
                    } else if (equation[i] == '-') {
                        answer -= Number(next);
                    } else if (equation[i] == '&times') {
                        answer *= Number(next);
                    } else if (equation[i] == '&#247') {
                        answer /= Number(next);
                    }
                }

                if (equation.indexOf('%') > -1) {
                    answer = answer.toString() + '%';
                    total.innerHTML = answer;
                } else {
                    answer = answer.toString();
                    total.innerHTML = answer;
                }
                numbers = '';
            }
        });
    })
}(jQuery) );
