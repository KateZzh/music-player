const audio = document.querySelector("audio");
const coverImg = document.querySelector(".cover-img");
const songTitle = document.querySelector(".song-title");
const artistName = document.querySelector(".artist-name");
const audioLine = document.querySelector(".audio-line");
const currentTime = document.querySelector(".current-time");
const repeatBtn = document.querySelector(".repeat-btn");
const prevBtn = document.querySelector(".prev-btn");
const playPauseBtn = document.querySelector(".play-pause-btn");
const nextBtn = document.querySelector(".next-btn");
const favBtn = document.querySelector(".fav-btn");

let flag = false;
let currentIndexSong = 0;

const songs = [
  {
    id: 1,
    path: "./assets/music/citizen-soldier-monster-made-of-memories.mp3",
    artist: "Citizen Soldier",
    nameOfSong: "Monster made of memories",
    imgPath:
      "background-image: url(./assets/img/monster-made-of-memories.jpeg)",
    audioTime: "03:06",
  },
  {
    id: 2,
    path: "./assets/music/falling_in_reverse_voices_in_my_head.mp3",
    artist: "Falling In Reverse",
    nameOfSong: "Voices in my head",
    imgPath: "background-image: url(./assets/img/voices_in_my_head.jpeg)",
    audioTime: "03:11",
  },
  {
    id: 3,
    path: "./assets/music/papa_roach_-_getting_away_with_murder.mp3",
    artist: "Papa Roach",
    nameOfSong: "Getting away with murder",
    imgPath:
      "background-image: url(./assets/img/getting_away_with_murder.jpeg)",
    audioTime: "03:14",
  },
];

playPauseBtn.addEventListener("click", function () {
  audio.src = songs[currentIndexSong].path;
  coverImg.style = songs[currentIndexSong].imgPath;
  songTitle.textContent = songs[currentIndexSong].nameOfSong;
  artistName.textContent = songs[currentIndexSong].artist;
  currentTime.textContent = songs[currentIndexSong].audioTime;

  if (flag === false) {
    audio.play();
    flag = true;
    this.style = "background-image: url(./assets/icons/pauseBtn.png)";
  } else {
    audio.pause();
    flag = false;
    this.style = "background-image: url(./assets/icons/playBtn.png)";
  }
});

prevBtn.addEventListener("click", function () {
  if (currentIndexSong === 0) return;

  currentIndexSong--;

  audio.src = songs[currentIndexSong].path;
  coverImg.style = songs[currentIndexSong].imgPath;
  songTitle.textContent = songs[currentIndexSong].nameOfSong;
  artistName.textContent = songs[currentIndexSong].artist;
  currentTime.textContent = songs[currentIndexSong].audioTime;

  audio.play();
  flag = true;
  playPauseBtn.style = "background-image: url(./assets/icons/pauseBtn.png)";
});

nextBtn.addEventListener("click", function () {
  if (currentIndexSong === songs.length - 1) return;

  currentIndexSong++;

  audio.src = songs[currentIndexSong].path;
  coverImg.style = songs[currentIndexSong].imgPath;
  songTitle.textContent = songs[currentIndexSong].nameOfSong;
  artistName.textContent = songs[currentIndexSong].artist;
  currentTime.textContent = songs[currentIndexSong].audioTime;

  audio.play();
  flag = true;
  playPauseBtn.style = "background-image: url(./assets/icons/pauseBtn.png)";
});


