
gsap.to("#bg",{
    scrollTrigger:{
        scrub:1
    },
    scale:1.5,
});
gsap.to("#text",{
    scrollTrigger:{
        scrub: 1
    },
    y:250,
});

// Selecciona la tarjeta
const sec = document.querySelector('.sec');
const cards = document.querySelectorAll('.card');

// Itera sobre todas las tarjetas y les agrega los eventos
cards.forEach((card) => {
  card.addEventListener('mousemove', (event) => {
    const cardRect = card.getBoundingClientRect(); // Obtiene las coordenadas de la tarjeta
    const x = event.clientX - cardRect.left; // Coordenada X del mouse sobre la tarjeta
    const y = event.clientY - cardRect.top;  // Coordenada Y del mouse sobre la tarjeta

    // Calcula la inclinación en base a la posición del mouse
    const centerX = cardRect.width / 10;
    const centerY = cardRect.height / 10;
    const rotateX = -(y - centerY) / 50;
    const rotateY = (x - centerX) / 50;

    // Aplica la transformación 3D a la tarjeta
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  // Restaura la tarjeta cuando el mouse salga
  card.addEventListener('mouseleave', () => {
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
  });
});

// Horizontal
let cont = document.querySelector('.container');
let layer = document.querySelectorAll('.layer');
cont.onscroll = function(){
  let X = cont.scrollTop;
  
  layer[0].style.left = X/4 + 'px';
  layer[1].style.left = X/32 + 'px';
  layer[2].style.left = X/16 + 'px';
  layer[3].style.left = X/8 + 'px';
  layer[4].style.left = X/8 + 'px';
  // comandos
  layer[5].style.left = X/8 + 'px';
  layer[6].style.left = X/8 + 'px';
  layer[7].style.left = X/8 + 'px';
  layer[8].style.left = X/8 + 'px';
  layer[9].style.left = X/16 + 'px';
  layer[10].style.left = X/16 + 'px';
  layer[11].style.left = X/16 + 'px';
}


// Animaciones de los slides
// const cont = document.querySelector('.container');
// const capa = document.querySelectorAll('.layer');

// cont.onscroll = function(){
//   let X = cont.scrollTop;
// }



const swipes = document.querySelectorAll('#swipe');
const body = document.querySelector('body');
let animation;  // Guardaremos la referencia a la animación aquí

swipes.forEach((swipe) => {
  // Animación al pasar el mouse sobre .slide
  body.addEventListener('mouseover', () => {
    animation = swipe.animate(
      [
        { transform: 'translateX(0)' },      // Estado inicial
        { transform: 'translateX(10px)' },   // Estado final (mover 30px a la derecha)
        { transform: 'translateX(0)' }       // Volver al estado inicial (para el bucle continuo)
      ],
      {
        duration: 700,  // Duración de la animación en milisegundos (1 segundo)
        iterations: Infinity,  // Bucle infinito
        easing: 'ease-in-out'  // Suavizar el movimiento
      }
    );
  });

  // Detener la animación cuando el mouse salga de .slide
  wrapper.addEventListener('mouseout', () => {
    if (animation) {
      animation.cancel();  // Detener la animación
    }
  });
});
