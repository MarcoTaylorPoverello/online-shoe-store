
document.addEventListener("DOMContentLoaded", function() {
  const carousels = document.querySelector('.image-carousel');
  const arrowLeft = document.querySelector('.arrow-left');
  const arrowRight = document.querySelector('.arrow-right');

  const headingContainer = document.querySelector('.ad-words');

  const slides = [
    { image: "assets/img/sneakercollection.jpg", heading: "OUR NEW SNEAKER COLLECTION!" },
    { image: "assets/img/bootcollection.jpg", heading: "OUR NEW BOOT COLLECTION!" },
    { image: "assets/img/loafercollection.jpg", heading: "OUR NEW LOAFER COLLECTION!" },
    { image: "assets/img/formalcollection.jpg", heading: "OUR NEW FORMAL COLLECTION!" }
  ];

  let id = 0;

  function carousel(id) {
    carousels.style.backgroundImage = `url(${slides[id].image})`;
    carousels.classList.add('image-fade');

    setTimeout(() => {
      carousels.classList.remove('image-fade');
    }, 550);

    const heading = headingContainer.querySelector(`[data-text="${slides[id].heading}"]`);
    headingContainer.querySelectorAll('h1').forEach(h => {
      h.style.display = 'none';
    });
    heading.style.display = 'block';
  };

  function moveArrowLeft() {
    id--;
    if (id < 0) {
      id = slides.length -1;
    }
    carousel(id);
  }

  arrowLeft.onclick = moveArrowLeft;
  
  function moveArrowRight() {
    id++;
    if (id >= slides.length) {
      id = 0;
    }
    carousel(id);
  }

  arrowRight.onclick = moveArrowRight;

  // Reverts back to original slide format
  carousel(id);

  // Automatic slideshow - fades in and out perfectly with animations on the css text
  setInterval(() => {
    id++;
    if (id >= slides.length) {
      id = 0;
    }
    carousel(id);
  }, 4000); // Change slide every 3 seconds
});

