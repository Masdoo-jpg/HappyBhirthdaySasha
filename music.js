const audio = new Audio("kasih putih.mp3");
audio.loop = true;

const savedTime = localStorage.getItem("musicTime");
if (savedTime) {
    audio.currentTime = savedTime;
}

audio.play();

setInterval(() => {
    localStorage.setItem("musicTime", audio.currentTime);
}, 1000);