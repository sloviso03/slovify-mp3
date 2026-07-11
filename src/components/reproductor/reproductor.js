import reproductorTemplate from './reproductor.html?raw';
import './reproductor.css';

let template;

function initTemplate() {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = reproductorTemplate;
  template = wrapper.querySelector('#reproductor-template');
}

export function Reproductor(song) {
  if (!template) initTemplate();
  const fragment = template.content.cloneNode(true);

  const audioElm = fragment.getElementById("audio1");  
  const audioFileInput = fragment.getElementById("audioFile");
  const songTitle = fragment.getElementById("song-title");

  if (audioElm && audioFileInput) {
    audioElm.src = audioFileInput.value;

    if (songTitle) {
      songTitle.textContent = audioFileInput.value;
    }
  }

  return fragment;
}

function togglePlay(audioElm, playButton, audioFileInput, songTitle) {
  if (audioElm) {
    if (audioElm.paused) {
      playAudio(audioElm, playButton, audioFileInput, songTitle);
      console.log("Playing audio");
    } else {
      pauseAudio(audioElm, playButton);
    }
  }
}

function playAudio(audioElm, playButton, audioFileInput, songTitle) {
  playButton.textContent = "Pause";
  
  if (!audioElm.src || audioElm.src !== audioFileInput.value) {
    audioElm.src = audioFileInput.value;
    if (songTitle) {
      songTitle.textContent = audioFileInput.value;
    }
  }

  audioElm.play();
}

function pauseAudio(audioElm, playButton) {
  playButton.textContent = "Play";
  audioElm.pause();
}
