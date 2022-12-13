const body = document.querySelector('body');

const crearNieve = () => {
    let copo = document.createElement('i');
    let x = innerWidth * Math.random();
    let size = (Math.random() * 8) + 2;
    let z = Math.round(Math.random()) * 100;
    let delay = Math.random() * 5;
    let animacion = (Math.random() * 10) + 5;

    copo.style.left = x + 'px';
    copo.style.width = size + 'px';
    copo.style.height = size + 'px';
    copo.style.zIndex = z;
    copo.style.animationDelay = delay + 's';
    copo.style.animationDuration = animacion + 's';

    body.appendChild(copo);

    setTimeout(() => {
        copo.remove();
    }, animacion * 1000);
}

setInterval(crearNieve, 80);