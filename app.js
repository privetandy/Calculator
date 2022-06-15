const $numbers = document.querySelectorAll('.numbers');
const $calculation = document.querySelector('.calculation');
const $answer = document.querySelector('.answer');
const $container =  document.querySelector('#container');
let a = '';
let b = '';
let sign ='';
let calculation = '';

const Clean = () => {
a = '';
b = '';
sign = '';
$answer.innerText = 0;
$calculation.innerText = 0;
calculation = '';
};

const doCalculation = (sign) => {
    switch (sign) {
            case '/':
            if(b === '0') {a = 'Ошибка'; 
            b = ''; } else {
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
       }; 
};


const doComma = ( ) => {
if ((!a.toString().split('').includes('.')) && sign === '') { a = $answer.innerText + '.';
$answer.innerText = a;
calculation = a;
$calculation.innerText = a;} else if(!(b.toString().split('').includes('.')) && sign !== ''){switch (b) {
    case '':
    b = 0 +'.';
    $answer.innerText = b;
    break;
    default:
     b = $answer.innerText +'.';
     $answer.innerText = b; 
     break;
}}; 
};


const doTextSize = () => {
if ($answer.innerText.length >= 14){
    $answer.style.fontSize = '10px';
} else {$answer.style.fontSize = '18px';}
};


const keyDown = (event) =>{
    if (sign === '') {a += event.key;
        $answer.innerText = a;
        $calculation.innerText = a;
        doTextSize();
        } else {
        b += event.key;
        $answer.innerText = b;
        doTextSize();}
};

const doKeyActive = (cl) => {
    $keyDown = document.querySelector(cl);
    $keyDown.classList.add('active');
    setTimeout(() => $keyDown.classList.remove('active'), 50);
    };
    

$container.addEventListener('click', event => {
    if (event.target.classList.contains('reset')){
        Clean();
        doTextSize();
    } else if (event.target.classList.contains('negative')){
     if (a[0] === '-' && sign === '') {a = a.substring(1);
     $answer.innerText = a;
     $calculation.innerText = a;
     doTextSize();
    } else if (b[0] === '-') { b = b.substring(1);
        $answer.innerText = b;
        doTextSize();
}  else if (sign === '' && a === '') {a = '-';
     $answer.innerText = a;
     doTextSize();   
    $calculation.innerText = a;
} else if (sign === '' && a !== '') {a = '-' + a;
    $answer.innerText = a;
    doTextSize();   
   $calculation.innerText = a;} else {b = '-' + b;
        $answer.innerText = b;
        doTextSize();}
    } else if (event.target.classList.contains('comma')) {
        doComma();
        }   else if(event.target.classList.contains('null')) {
            if( (a[1] === '.' && b === '' && sign === '')|| (a[0] !== '0' && b === '' && sign === '')){
                a += event.target.innerText;
        $answer.innerText = a;
        doTextSize();
        $calculation.innerText = a; 
                } else if ( (b[1] === '.') || (b[0] !== '0' && sign !== '')) {
                    b += event.target.innerText;
        $answer.innerText = b;
        doTextSize();  
                    }
        }  else if (event.target.classList.contains('numbers')) {
        if (sign === '') {a += event.target.innerText;
        $answer.innerText = a;
        doTextSize();
        $calculation.innerText = a;    
        } else {
        b += event.target.innerText;
        $answer.innerText = b;
        doTextSize();
        }      
    } else if (event.target.classList.contains('sign')){
        if (sign === '' && a !== '') {sign = event.target.innerText;
            if (a[a.length-1] === '.') {
                $calculation.innerText = a.substring(0, a.length-1) + sign;
            } else {
        $calculation.innerText = a + sign;}           
        } else if (sign !==''&& b !== '') {doCalculation(sign);
    $answer.innerText = a;
    doTextSize();
    sign = event.target.innerText;
    $calculation.innerText = a + sign;  
      } 
    } else if (event.target.classList.contains('percent')) {
        if(a !== '' && b !== '') {doCalculation(sign);
            sign = '';
            a = a / 100;
            a = (Math.floor(a * 1000) / 1000 ).toString();
            $answer.innerText =  a;
            doTextSize();
            $calculation.innerText = a;
            } else {
            a = (+a) / 100;
            a = (Math.floor(a * 1000) / 1000 ).toString();
            $answer.innerText =  a;
            doTextSize();
            $calculation.innerText = a;
            }
    } else if (event.target.classList.contains('equally')) {
        if(a !== '' && b !== '') {doCalculation(sign);
        sign = '';
        if (a === 'Ошибка') {$answer.innerText = a;
             $calculation.innerText = a;} else {
            a = (Math.floor(a * 1000) / 1000 ).toString();
            $answer.innerText = a;
            doTextSize();
            $calculation.innerText = a;
        }
        } else if ( a !=='' && sign !== ''){$calculation.innerText = a; 
            sign ='';}}
                 
});


document.onkeydown = function(event) {
    
    
   
    event.preventDefault();
    
    switch(event.key) {
            case '1':
            keyDown(event);
            doKeyActive('.one');
            break;
            case '2':
            keyDown(event);
            doKeyActive('.two');
            break;
            case '3':
            keyDown(event);
            doKeyActive('.three');
            break;
            case '4':
            keyDown(event);
            doKeyActive('.four');
            break;
            case '5':
            keyDown(event);
            doKeyActive('.five');
            break;
            case '6':
            keyDown(event);
            doKeyActive('.six');
            break;
            case '7':
            keyDown(event);
            doKeyActive('.seven');
            break;
            case '8':
            keyDown(event);
            doKeyActive('.eight');
            break;
            case '9':
            keyDown(event);
            doKeyActive('.nine');
            break;
            case '0': if( (a[1] === '.' && b === '')|| (a[0] !== '0' && b === '')){
            keyDown(event);
            } else if ( (b[1] === '.') || (b[0] !== '0' && sign !== '')) {
                keyDown(event);  
                }
            doKeyActive('.null');
            break;
            case '.':
            doComma();
            doKeyActive('.comma');
            break;
            case ',':
            doComma();
            doKeyActive('.comma');
            break;
            case 'Enter':
                if(a !== '' && b !== '') {doCalculation(sign);
                    sign = '';
                    if (a === 'Ошибка') {$answer.innerText = a; $calculation.innerText = a;} else {
                        $answer.innerText = (Math.floor(a * 1000) / 1000 );
                        doTextSize();
                        $calculation.innerText = (Math.floor(a * 1000) / 1000 );
                    }
                    } else if ( a !=='' && sign !== ''){$calculation.innerText = a; 
                        sign ='';}
            doKeyActive('.equally');
                  
            break;
            case 'Delete':
            Clean();
            doTextSize();
            doKeyActive('.reset');
            break;
            case 'Escape':
            Clean();
            doTextSize();
            doKeyActive('.reset');
            break;
            case 'Backspace':
            Clean();
            doTextSize();
            doKeyActive('.reset');
            break;
            case '/':
                if (sign === '' && a !== '') {sign = event.key;
                    if (a[a.length-1] === '.') {
                        $calculation.innerText = a.substring(0, a.length-1) + sign;
                    } else {
                $calculation.innerText = a + sign;}  
                } else if (sign !==''&& b !== '') {doCalculation(sign);
            $answer.innerText = a;
            doTextSize();
            sign = event.key;
            $calculation.innerText = a + sign;
                };
                doKeyActive('.divide');
            break;
            case '*':
                if (sign === '' && a !== '') {sign = event.key;
                    if (a[a.length-1] === '.') {
                        $calculation.innerText = a.substring(0, a.length-1) + sign;
                    } else {
                $calculation.innerText = a + sign;}  
                } else if (sign !==''&& b !== '') {doCalculation(sign);
            $answer.innerText = a;
            doTextSize();
            sign = event.key;
            $calculation.innerText = a + sign;
                };
                doKeyActive('.multiply');
            break;
            case '-':
                if (sign === '' && a !== '') {sign = event.key;
                    if (a[a.length-1] === '.') {
                        $calculation.innerText = a.substring(0, a.length-1) + sign;
                    } else {
                $calculation.innerText = a + sign;}  
                } else if (sign !==''&& b !== '') {doCalculation(sign);
            $answer.innerText = a;
            doTextSize();
            sign = event.key;
            $calculation.innerText = a + sign;
                };
                doKeyActive('.minus');
            break;
            case '+':
                if (sign === '' && a !== '') {sign = event.key;
                    if (a[a.length-1] === '.') {
                        $calculation.innerText = a.substring(0, a.length-1) + sign;
                    } else {
                $calculation.innerText = a + sign;}  
                } else if (sign !==''&& b !== '') {doCalculation(sign);
            $answer.innerText = a;
            doTextSize();
            sign = event.key;
            $calculation.innerText = a + sign;
                };
            doKeyActive('.plus');
            break;         
    };
};