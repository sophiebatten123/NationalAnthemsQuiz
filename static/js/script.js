// Round One

document.getElementById('play').onclick = function() {
    document.getElementById('play').innerHTML = '<i class="fa-solid fa-rotate-right"></i>';
    $('#audio').html('<audio autoplay><source src="media/audio.mp3"></audio>');
}

document.getElementById('pause').onclick = function() {
    $('#audio').html('');
}

let country = document.getElementsByClassName("country")

for (let i=0; i < country.length; i++) {
    country[i].addEventListener('click', function(e) {
        if(country[i].id == 'Indonesia') {
            alert('YAY');
        } else {
            alert('WRONG');
        }
    })
}

// Map Information
var tooltipSpan = document.getElementById('details-box');
var map = document.querySelectorAll('[data-name]');
document.addEventListener('mouseover', function (e) {
    
    try {
        if (e.target.tagName == 'path') {
            if(map == undefined) {
            }
            var content = e.target.dataset.name;
            document.getElementById("details-box").innerHTML = content;
            document.getElementById("details-box").style.opacity = "100%";
            map.style.opacity = "100%";
            
        }
        else {
            document.getElementById("details-box").style.opacity = "0%";
            map.style.opacity = "0%";
        }
    } catch (error) {  
    }
   
});

window.onmousemove = function (e) {
    var x = e.clientX,
        y = e.clientY;
    tooltipSpan.style.top = (y + 50) + 'px';
    tooltipSpan.style.left = (x) + 'px';
};