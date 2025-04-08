document.addEventListener('DOMContentLoaded', function() {
  
const audio = document.getElementById('myAudio');
const playPauseBtn = document.getElementById('playPause')
const toggleButton = document.getElementById('toggleButton')
const imageContainer = document.getElementById('imageContainer')

toggleButton.addEventListener('click', function(){
  console.log("Toggled pictures!")
  imageContainer.classList.toggle('hidden')
})

if (!audio) {
    console.error('Audio element not found!');
return;
}
    
if (!playPauseBtn) {
    console.error('Button not found!');
    return;
}

playPauseBtn.addEventListener('click', function() {
if (audio.paused) {
  audio.play()
.then(() => {
  console.log("Song playing.")
  playPauseBtn.classList.toggle("colorChange")
})
.catch(error => {
  // Auto-play was prevented
  // Show paused UI.
});

}

else {
  audio.pause();
  console.log("Song paused.")
  playPauseBtn.classList.toggle("colorChange")
      }
    });
  });