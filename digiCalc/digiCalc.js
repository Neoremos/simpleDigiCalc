let display = document.getElementById('display');

let clicks = Array.from(document.getElementsByClassName('click'));

    console.log(clicks);

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
                display.innerText = parseFloat(display.innerText);
                break;
            default :
                display.innerText += e.target.innerText;
        }
    })
})
