
window.sr = ScrollReveal({reset: true});

// Define the blinking background animation
function blinkBackground() {
  document.body.classList.toggle("blink");
}

// Trigger blinking background animation when elements are revealed
sr.reveal('#home', {duration: 1000, afterReveal: blinkBackground});
sr.reveal('#descricao', {duration: 1000});
sr.reveal('#elenco', {duration: 1000});

// Set an interval to keep the blinking background animation going
setInterval(blinkBackground, 5000); // Blink every 5 seconds
