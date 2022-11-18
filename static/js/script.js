const correctSound = new Audio('audio.mp3');

document.getElementById('play').onclick = function() {
    correctSound.play();
}