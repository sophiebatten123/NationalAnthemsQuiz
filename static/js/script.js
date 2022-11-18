// Round One

document.getElementById('play').onclick = function() {
    document.getElementById('play').innerHTML = '<i class="fa-solid fa-rotate-right"></i>';
    $('#audio').html('<audio autoplay><source src="media/audio.mp3"></audio>');
}

// Round Three

function roundThree() {
    document.getElementById('round').innerHTML = "<p>Round Three</p>";
    document.getElementById('China').style.fill = "blue";
    document.getElementById('Canada').style.fill = "green";
    document.getElementById('pop-up').style.display = "none";
    document.getElementById('play').innerHTML = '<i class="fa-solid fa-circle-play"></i>';

    document.getElementById('play').onclick = function() {
        document.getElementById('play').innerHTML = '<i class="fa-solid fa-rotate-right"></i>';
        $('#audio').html('<audio autoplay><source src="media/france.mp3"></audio>');
    }
        
    document.getElementById('pause').onclick = function() {
        $('#audio').html('');
    }
    
    let country = document.getElementsByClassName("country");
    
    for (let i=0; i < country.length; i++) {
        country[i].addEventListener('click', function(e) {
            if(country[i].id == 'France') {
                document.getElementById('France').style.fill = "black";
                document.getElementById('pop-up-text').innerHTML = "<p>Correct Answer</p>";
                document.getElementById('pop-up').style.display = "block";
                document.getElementById('next-round').onclick = function() {
                    roundFour();
                }
                $('#audio').html('');
            } else {
                document.getElementById('France').style.fill = "black";
                document.getElementById('pop-up-text').innerHTML = "<p>Wrong Answer</p>";
                document.getElementById('pop-up').style.display = "block";
                document.getElementById('next-round').onclick = function() {
                    roundFour();
                }
                $('#audio').html('');
            }
        })
    }
}

// Round Four

function roundFour() {
    document.getElementById('round').innerHTML = "<p>Round Four</p>";
    document.getElementById('China').style.fill = "blue";
    document.getElementById('Canada').style.fill = "green";
    document.getElementById('pop-up').style.display = "none";
    document.getElementById('play').innerHTML = '<i class="fa-solid fa-circle-play"></i>';

    document.getElementById('play').onclick = function() {
        document.getElementById('play').innerHTML = '<i class="fa-solid fa-rotate-right"></i>';
        $('#audio').html('<audio autoplay><source src="media/germany.mp3"></audio>');
    }
        
    document.getElementById('pause').onclick = function() {
        $('#audio').html('');
    }
    
    let country = document.getElementsByClassName("country");
    
    for (let i=0; i < country.length; i++) {
        country[i].addEventListener('click', function(e) {
            if(country[i].id == 'Germany') {
                document.getElementById('Germany').style.fill = "black";
                document.getElementById('pop-up-text').innerHTML = "<p>Correct Answer</p>";
                document.getElementById('pop-up').style.display = "block";
                document.getElementById('next-round').onclick = function() {
                    roundFive();
                }
                $('#audio').html('');
            } else {
                document.getElementById('Germany').style.fill = "black";
                document.getElementById('pop-up-text').innerHTML = "<p>Wrong Answer</p>";
                document.getElementById('pop-up').style.display = "block";
                document.getElementById('next-round').onclick = function() {
                    roundFive();
                }
                $('#audio').html('');
            }
        })
    }
}


document.getElementById('pause').onclick = function() {
    $('#audio').html('');
}

var tooltipSpan = document.getElementById('details-box');
var map = document.querySelectorAll('[data-name]');
document.addEventListener('mouseover', function (e) {
    
    try {
        if (e.target.tagName == 'path') {
            if(map == undefined) {
                console.log("coming soon");
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
        console.log("error");
        
    }
   
});

window.onmousemove = function (e) {
    var x = e.clientX,
        y = e.clientY;
    tooltipSpan.style.top = (y + 50) + 'px';
    tooltipSpan.style.left = (x) + 'px';
};