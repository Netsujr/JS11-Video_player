// get elememts

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// build functions

function togglePlay() {
  if (video.paused) {  // paused is a property that lives in 'video' element
    video.play();
  } else {
    video.pause();
  }
}

// hook up the event listeners

video.addEventListener('click', togglePlay);
