
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