function load() {
    const seta = document.querySelector('.seta2');
    const seta1 = document.querySelector('.seta');

    window.addEventListener('scroll', load);

    if (window.scrollY === 0) {
        seta.style.display = 'none';
        seta1.style.opacity = '1';
        seta1.style.pointerEvents = '';
        seta1.style.transition = '0.5s';
        seta.style.transition = '0.3s';
    } else  {
        seta.style.display = 'block';
        seta1.style.opacity = '0';
        seta1.style.pointerEvents = 'none';
        seta1.style.transition = '0.5s';
        seta.style.transition = '0.3s';

        setInterval(() => {
            seta1.style.display == 'none';
        }, 500);
    }
}

const cat = document.querySelectorAll('.cat');

cat.forEach((all, index) => {
    all.addEventListener('click', () => {
        cat.forEach(el => {
        el.style.color = 'white';
        el.style.borderColor = 'black';
        el.style.transition = '0.3s';
    });
    
    all.style.color = '#bc3cd8';
    all.style.borderColor = 'white';
    all.style.transition = '0.3s';
    });
}); 

const svgs = document.querySelectorAll('.svgs svg');
const legenda = document.querySelectorAll('.legenda p');

svgs.forEach((all, index) => {
    svgs[index].addEventListener('mouseenter', () => {
        legenda[index].style.opacity = '1';
        legenda[index].style.transition = '0.3s';
        legenda[2].style.left = '25px';
    });

    svgs[index].addEventListener('mouseleave', () => {
        legenda[index].style.opacity = '0';
        legenda[index].style.transition = '0.3s';
    });
});
