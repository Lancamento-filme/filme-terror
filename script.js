window.sr = ScrollReveal({ reset: true });

// Define the blinking background animation
function blinkBackground() {
  document.body.classList.toggle("blink");
}

// Trigger blinking background animation when elements are revealed
sr.reveal("#home", { duration: 1000, afterReveal: blinkBackground });
sr.reveal("#descricao", { duration: 3500 });
sr.reveal("#elenco", { duration: 1000 });
sr.reveal("#assista", { duration: 3500 });
// sr.reveal('#teaser', {duration: 2000});
sr.reveal('#sectionComplementar', {duration: 2000});
sr.reveal("#curiosidade1", { duration: 2000 });
sr.reveal("#curiosidade2", { duration: 2500 });
sr.reveal("#curiosidade3", { duration: 3000 });

// Set an interval to keep the blinking background animation going
setInterval(blinkBackground, 5000);

const bodyElement = document.querySelector("body");

const imagesToPreload = [
  "./background/Background.png",
  "./background/10.png",
  "./background/20.png",
  "./background/30.png",
  "./background/40.png",
  "./background/50.png",
  "./background/60.png",
  "./background/70.png",
  "./background/80.png",
  "./background/90.png",
  "./background/100.png"
];

function preloadImages(images, callback) {
  let loadedImages = 0;

  function imageLoaded() {
    loadedImages++;
    if (loadedImages === images.length) {
      callback();
    }
  }

  images.forEach(imageSrc => {
    const img = new Image();
    img.src = imageSrc;
    img.onload = imageLoaded;
  });
}

preloadImages(imagesToPreload, () => {
  bodyElement.classList.remove("preload");
});

