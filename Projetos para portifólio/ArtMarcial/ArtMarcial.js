function load() {
    const estampa = document.getElementById('barra1');

    var random1 = (Math.floor(Math.random() * 255) + 1);
    var random2 = (Math.floor(Math.random() * 255) + 1);
    var random3 = (Math.floor(Math.random() * 255) + 1);

    estampa.style.backgroundColor = "rgb(" + random1 + "," + random2 + "," + random3 + ")";
    estampa.style.boxShadow = "1px 1px 10px 1px rgb(" + random1 + "," + random2 + "," + random3 + ")";

}

setInterval(load, 1000);

const BT1 = document.getElementById('BT1');
const BT2 = document.getElementById('BT2');


function next() {
    const categorias = document.querySelector('.categorias');
    
    setTimeout(() => {
        categorias.scrollBy({
            left: -250,
            behavior: 'smooth'
        });
    }, 10);

    setTimeout(() => {
        BT1.style.visibility = 'hidden';
        BT2.style.visibility = 'visible';
    }, 20);

}

function next1() {
    const categorias = document.querySelector('.categorias');
    
    setTimeout(() => {
        categorias.scrollBy({
            left: 250,
            behavior: 'smooth'
        });

    }, 10);

    setTimeout(() => {
        BT1.style.visibility = 'visible';
        BT2.style.visibility = 'hidden';
    }, 20);

}
