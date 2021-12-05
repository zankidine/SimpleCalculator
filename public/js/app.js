/**
 * Simple Calculator JS
 */

// External variables
const detail = document.querySelector('.detail');
const result = document.querySelector('.result');


// Number button
const zero = document.querySelector('.zero');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const tree = document.querySelector('.tree');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const sevent = document.querySelector('.sevent');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');

// Operator
const percent = document.querySelector('.percent');
const divide = document.querySelector('.divide');
const multiply = document.querySelector('.multiply');
const sub = document.querySelector('.sub');
const add = document.querySelector('.add');

// Comma && equal button
const equal = document.querySelector('.equal');
const comma = document.querySelector('.comma');

// clear screen
const clear = document.querySelector('.clear');

// Events number
eventClickNumber(zero);
eventClickNumber(one);
eventClickNumber(two);
eventClickNumber(tree);
eventClickNumber(four);
eventClickNumber(five);
eventClickNumber(six);
eventClickNumber(sevent);
eventClickNumber(eight);
eventClickNumber(nine);

// Events operator
eventClickOperator(add);
eventClickOperator(sub);
eventClickOperator(divide);
eventClickOperator(multiply);

/**
 * Event click number
 * @param {*} number 
 */
function eventClickNumber(number) {
    //

    number.addEventListener('click', numberClick);

    function numberClick () {
        if (detail.textContent == '0') {
            detail.textContent = number.textContent;
        } else {
            detail.textContent = detail.textContent + number.textContent;
        }
    }
}

/**
 * 
 * @param {*} operator 
 */
function eventClickOperator(operator) {

    operator.addEventListener('click', operatorClick);

    function operatorClick() {
        if(detail.textContent == '0') {
            detail.textContent = '';
        } else {
            if(result.textContent != '') {
                if(operator.textContent == '') {
                    detail.textContent = result.textContent + ' ' + '/' + ' ';
                } else {
                    detail.textContent = detail.textContent + ' ' + '/' + ' ';
                }

                if(operator.textContent == 'X') {
                    detail.textContent = result.textContent + ' ' + '*' + ' ';
                } else {
                    detail.textContent = detail.textContent + ' ' + '*' + ' ';
                }
                detail.textContent = result.textContent + ' ' + operator.textContent + ' ';
            } else {
                detail.textContent = detail.textContent + ' ' + operator.textContent + ' ';
            }
        }
    }
}



// Events clear screen
clear.addEventListener('click', () => {
    // Clear screen

    detail.textContent = '';
    result.textContent = '';
    result.style.display = 'none';
})

// Events equal
equal.addEventListener('click',() => {
    // if detail == 0 then detail == '' else detail concatenate +
    if(detail.textContent == '') {
        return;
    } else {
        r = eval(detail.textContent);
        result.textContent = Number((r).toFixed(3));
        result.style.display = 'block';
    }

})

// Events comma
comma.addEventListener('click',() => {
    //
    detail.textContent = detail.textContent + '.';
})


// Mode dark

const light = document.querySelector('.sun');
const dark = document.querySelector('.moon');
const container = document.querySelector('.container');

