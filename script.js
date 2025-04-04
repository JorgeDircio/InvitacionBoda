const envelope = document.getElementById("envelope");
const invitationSection = document.getElementById("invitationSection");
const envelopeSection = document.getElementById("envelopeSection");
const music = document.getElementById("bg-music");

envelope.addEventListener("click", () => {
  envelope.classList.add("open");

  setTimeout(() => {
    music.play().catch(e => console.log("Autoplay falló:", e));
    envelopeSection.classList.add("hidden");
    invitationSection.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 1200);
});


const controlBtn = document.getElementById("music-control");

controlBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    controlBtn.innerHTML = "🎵 Presióname 💗";
  } else {
    music.pause();
    controlBtn.innerHTML = "⏸️ Pausado 💔";
  }
});
