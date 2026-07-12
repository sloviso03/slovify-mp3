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


export function loadSong(songName) {
  const audioElm = document.getElementById("audio1");  
  const audioFileInput = document.getElementById("audioFile");
  const songTitle = document.getElementById("song-title");

  const songPath = `/music/${songName}`;

  if (audioFileInput) {
    audioFileInput.value = songPath; 
  }

  if (audioElm) {
    audioElm.src = songPath; 
    audioElm.play(); 
  }

  if (songTitle) {
    songTitle.textContent = songName.split('.').slice(0, -1).join('.'); 
  }

}



function togglePlay(audioElm, playButton) {
  if (audioElm) {
    if (audioElm.paused) {
      playAudio(audioElm, playButton);
      console.log("Playing audio");
    } else {
      pauseAudio(audioElm, playButton);
    }
  }
}

function playAudio(audioElm, playButton) {
  playButton.textContent = "Pause";  
  audioElm.play();
}

function pauseAudio(audioElm, playButton) {
  playButton.textContent = "Play";
  audioElm.pause();
}


