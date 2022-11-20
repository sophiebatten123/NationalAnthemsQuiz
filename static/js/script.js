// Cookie

function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

const csrftoken = getCookie('csrftoken');

// Counter

var counter = 0;

// Leaderboard

document.getElementById('leader-board').onclick = function() {
    document.getElementById('highscore').style.display = "block";
}


// Round One

function roundOne() {
    document.getElementById('question').style.display = 'block';
    document.getElementById('round').innerHTML = "<p>Round One</p>";
    document.getElementById('main-buttons').style.display = "none";
    document.getElementById('play').style.display = "block";
    document.getElementById('play').onclick = function() {
        document.getElementById('play').style.display = "none";
        $('#audio').html('<audio autoplay><source src="media/canada.mp3"></audio>');
    }
    
    let country = document.getElementsByClassName("country");
    let score = document.querySelector('.score');
    
    for (let i=0; i < country.length; i++) {
        country[i].addEventListener('click', function(e) {
            if(country[i].id == 'Canada') {
                document.getElementById('Canada').style.fill = "black";
                document.getElementById('pop-up-text').innerHTML = "<p>Correct Answer</p>";
                document.getElementById('pop-up').style.display = "block";
                document.getElementById('next-round').onclick = function() {
                    result++;
                    score.textContent = result;
                    roundTwo();
                }
                $('#audio').html('');
                counter += 1;
                document.getElementById('counter').innerHTML = `${counter}`;
            } else {
                document.getElementById('Canada').style.fill = "black";
                document.getElementById('pop-up-text').innerHTML = "<p>Wrong Answer! The correct answer was Canada!</p>";
                document.getElementById('pop-up').style.display = "block";
                document.getElementById('next-round').onclick = function() {
                    roundTwo();
                }
                $('#audio').html('');
            }
        })
    }
}

// Round Two

function roundTwo() {
    document.getElementById('round').innerHTML = "<p>Round Two</p>";
    document.getElementById('pop-up').style.display = "none";
    document.getElementById('play').innerHTML = '<i class="fa-solid fa-circle-play"></i>';

    document.getElementById('play').onclick = function() {
        document.getElementById('play').innerHTML = '<i class="fa-solid fa-rotate-right"></i>';
        $('#audio').html('<audio autoplay><source src="media/china.mp3"></audio>');
    }
        
    document.getElementById('pause').onclick = function() {
        $('#audio').html('');
    }
    
    let country = document.getElementsByClassName("country");
    
    for (let i=0; i < country.length; i++) {
        country[i].addEventListener('click', function(e) {
            if(country[i].id == 'China') {
                document.getElementById('pop-up-text').innerHTML = "<p>Correct Answer</p>";
                document.getElementById('pop-up').style.display = "block";
                document.getElementById('next-round').onclick = function() {
                    result++;
                    score.textContent = result;
                    roundThree();
                }
                counter += 1;
                $('#audio').html('');
                document.getElementById('counter').innerHTML = `${counter}`;
            } else {
                document.getElementById('pop-up-text').innerHTML = "<p>Wrong Answer! The correct answer was China.</p>";
                document.getElementById('pop-up').style.display = "block";
                document.getElementById('next-round').onclick = function() {
                    roundThree();
                }
                $('#audio').html('');
            }
        })
    }
}

// Round Three

function roundThree() {
    document.getElementById('round').innerHTML = "<p>Round Three</p>";
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
                document.getElementById('pop-up-text').innerHTML = "<p>Correct Answer</p>";
                document.getElementById('pop-up').style.display = "block";
                document.getElementById('next-round').onclick = function() {
                    result++;
                    score.textContent = result;
                    roundFour();
                }
                $('#audio').html('');
                counter += 1;
                document.getElementById('counter').innerHTML = `${counter}`;
            } else {
                document.getElementById('pop-up-text').innerHTML = "<p>Wrong Answer! The correct answer was France</p>";
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
                document.getElementById('pop-up-text').innerHTML = "<p>Correct Answer</p>";
                document.getElementById('pop-up').style.display = "block";
                document.getElementById('next-round').onclick = function() {
                    result++;
                    score.textContent = result;
                    roundFive();
                }
                $('#audio').html('');
                counter += 1;
                document.getElementById('counter').innerHTML = `${counter}`;
            } else {
                document.getElementById('pop-up-text').innerHTML = "<p>Wrong Answer! The correct answer was Germany</p>";
                document.getElementById('pop-up').style.display = "block";
                document.getElementById('next-round').onclick = function() {
                    roundFive();
                }
                $('#audio').html('');
            }
        })
    }
}

// Round Five

