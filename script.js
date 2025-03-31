document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('myAudio');
    const playPauseBtn = document.getElementById('playPause')
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
          })
          .catch(error => {
            console.error('Playback failed:', error);
          });
      } else {
        audio.pause();
        console.log("Song paused.")
      }
    });
  });

const imageToggle = DocumentType.getElementById("imageToggle")

function 