const display = document.querySelector('.display');
const buttons = Array.from(document.querySelectorAll('.button'));

buttons.map((button) => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'AC':
                display.innerText = '0';
                break;
            case '=':
                try {
                    display.innerText = eval(display.innerText);
                } catch (e) {
                    display.innerText == 'Error';
                }
                break;
            case '+/-':
                display.innerText = '-'
                break;
            case '%': //переделать
                let passedText = display.innerText + '/100';
                display.innerText = eval(passedText);
                break;
            default:
                if(display.innerText === '0' && e.target.innerTex !== '.'){
                    display.innerText = e.target.innerText;
                } else {
                display.innerText += e.target.innerText;
                }
        }
        
    });
});