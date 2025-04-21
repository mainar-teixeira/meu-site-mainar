function carregamento() {
    cat1.classList.add('clickCat');
}

function clickA() {
    var cat1 = document.querySelector('#cat1');
    var cat2 = document.querySelector('#cat2');
    var cat3 = document.querySelector('#cat3');
    var cat4 = document.querySelector('#cat4');

    cat1.classList.add('clickCat');

    cat2.classList.remove('clickCat');
    cat3.classList.remove('clickCat');
    cat4.classList.remove('clickCat');

    var menu = document.getElementById('contatos');

    setTimeout(() => {
        
        if (menu.classList.contains('open')) {
            menu.classList.add('close');

            document.body.style.pointerEvents = 'none';
            setInterval(() => {
                document.body.style.pointerEvents = 'auto';
            }, 300);
        }

    }, 10);

    setTimeout(() => {
        loop()
    }, 300);

    document.getElementById('rolagem1').scrollIntoView({ behavior: "instant" });
}

function clickB() {
    var cat1 = document.querySelector('#cat1');
    var cat2 = document.querySelector('#cat2');
    var cat3 = document.querySelector('#cat3');
    var cat4 = document.querySelector('#cat4');

    cat2.classList.add('clickCat');

    cat1.classList.remove('clickCat');
    cat3.classList.remove('clickCat');
    cat4.classList.remove('clickCat');

    var menu = document.getElementById('contatos');

    setTimeout(() => {
        
        if (menu.classList.contains('open')) {
            menu.classList.add('close');

            document.body.style.pointerEvents = 'none';
            setInterval(() => {
                document.body.style.pointerEvents = 'auto';
            }, 300);
        }

    }, 10);

    setTimeout(() => {
        loop()
    }, 300);

    document.getElementById('textos1').scrollIntoView({ behavior: 'instant' });
}

function clickC() {
    var cat1 = document.querySelector('#cat1');
    var cat2 = document.querySelector('#cat2');
    var cat3 = document.querySelector('#cat3');
    var cat4 = document.querySelector('#cat4');

    cat3.classList.add('clickCat');

    cat2.classList.remove('clickCat');
    cat1.classList.remove('clickCat');
    cat4.classList.remove('clickCat');

    var menu = document.getElementById('contatos');


    setTimeout(() => {
        
        if (menu.classList.contains('open')) {
            menu.classList.add('close');

            document.body.style.pointerEvents = 'none';
            setInterval(() => {
                document.body.style.pointerEvents = 'auto';
            }, 300);
        }

    }, 10);

    setTimeout(() => {
        loop()
    }, 300);
}

function clickD() {
    var cat1 = document.querySelector('#cat1');
    var cat2 = document.querySelector('#cat2');
    var cat3 = document.querySelector('#cat3');
    var cat4 = document.querySelector('#cat4');

    cat4.classList.add('clickCat');

    cat2.classList.remove('clickCat');
    cat3.classList.remove('clickCat');
    cat1.classList.remove('clickCat');

    var menu = document.getElementById('contatos');

    if (menu.classList.contains('open')) {
        menu.classList.add('close');
        cat4.classList.remove('clickCat');
        setTimeout(() => {
            loop()
        }, 300);
    } else {
        menu.classList.add('open');
    }
}

function loop() {
    var menu = document.getElementById('contatos');

    menu.classList.remove('open','close');

    void menu.offsetWidth;
}
