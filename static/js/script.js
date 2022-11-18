document.getElementById('play').onclick = function() {
    document.getElementById('play').innerHTML = '<i class="fa-solid fa-rotate-right"></i>';
    $('#audio').html('<audio autoplay><source src="media/audio.mp3"></audio>');
}


document.getElementById('pause').onclick = function() {
    $('#audio').html('');
}

