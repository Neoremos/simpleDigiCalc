let display = document.getElementById('display');

let clicks = Array.from(document.getElementsByClassName('click'));

clicks.map(click => {
    click.addEventListener('click', (e) => {
        switch(e.target.innerText) {
            case 'AC':
                display.innerText = '';
                break;
            case 'DEL':
                display.innerText = display.innerText.slice(0, -1);
                break;
            case '=':
                try {
                    display.innerText = eval(display.innerText.slice(0, -1));
                } catch {
                    display.innerText = 'Error!';
                }
            default :
                display.innerText += e.target.innerText;
        }
    })
})
