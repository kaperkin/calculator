(function () {
    'use strict';
    var zero = document.getElementById('zero');
    var one = document.getElementById('one');
    var two = document.getElementById('two');
    var three = document.getElementById('three');
    var four = document.getElementById('four');
    var five = document.getElementById('five');
    var six = document.getElementById('six');
    var seven = document.getElementById('seven');
    var eight = document.getElementById('eight');
    var nine = document.getElementById('nine');
    var decimal = document.getElementById('decimal');
    var total = document.getElementById('total');
    var plus = document.getElementById('plus');
    var minus = document.getElementById('minus');
    var multiply = document.getElementById('multiply');
    var percent = document.getElementById('percent');
    var divide = document.getElementById('divide');
    var allClear = document.getElementById('allClear');
    var clearLast = document.getElementById('clearLast');
    var equal = document.getElementById('equals');
    var numbers = [];
    var equation = [];
    zero.addEventListener('click', function(){add(0)});
    one.addEventListener('click', function(){add(1)});
    two.addEventListener('click', function(){add(2)});
    three.addEventListener('click', function(){add(3)});
    four.addEventListener('click', function(){add(4)});
    five.addEventListener('click', function(){add(5)});
    six.addEventListener('click', function(){add(6)});
    seven.addEventListener('click', function(){add(7)});
    eight.addEventListener('click', function(){add(8)});
    nine.addEventListener('click', function(){add(9)});
    decimal.addEventListener('click', function(){add('.')});
    equal.addEventListener('click', function(){equals(equation)});
    plus.addEventListener('click', function(){
        equation.push(Number(numbers.join('')), '+');
        console.log(equation);
        numbers = [];
        return equation;
    });
     minus.addEventListener('click', function(){
        equation.push(Number(numbers.join('')), '-');
        console.log(equation);
         numbers = [];
         return equation
    });
     multiply.addEventListener('click', function(){
        equation.push(Number(numbers.join('')), '*');
        console.log(equation);
         numbers = [];
         return equation
    });
       divide.addEventListener('click', function(){
        equation.push(Number(numbers.join('')), '/');
        console.log(equation);
         numbers = [];
         return equation
    });
    allClear.addEventListener('click', function(){
        numbers =[];
        equation = [];
        total.innerHTML = '';
    });
    clearLast.addEventListener('click', function(){
       if(numbers.length > 0){
           numbers.pop();
           console.log(numbers);
           total.innerHTML = numbers.join('');
       } else{
           equation.pop();
           total.innerHTML = numbers.join('');
           console.log(equation);
       }
    });


    function add(num) {
        numbers.push(num);
        console.log(numbers);
        total.innerHTML = numbers.join('');
    }

    function equals(equation){
        equation.push(Number(numbers.join('')));
        var answer = equation[0];
        //console.log(equation);
        for(var i = 0; i<equation.length; i++){
            if(Number(equation[i])){
                if(equation[i + 1] == '+'){
                    answer += equation[i +2];
                    i+= 2;

                    console.log('answer:  ' + answer);
                    console.log('i:  '+ i);
                }
                //console.log(equation[i]);
            } else{
                console.log('else statement');
            }
        }
    }

})();

// ( function ( $ ) {
// 'use strict';
// $( document ).ready( function () {
// console.log( 'working!' )
// })
//} ( jQuery ) );