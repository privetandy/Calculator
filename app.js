const $numbers = document.querySelectorAll('.numbers');
const $calculation = document.querySelector('.calculation');
const $answer = document.querySelector('.answer');
const $container =  document.querySelector('#container');
let a = '';
let b = '';
let sign ='';
let calculation = '';
const acomma = a.split('');
const bcomma = b.split('');

const Clean = () => {
a = '';
b = '';
sign = '';
$answer.innerText = 0;
$calculation.innerText = 0;
calculation = '';
}

const doCalculation = (sign) => {
    switch (sign) {
        case '/':
            if(b === '0') {a = 'Ошибка'} else {
             a = (+a) / (+b);
            b = '';}
            break;
            case '*':
            a = (+a) * (+b);
            b = '';
            break;
            case '-':
            a = (+a) - (+b);
            b = '';
            break;
            case '+':
            a = (+a) + (+b);
            b = '';
            break;
    } 
};


const doComma = (event) => {
if ((!a.toString().split('').includes('.')) && sign === ''){ a = $answer.innerText + '.';
$answer.innerText = a} else if(!(b.toString().split('').includes('.')) && sign !== ''){switch (b) {
    case '':
    b = 0 +'.';
    $answer.innerText = b;
    break;
    default:
     b = $answer.innerText +'.';
     $answer.innerText = b; 
     break;
}} 

};

const doTextSize = () => {
if ($answer.innerText.length >= 14){
    $answer.style.fontSize = '10px';
} else {$answer.style.fontSize = '16px';}
};

$container.addEventListener('click',  event => {
    if (event.target.classList.contains('reset')){
        Clean();
        doTextSize();
    } else if (event.target.classList.contains('negative')){
     if (sign === '' && a !== '') {a = -a;
     $answer.innerText = a;
     doTextSize();} else {b = -b;
        $answer.innerText = b;
        doTextSize();}
    } else if (event.target.classList.contains('comma')) {
        doComma(event.target);
        console.log(b.split(''))
        }     else if (event.target.classList.contains('numbers')) {
        if (sign === '') {a += event.target.innerText;
        $answer.innerText = a;
        doTextSize();
        } else {
        b += event.target.innerText;
        $answer.innerText = b;
        doTextSize();}
        
    } else if (event.target.classList.contains('sign')){
        if (sign === '' && a !== '') {sign = event.target.innerText;
        } else if (sign !==''&& b !== '') {doCalculation(sign);
    $answer.innerText = a;
    doTextSize();
    sign = event.target.innerText;
        }
        
    } else if (event.target.classList.contains('percent')) {
        if(a !== '' && b !== '') {doCalculation(sign);
            sign = '';
            a = a / 100;
            $answer.innerText =  (Math.floor(a * 1000) / 1000 );
            doTextSize();
            } else {
            a = a / 100;
            $answer.innerText =  (Math.floor(a * 1000) / 1000 );
            doTextSize();
            }
    } else if (event.target.classList.contains('equally')) {
        if(a !== '' && b !== '') {doCalculation(sign);
        sign = '';
        if (a === 'Ошибка') {$answer.innerText = a} else {
            $answer.innerText =  (Math.floor(a * 1000) / 1000 );
            doTextSize();
        }
        
        }}
        
})


 