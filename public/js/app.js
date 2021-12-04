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
zero.addEventListener('click',() => {
    // if detail == 0 then detail == 0 else detail concatenate 0
    (detail.textContent == '0')
    ?detail.textContent = `${zero}`.textContent
    : detail.textContent = detail.textContent + zero.textContent;
})
one.addEventListener('click',() => {
    // if detail == 0 then detail == 1 else detail concatenate 1
    (detail.textContent == '0')
    ?detail.textContent = one.textContent
    : detail.textContent = detail.textContent + one.textContent;
    
})

two.addEventListener('click',() => {
    // if detail == 0 then detail == 2 else detail concatenate 2
    (detail.textContent == '0')
    ?detail.textContent = two.textContent
    : detail.textContent = detail.textContent + two.textContent;
})

tree.addEventListener('click',() => {
    // if detail == 0 then detail == 3 else detail concatenate 3
    (detail.textContent == '0')
    ?detail.textContent = tree.textContent
    : detail.textContent = detail.textContent + tree.textContent;
})

four.addEventListener('click',() => {
    // if detail == 0 then detail == 4 else detail concatenate 4
    (detail.textContent == '0')
    ?detail.textContent = four.textContent
    : detail.textContent = detail.textContent + four.textContent;
})

five.addEventListener('click',() => {
    // if detail == 0 then detail == 5 else detail concatenate 5
    (detail.textContent == '0')
    ?detail.textContent = five.textContent
    : detail.textContent = detail.textContent + five.textContent;
})

six.addEventListener('click',() => {
    // if detail == 0 then detail == 6 else detail concatenate 6
    (detail.textContent == '0')
    ?detail.textContent = five.textContent
    : detail.textContent = detail.textContent + six.textContent;
})

sevent.addEventListener('click',() => {
    // if detail == 0 then detail == 7 else detail concatenate 7
    (detail.textContent == '0')
    ?detail.textContent = sevent.textContent
    : detail.textContent = detail.textContent + sevent.textContent;
})

eight.addEventListener('click',() => {
    // if detail == 0 then detail == 8 else detail concatenate 8
    (detail.textContent == '0')
    ?detail.textContent = eight.textContent
    : detail.textContent = detail.textContent + eight.textContent;
})

nine.addEventListener('click',() => {
    // if detail == 0 then detail == 9 else detail concatenate 9
    (detail.textContent == '0')
    ?detail.textContent = nine.textContent
    : detail.textContent = detail.textContent + nine.textContent;
})

// Events clear screen
clear.addEventListener('click', () => {
    // Clear screen

    detail.textContent = '';
    result.textContent = '';
    result.style.display = 'none';
})

// Events operator
add.addEventListener('click',() => {
    // if detail == 0 then detail == '' else detail concatenate +
    if(detail.textContent == '0') {
        detail.textContent = '';
    } else {
        if(result.textContent != '') {
            detail.textContent = result.textContent + ' ' + add.textContent + ' ';
        } else {
            detail.textContent = detail.textContent + ' ' + add.textContent + ' ';
        }
    }

})

sub.addEventListener('click',() => {
    // if detail == 0 then detail == '' else detail concatenate +
    if(detail.textContent == '0') {
        detail.textContent = '';
    } else {
        if(result.textContent != '') {
            detail.textContent = result.textContent + ' ' + sub.textContent + ' ';
        } else {
            detail.textContent = detail.textContent + ' ' + sub.textContent + ' ';
        }
    }

})

divide.addEventListener('click',() => {
    // if detail == 0 then detail == '' else detail concatenate +
    if(detail.textContent == '0') {
        detail.textContent = '';
    } else {
        if(result.textContent != '') {
            detail.textContent = result.textContent + ' ' + '/' + ' ';
        } else {
            detail.textContent = detail.textContent + ' ' + '/' + ' ';
        }
       
    }

})

multiply.addEventListener('click',() => {
    // if detail == 0 then detail == '' else detail concatenate +
    if(detail.textContent == '0') {
        detail.textContent = '';
    } else {
        if(result.textContent != '') {
            detail.textContent = result.textContent + ' ' + '*' + ' ';
        } else {
            detail.textContent = detail.textContent + ' ' + '*' + ' ';
        }
    }

})

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

comma.addEventListener('click',() => {
    
 
    detail.textContent = detail.textContent + '.';
    

})


// Mode dark

const light = document.querySelector('.sun');
const dark = document.querySelector('.moon');
const container = document.querySelector('.container');
