var playlist = [{
        "title": "Pour l'Argent",
        "author": "Damso",
        "source": "music/pour_largent.mp3",
        "cover": "img/qalf.jpg"
    },
    {
        "title": "Bosser",
        "author": "Abou Tall",
        "source": "music/bosser.mp3",
        "cover": "img/ghetto_chic.jpg"
    },
    {
        "title": "911",
        "author": "Damso",
        "source": "music/911.mp3",
        "cover": "img/qalf.jpg"
    },
    {
        "title": "Eau de Cologne",
        "author": "Abou Tall ft S Pri Noir",
        "source": "music/eau_de_cologne.mp3",
        "cover": "img/ghetto_chic.jpg"
    },
    {
        "title": "BXLZOO",
        "author": "Damso ft Hamza",
        "source": "music/bxlzoo.mp3",
        "cover": "img/qalf.jpg"
    },
];

// Variables
var title = document.getElementById('title');
var author = document.getElementById('author');
var cover = document.getElementById('cover');
var player = document.getElementById('player');
var volume = document.getElementById('volume');
var position = document.getElementById('position');
var time = document.getElementById('time');

// Init
player.src = playlist[0].source;
player.volume = volume.value / 100;
position.value = player.currentTime;
title.innerText = playlist[0].title;
author.innerText = playlist[0].author;
cover.src = playlist[0].cover;

setInterval(function () {
    position.value = player.currentTime * (100 / player.duration);
    var currentMinutes = Math.floor(player.currentTime / 60);
    var currentSeconds = Math.floor(player.currentTime - currentMinutes * 60);
    var durationMinutes = Math.floor(player.duration / 60);
    var durationSeconds = Math.floor(player.duration - durationMinutes * 60);
    if (currentSeconds < 10) currentSeconds = "0" + currentSeconds;
    if (durationSeconds < 10) durationSeconds = "0" + durationSeconds;
    if (currentMinutes < 10) currentMinutes = "0" + currentMinutes;
    if (durationMinutes < 10) durationMinutes = "0" + durationMinutes;
    time.innerText = currentMinutes + ":" + currentSeconds + " - " + durationMinutes + ":" + durationSeconds;
}, 1000);

function onPlay() {
    player.play();
}

function onPause() {
    player.pause();
}

function onPrev() {
    var currentIndex = playlist.findIndex(function (item) {
        if (player.src.indexOf(item.source) != -1) return true;
        else return false;
    });
    if (currentIndex <= 0) {
        var song = playlist[playlist.length - 1];
    } else {
        var song = playlist[--currentIndex];
    }
    player.src = song.source;
    title.innerText = song.title;
    author.innerText = song.author;
    cover.src = song.cover;
    player.play();
}

function onNext() {
    var currentIndex = playlist.findIndex(function (item) {
        if (player.src.indexOf(item.source) != -1) return true;
        else return false;
    });
    if (currentIndex >= playlist.length - 1) {
        var song = playlist[0];
    } else {
        var song = playlist[++currentIndex];
    }
    player.src = song.source;
    title.innerText = song.title;
    author.innerText = song.author;
    cover.src = song.cover;
    player.play();
}

function onPosition(value) {
    var currentTime = player.duration * (value / 100);
    player.currentTime = currentTime;
}

function onVolume(value) {
    player.volume = value / 100;
}