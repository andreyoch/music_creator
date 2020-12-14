document.addEventListener('DOMContentLoaded',main);

function main() {
   document.addEventListener('keypress', (e) => playAudio(e));

}

function playAudio(e) {
   console.log(e.key)
   const audio = document.querySelector(`audio[data-key="${e.key}"]`);
   console.log
   if (audio) {
      audio.play();
   }
   }
