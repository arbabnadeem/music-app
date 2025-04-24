// console.log("Welcome too spotify");
// Initialize the variables
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.querySelector("#master-play");
let progressBar = document.querySelector("#progress-bar");
let gif = document.querySelector("#gif");
let songItems = Array.from(document.getElementsByClassName("song-item"));
let masterSong = document.querySelector("#master-song");

let songs = [
  {
    songName: "love yourself",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "Die With a Smile",
    filePath: "songs/2.mp3",
    coverPath: "covers/2.jpg",
  },
  {
    songName: "bird of a feather",
    filePath: "songs/3.mp3",
    coverPath: "covers/3.jpg",
  },
  {
    songName: "who",
    filePath: "songs/4.mp3",
    coverPath: "covers/4.jpg",
  },
  {
    songName: "taste",
    filePath: "songs/5.mp3",
    coverPath: "covers/5.jpg",
  },
  {
    songName: "good luck",
    filePath: "songs/6.mp3",
    coverPath: "covers/6.jpg",
  },
  {
    songName: "please please",
    filePath: "songs/7.mp3",
    coverPath: "covers/7.jpg",
  },
  {
    songName: "beautiful things",
    filePath: "songs/8.mp3",
    coverPath: "covers/8.jpg",
  },
  {
    songName: "bed chem",
    filePath: "songs/9.mp3",
    coverPath: "covers/9.jpg",
  },
  {
    songName: "lose control",
    filePath: "songs/10.mp3",
    coverPath: "covers/10.jpg",
  },
];

songItems.forEach((element, i) => {
  // console.log(element, i);
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("song-name")[0].innerText = songs[i].songName;
});

// handle play/pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
    gif.style.opacity = 0;
  }
});
// listen to events
audioElement.addEventListener("timeupdate", (progress) => {
  // update sikebar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  progressBar.value = progress;
});

progressBar.addEventListener("change", () => {
  audioElement.currentTime = (progressBar.value * audioElement.duration) / 100;
});

let makeAllPLays = () => {
  Array.from(document.getElementsByClassName("song-items-play")).forEach(
    (element) => {
      element.classList.add("fa-circle-play");
      element.classList.remove("fa-circle-pause");
    }
  );
};

Array.from(document.getElementsByClassName("song-items-play")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllPLays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-circle-play");
      e.target.classList.add("fa-circle-pause");
      audioElement.src = `songs/${songIndex + 1}.mp3`;
      audioElement.currentTime = 0;
      audioElement.play();
      masterPlay.classList.remove("fa-circle-play");
      masterPlay.classList.add("fa-circle-pause");
      gif.style.opacity = 1;
      masterSong.innerText = songs[songIndex].songName;
    });
  }
);

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 9) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  masterSong.innerText = songs[songIndex].songName;
  audioElement.src = `songs/${songIndex + 1}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
});
document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  masterSong.innerText = songs[songIndex].songName;
  audioElement.src = `songs/${songIndex - 1}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
});
