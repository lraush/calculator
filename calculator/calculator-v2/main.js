let a = '';// первое число
let b = ''; //второе число
let sing = ''// знак операции
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'x', '/' ]

//получаем экран
const out = document.querySelector('.display');
function clearAll() {
    a = '';
    b = '';
    sing = '';
    out.textContent = 0;
}
document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
    //нажата не кнопка
    if(!event.target.classList.contains('button')) return;
    //нажата кнопка ас
    if(event.target.classList.contains('ac')) return;

    out.textContent = '';
    //получаем кнопку
    const key = event.target.textContent;

    //если получили кнопку от 0-9
    if (digit.includes(key)){
        if (b === '' && sing === ''){
            a += key;
            out.textContent = a;
        }
        else if ( a !== '' && b !== '' && finish){
            b = key;
            finish = false;
            out.textContent = b;
        } else {
            b += key;
            out.textContent = b;
        }

    }
    if (action.includes(key)) {
        sing = key;
        out.textContent = sing;
    }
     
    //нажата =
    if(key === '='){
        if (b === '') b = a;
        switch (sing) {
            case '+':
                a = (+a) + (+b);
                break;
            case '-':
                a = a - b;
                break;
            case 'x':
                a = a * b;
                break;
            case '/':
                if (b === '0') {
                    return clearAll()
                }
                a = a / b;
                break;
        }
        finish = true;
        out.textContent = a;
    }
}