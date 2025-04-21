const temperatura1 = document.querySelector('#temperatura1');
const temperatura2 = document.querySelector('#temperatura2');
const temperatura3 = document.querySelector('#temperatura3');
const temperatura4 = document.querySelector('#temperatura4');

temperatura1.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'Enter':
            /*const opçao = document.querySelector('option[name="temperature"]:checked');*/

                    const calculo1 = Number(temperatura1.value) + 273.15;
                    temperatura3.value = calculo1 + " K°";

                    const calculo2 = (Number(temperatura1.value) * 9/5) + 32;
                    temperatura2.value = calculo2 + " F°";


            break;
    
        default:
            break;
    }
});

temperatura2.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'Enter':
            /*const opçao = document.querySelector('option[name="temperature"]:checked');*/

                    const calculo1 = (Number(temperatura2.value) - 32) * 5/9;
                    temperatura1.value = calculo1 + " C°";

                    const calculo2 = (Number(temperatura2.value) - 32) * 5/9 + 273.15;
                    temperatura3.value = calculo2 + " K°";


            break;
    
        default:
            break;
    }
});

temperatura3.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'Enter':
            /*const opçao = document.querySelector('option[name="temperature"]:checked');*/

                    const calculo1 = Number(temperatura3.value) - 273.15;
                    temperatura1.value = calculo1 + " C°";

                    const calculo2 = (Number(temperatura3.value) - 273.15) * 9/5 + 32;
                    temperatura2.value = calculo2 + " F°";


            break;
    
        default:
            break;
    }
});

const botao = document.querySelector('#BT');

botao.addEventListener('click', () => {
    temperatura1.value = "";
    temperatura2.value = "";
    temperatura3.value = "";
});