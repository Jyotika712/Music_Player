let progress = document.getElementById("progress");
let song = document.getElementById("song");
let controlicon = document.getElementById("controlicon");

song.onloadedmetadata = function() {
    progress.max = song.duration;
    progress.value = song.currentTime;
};

function PlayPause() {
    if (song.paused) {
        song.play();
        controlicon.classList.remove("fa-play");
        controlicon.classList.add("fa-pause");
    } else {
        song.pause();
        controlicon.classList.remove("fa-pause");
        controlicon.classList.add("fa-play");
    }
}

song.addEventListener('timeupdate', function() {
    progress.value = song.currentTime;
});

progress.oninput = function() {
    song.currentTime = progress.value;
};

