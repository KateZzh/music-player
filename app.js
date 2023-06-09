const audio = document.querySelector("audio");
const playPauseBtn = document.querySelector(".play-pause-btn");
const favBtn = document.querySelector(".fav-btn");
// const repeatBtn = document.querySelector(".repeat-btn");

let flag = false;
let currentIndexSong = 0;
let currentTimeSong = 0;

const songs = [
  {
    id: 1,
    path: "./assets/music/citizen-soldier-monster-made-of-memories.mp3",
    artist: "Citizen Soldier",
    nameOfSong: "Monster made of memories",
    imgPath:
    "background-image: url(./assets/img/monster-made-of-memories.jpeg)",
    like: false,
  },
  {
    id: 2,
    path: "./assets/music/falling_in_reverse_voices_in_my_head.mp3",
    artist: "Falling In Reverse",
    nameOfSong: "Voices in my head",
    imgPath: "background-image: url(./assets/img/voices_in_my_head.jpeg)",
    like: false,
  },
  {
    id: 3,
    path: "./assets/music/papa_roach_-_getting_away_with_murder.mp3",
    artist: "Papa Roach",
    nameOfSong: "Getting away with murder",
    imgPath:
    "background-image: url(./assets/img/getting_away_with_murder.jpeg)",
    like: false,
  },
];

function song() {
  const coverImg = document.querySelector(".cover-img");
  const songTitle = document.querySelector(".song-title");
  const artistName = document.querySelector(".artist-name");

  audio.src = songs[currentIndexSong].path;
  coverImg.style = songs[currentIndexSong].imgPath;
  songTitle.textContent = songs[currentIndexSong].nameOfSong;
  artistName.textContent = songs[currentIndexSong].artist;

  if (songs[currentIndexSong].like == false) {
    favBtn.style = "background-image: url(./assets/icons/favBtn.png)";
  } else favBtn.style = "background-image: url(./assets/icons/favBtnAct.png)";
}

// Like
favBtn.addEventListener("click", function () {
  if (songs[currentIndexSong].like == false) {
    songs[currentIndexSong].like = true;
    this.style = "background-image: url(./assets/icons/favBtnAct.png)";
  } else {
    songs[currentIndexSong].like = false;
    this.style = "background-image: url(./assets/icons/favBtn.png)";
  }
});

// Default song
song();

// Play and pause
playPauseBtn.addEventListener("click", function () {
  song();

  if (!flag) {
    audio.play();

    flag = true;
    audio.currentTime = currentTimeSong;
    this.style = "background-image: url(./assets/icons/pauseBtn.png)";
  } else {
    audio.pause();

    flag = false;
    audio.currentTime = currentTimeSong;
    this.style = "background-image: url(./assets/icons/playBtn.png)";
  }
});

// Prev song
document.querySelector(".prev-btn").addEventListener("click", function () {
  currentIndexSong--;

  if (currentIndexSong < 0) currentIndexSong = songs.length - 1;

  song();

  audio.play();
  flag = true;
  playPauseBtn.style = "background-image: url(./assets/icons/pauseBtn.png)";
});

// Next song
document.querySelector(".next-btn").addEventListener("click", function () {
  currentIndexSong++;

  if (currentIndexSong > songs.length - 1) currentIndexSong = 0;

  song();

  audio.play();
  flag = true;
  playPauseBtn.style = "background-image: url(./assets/icons/pauseBtn.png)";
});

// Progress bar
audio.addEventListener("timeupdate", function () {
  const progress = document.querySelector(".progress");
  const timer = document.querySelector(".current-time");
  const { currentTime, duration } = this;

  progress.style.width = `${(currentTime * 100) / duration}%`;

  const sec = Math.trunc(currentTime % 60);
  const min = Math.trunc(currentTime / 60);

  const timeSec = sec < 10 ? `0${sec}` : `${sec}`;
  const timeMin = min < 10 ? `0${min}` : `0${min}`;

  timer.innerHTML = `${timeMin}:${timeSec}`;

  currentTimeSong = currentTime;
});

// Rewind
document.querySelector(".progress-line").addEventListener("click", function (event) {
    audio.currentTime = (event.offsetX / this.clientWidth) * audio.duration;
  });
