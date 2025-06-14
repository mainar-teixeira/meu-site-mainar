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

    seta.addEventListener('click', () => {
        window.location.href = '#';
    });
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

const cats = document.querySelectorAll('.cat');


cats[0].addEventListener('click', () => {
    window.location.href = '#';
});

cats[1].addEventListener('click', () => {
    window.location.href = '#work';
});

cats[2].addEventListener('click', () => {
    window.location.href = '#about';
});

document.addEventListener('DOMContentLoaded', () => {
  const contato = document.querySelectorAll('.icn svg');

  if (contato[0]) {
    contato[0].addEventListener('click', () => {
      window.open("https://mail.google.com/mail/?view=cm&fs=1&to=mainar800@gmail.com", "_blank");
    });
  }

  if (contato[1]) {
    contato[1].addEventListener('click', () => {
      window.open("https://www.instagram.com/mr.teylo2025/", "_blank");
    });
  }

  if (contato[2]) {
    contato[2].addEventListener('click', () => {
        window.open("https://github.com/mainar-teixeira", "_blank");
    });
  }
});
