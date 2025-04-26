const botao_menu = document.getElementById('BTcat');
const box = document.querySelector('.box');
const BTcat = document.getElementById('BTcat');
const barra_cat = document.querySelector('.bar_cat');


botao_menu.addEventListener('click', () => {
    const barra_cat = document.querySelector('.bar_cat');

    if (barra_cat.classList.contains('animar1')) {
        barra_cat.classList.add('animar2');

        
        setTimeout(() => {
            BTcat.classList.add('animar3');
        }, 300);

        setTimeout(() => {
            loop();
        }, 300);

    } else {
        barra_cat.classList.add('animar1');
    }
});

function loop() {

    barra_cat.classList.remove('animar1', 'animar2');
    BTcat.classList.remove('animar3', 'animar4');

    void barra_cat.offsetWidth;
}

BTcat.addEventListener('click', () => {
    
    if (BTcat.classList.contains('animar3')) {
        BTcat.classList.add('animar4');
        

        setTimeout(() => {
            loop()
        }, 300);

    } else {
        BTcat.classList.add('animar3');
        box.style.visibility = 'hidden';
    }

});

function musica() {
    const musica = document.querySelector('.cat1');
    const forum = document.querySelector('.cat2');
    const artistas = document.querySelector('.cat3');

    musica.style.color = 'orange';

    forum.style.color = 'white';
    artistas.style.color = 'white';



}

function forum() {
    const musica = document.querySelector('.cat1');
    const forum = document.querySelector('.cat2');
    const artistas = document.querySelector('.cat3');

    forum.style.color = 'orange';

    musica.style.color = 'white';
    artistas.style.color = 'white';
}

function artistas() {
    const musica = document.querySelector('.cat1');
    const forum = document.querySelector('.cat2');
    const artistas = document.querySelector('.cat3');

    artistas.style.color = 'orange';

    forum.style.color = 'white';
    musica.style.color = 'white';
}

const BTlayout1 = document.getElementById('BT1');
const BTlayout2 = document.getElementById('BT2');
const layout = document.querySelector('.layout');


/*BTlayout2.addEventListener('click', () => {
    BTlayout2.disabled = true;

    layout.scrollBy({
        left: 255,
        behavior: "smooth"
    });

    setTimeout(() => {
        BTlayout2.disabled = false;
    }, 300);

});*/

/*BTlayout1.addEventListener('click', () => {
    BTlayout1.disabled = true;

    layout.scrollBy({
        left: -255,
        behavior: "smooth"
    });

    setTimeout(() => {
        BTlayout1.disabled = false;
    }, 300);

});*/