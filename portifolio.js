const BTmenu = document.querySelector('.BTmenu');

BTmenu.addEventListener('click', () => {
    const menu = document.querySelector('.menu');

    if (menu.classList.contains('open')) {
        menu.classList.add('close');

        setTimeout(() => {
            menu.classList.remove('open', 'close');

            void menu.offsetWidth;
        }, 300);
    } else {
        menu.classList.add('open');
    }

    if (scrollY > 0) {
        menu.style.width = "0";
    } else {
        return
    }
    
});

const SM = document.querySelector('.BT1');

SM.addEventListener('click', () => {
    const SBM = document.querySelector('.sobreMim');


    SBM.scrollIntoView({behavior: 'smooth'});
});

const contatos = document.querySelector('.Contatos');

contatos.addEventListener('click', () => {
    const CXcontatos = document.querySelector('.CXcontatos');

    CXcontatos.style.visibility = (CXcontatos.style.visibility === 'visible') ? 'hidden' : 'visible' ;
});