function roundFive() {
    document.getElementById('round').innerHTML = "<p>Round Five</p>";
    document.getElementById('China').style.fill = "blue";
    document.getElementById('Canada').style.fill = "green";
    document.getElementById('pop-up').style.display = "none";
    document.getElementById('play').innerHTML = '<i class="fa-solid fa-circle-play"></i>';

    document.getElementById('play').onclick = function() {
        document.getElementById('play').innerHTML = '<i class="fa-solid fa-rotate-right"></i>';
        $('#audio').html('<audio autoplay><source src="media/japan.mp3"></audio>');
    }
        
    document.getElementById('pause').onclick = function() {
        $('#audio').html('');
    }
    
    let country = document.getElementsByClassName("country");
    
    for (let i=0; i < country.length; i++) {
        country[i].addEventListener('click', function(e) {
            if(country[i].id == 'Japan') {
                document.getElementById('Japan').style.fill = "black";
                document.getElementById('pop-up-text').innerHTML = "<p>Correct Answer</p>";
                document.getElementById('pop-up').style.display = "block";
                document.getElementById('next-round').onclick = function() {
                    result++;
                    score.textContent = result;
                    roundSix();
                }
                $('#audio').html('');
                counter += 1;
                document.getElementById('counter').innerHTML = `${counter}`;
            } else {
                document.getElementById('Japan').style.fill = "black";
                document.getElementById('pop-up-text').innerHTML = "<p>Wrong Answer</p>";
                document.getElementById('pop-up').style.display = "block";
                document.getElementById('next-round').onclick = function() {
                    roundSix();
                }
                $('#audio').html('');
            }
        })
    }
}

// Round Six

function roundSix() {
    document.getElementById('round').innerHTML = "<p>Round Six</p>";
    document.getElementById('China').style.fill = "blue";
    document.getElementById('Canada').style.fill = "green";
    document.getElementById('pop-up').style.display = "none";
    document.getElementById('play').innerHTML = '<i class="fa-solid fa-circle-play"></i>';

    document.getElementById('play').onclick = function() {
        document.getElementById('play').innerHTML = '<i class="fa-solid fa-rotate-right"></i>';
        $('#audio').html('<audio autoplay><source src="media/russia.mp3"></audio>');
    }
        
    document.getElementById('pause').onclick = function() {
        $('#audio').html('');
    }
    
    let country = document.getElementsByClassName("country");
    
    for (let i=0; i < country.length; i++) {
        country[i].addEventListener('click', function(e) {
            if(country[i].id == 'Russia') {
                document.getElementById('Russia').style.fill = "black";
                document.getElementById('pop-up-text').innerHTML = "<p>Correct Answer</p>";
                document.getElementById('pop-up').style.display = "block";
                document.getElementById('next-round').onclick = function() {
                    result++;
                    score.textContent = result;
                    roundSeven();
                }
                $('#audio').html('');
                counter += 1;
                document.getElementById('counter').innerHTML = `${counter}`;
            } else {
                document.getElementById('Russia').style.fill = "black";
                document.getElementById('pop-up-text').innerHTML = "<p>Wrong Answer</p>";
                document.getElementById('pop-up').style.display = "block";
                document.getElementById('next-round').onclick = function() {
                    roundSeven();
                }
                $('#audio').html('');
            }
        })
    }
}

// Round Seven

function roundSeven() {
    document.getElementById('round').innerHTML = "<p>Round Seven</p>";
    document.getElementById('China').style.fill = "blue";
    document.getElementById('Canada').style.fill = "green";
    document.getElementById('pop-up').style.display = "none";
    document.getElementById('play').innerHTML = '<i class="fa-solid fa-circle-play"></i>';

    document.getElementById('play').onclick = function() {
        document.getElementById('play').innerHTML = '<i class="fa-solid fa-rotate-right"></i>';
        $('#audio').html('<audio autoplay><source src="media/spain.mp3"></audio>');
    }
        
    document.getElementById('pause').onclick = function() {
        $('#audio').html('');
    }
    
    let country = document.getElementsByClassName("country");
    
    for (let i=0; i < country.length; i++) {
        country[i].addEventListener('click', function(e) {
            if(country[i].id == 'Spain') {
                document.getElementById('pop-up').style.display = "none";
                document.getElementById('Spain').style.fill = "black";
                document.getElementById('pop-up-text').innerHTML = "<p>Correct Answer</p>";
                document.getElementById('pop-up').style.display = "block";
                document.getElementById('next-round').onclick = function() {
                    result++;
                    score.textContent = result;
                }
                $('#audio').html('');
                counter += 1;
                document.getElementById('counter').innerHTML = `${counter}`;
                endGame();
            } else {
                document.getElementById('pop-up').style.display = "none";
                document.getElementById('Spain').style.fill = "black";
                $('#audio').html('');
                endGame();
            }
        })
    }
}

// End Game

function endGame() {
    fetch("add_score/", {
        method: "POST",
            headers: {
                'X-CSRFToken': getCookie('csrftoken'),
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/json; charset=UTF-8',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                score: counter,
            })
        })
        .then(data => {
            window.location.href = "add_score/";
        })
        .catch(error => {
            console.log(error);
        });
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

// restart Button
const restartButton = document.querySelector('.row #restartButton');
restartButton.addEventListener("click", () => {
    console.log("Restart")
});