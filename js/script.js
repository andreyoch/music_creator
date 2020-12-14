document.addEventListener('DOMContentLoaded', main);

function main() {
   document.addEventListener('keypress', (e) => {
      playAudio(e)
      showPlayingClass(e);
   });
   
}

function playAudio(e) {
  const audio = document.querySelector(`audio[data-key="${e.key}"]`);
  if (audio) {
    audio.play();
  }
}
function showPlayingClass(e) {
   const element = document.querySelector(`div[data-key="${e.key}"]`);
   element.classList.add('playing');
   setTimeout(removeClass, 300, element, 'playing');
   
   function removeClass(element,className) {
      element.classList.remove(className)
   }
}


