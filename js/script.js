  const audio = document.getElementById('musicPlayer');
  const audioSource = document.getElementById('audioSource');
  const playPauseBtn = document.getElementById('playPauseBtn');
  const forwardBtn = document.getElementById('forwardBtn');
  const backwardBtn = document.getElementById('backwardBtn');
  const prevSongBtn = document.getElementById('prevSongBtn');
  const nextSongBtn = document.getElementById('nextSongBtn');
  const progressBar = document.getElementById('progressBar');
  const currentTimeDisplay = document.getElementById('currentTime');
  const durationDisplay = document.getElementById('duration');
  const songTitle = document.getElementById('songTitle');
  const lyricsContainer = document.getElementById('lyricsContainer');


  const playlist = [
    { 
      title: "Tyler, The Creator - SEE YOU AGAIN (ft. Kali Uchis)", 
      url: "Tyler, The Creator - SEE YOU AGAIN (ft. Kali Uchis) [NmvVhovjJI0].mp3",
      lyrics: [
        { time: 0, text: "Okay, okay, okay, okay" },
        { time: 5, text: "Okay, okay, I see you again" },
        { time: 10, text: "Dreamin', dreamin', dreamin', dreamin'" },
        { time: 15, text: "Dreamin', dreamin', I see you again" }
      ]
    },
    { 
      title: "Civ - 1 AM", 
      url: "Civ - 1 AM (Lyrics) pop out at 1 in the mornin' [Hl_OrpdBWLw].mp3",
      lyrics: [
        { time: 0, text: "Pop out at 1 in the mornin'" },
        { time: 5, text: "I’m feelin' alive in the dark" },
        { time: 10, text: "Lights low, I’m movin' in silence" },
        { time: 15, text: "No sleep, just vibes in my heart" }
      ]
    },
    { 
      title: "Post Malone, Swae Lee - Sunflower", 
      url: "Post Malone, Swae Lee - Sunflower (Spider-Man_ Into the Spider-Verse) (Official Video).mp3",
      lyrics: [
        { time: 0, text: "Ayy, ayy, ayy, ayy" },
        { time: 5, text: "Needless to say, I keep her in check" },
        { time: 10, text: "She was a bad-bad, nevertheless" },
        { time: 15, text: "Callin' it quits now, baby, I’m a wreck" }
      ]
    }
  ];
  let currentSongIndex = 0;

 
  function loadSong(index) {
    audioSource.src = playlist[index].url;
    songTitle.textContent = playlist[index].title;
    audio.load();
    progressBar.value = 0;
    currentTimeDisplay.textContent = "0:00";
    playPauseBtn.textContent = "Play";

    
    lyricsContainer.innerHTML = '';
    playlist[index].lyrics.forEach(line => {
      const p = document.createElement('p');
      p.textContent = line.text;
      p.dataset.time = line.time;
      p.classList.add('opacity-50', 'transition', 'duration-300');
      lyricsContainer.appendChild(p);
    });
  }

 
  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' + secs : secs}`;
  }

  
  function updateLyrics() {
    const currentTime = audio.currentTime;
    const lyrics = playlist[currentSongIndex].lyrics;
    const lines = lyricsContainer.querySelectorAll('p');

    lines.forEach((line, index) => {
      const lineTime = parseFloat(line.dataset.time);
      const nextTime = index < lyrics.length - 1 ? lyrics[index + 1].time : audio.duration;

      if (currentTime >= lineTime && currentTime < nextTime) {
        line.classList.remove('opacity-50');
        line.classList.add('opacity-100', 'font-bold');
    
        line.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        line.classList.remove('opacity-100', 'font-bold');
        line.classList.add('opacity-50');
      }
    });
  }

  loadSong(currentSongIndex);

  audio.addEventListener('loadedmetadata', () => {
    durationDisplay.textContent = formatTime(audio.duration);
    progressBar.max = audio.duration;
  });

  playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
      playPauseBtn.textContent = 'Pause';
    } else {
      audio.pause();
      playPauseBtn.textContent = 'Play';
    }
  });


  forwardBtn.addEventListener('click', () => {
    audio.currentTime = Math.min(audio.currentTime + 10, audio.duration);
  });

  backwardBtn.addEventListener('click', () => {
    audio.currentTime = Math.max(audio.currentTime - 10, 0);
  });

  prevSongBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
    loadSong(currentSongIndex);
    audio.play();
    playPauseBtn.textContent = 'Pause';
  });

  nextSongBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % playlist.length;
    loadSong(currentSongIndex);
    audio.play();
    playPauseBtn.textContent = 'Pause';
  });


  audio.addEventListener('ended', () => {
    nextSongBtn.click();
  });

  audio.addEventListener('timeupdate', () => {
    progressBar.value = audio.currentTime;
    currentTimeDisplay.textContent = formatTime(audio.currentTime);
    updateLyrics();
  });


  progressBar.addEventListener('input', () => {
    audio.currentTime = progressBar.value;
    currentTimeDisplay.textContent = formatTime(audio.currentTime);
    updateLyrics();
  });



const button = document.getElementById('randomButton');
const redSquare = button.parentElement;

function moveButton() {
  const maxX = redSquare.offsetWidth - button.offsetWidth; 
  const maxY = redSquare.offsetHeight - button.offsetHeight; 

  
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  button.style.left = `${randomX}px`;
  button.style.top = `${randomY}px`;
}

moveButton();

button.addEventListener('click', moveButton);