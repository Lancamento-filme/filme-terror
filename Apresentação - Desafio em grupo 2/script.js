window.sr = ScrollReveal({ reset: true });

// Define the blinking background animation
function blinkBackground() {
  document.body.classList.toggle("blink");
}

// Trigger blinking background animation when elements are revealed
sr.reveal("#home", { duration: 1000, afterReveal: blinkBackground });
sr.reveal("#descricao", { duration: 1000 });
sr.reveal("#elenco", { duration: 1000 });
sr.reveal("#assista", { duration: 3500 });
// sr.reveal('#teaser', {duration: 2000});
// sr.reveal('#assisectionComplementarsta', {duration: 2000});
sr.reveal("#curiosidade1", { duration: 2000 });
sr.reveal("#curiosidade2", { duration: 2500 });
sr.reveal("#curiosidade3", { duration: 3000 });

// Set an interval to keep the blinking background animation going
setInterval(blinkBackground, 5000);
