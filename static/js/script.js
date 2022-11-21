
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

//const csrftoken = getCookie('csrftoken');

// Counter

var counter = 0;

// Leaderboard

document.getElementById('leader-board').onclick = function() {
    document.getElementById('highscore').style.display = "block";
};


// Round One

function roundOne() {
    document.getElementById('score-counter').style.display = 'block';
    document.getElementById('question').style.display = 'block';
    document.getElementById('round').innerHTML = "Round One";
    document.getElementById('main-buttons').style.display = "none";
    document.getElementById('play').style.display = "block";
    document.getElementById('play').onclick = function() {
        document.getElementById('play').style.display = "none";
        $('#audio').html('<audio autoplay><source src="media/canada.mp3"></audio>');
        
        let country = document.getElementsByClassName("country");
    
        for (let i=0; i < country.length; i++) {
            country[i].addEventListener('click', function(e) {
            if(country[i].id == 'Canada') {
                document.getElementById('Canada').style.fill = "black";
                document.getElementById('pop-up-text').innerHTML = "<p>Correct Answer</p>";
                document.getElementById('pop-up').style.display = "block";
                document.getElementById('pop-up').style.backgroundColor = "green";
                document.getElementById('next-round').onclick = function() {
                    roundTwo();
                };
                $('#audio').html('');
                counter += 1;
                document.getElementById('counter').innerHTML = `${counter}`;
            } else {
                document.getElementById('Canada').style.fill = "black";
                document.getElementById('pop-up-text').innerHTML = "<p>Wrong Answer! The correct answer was Canada!</p>";
                document.getElementById('pop-up').style.display = "block";
                document.getElementById('pop-up').style.backgroundColor = "red";
                document.getElementById('next-round').onclick = function() {
                    roundTwo();
                };
                $('#audio').html('');
            }
            });
        }
    };
}

// Round Two

function roundTwo() {
    document.getElementById('round').innerHTML = "Round Two";
    document.getElementById('pop-up').style.display = "none";
    document.getElementById('Canada').style.fill = "#29bb7a";
    document.getElementById('play').style.display = "block";

    document.getElementById('play').onclick = function() {
        document.getElementById('play').style.display = "none";
        $('#audio').html('<audio autoplay><source src="media/china.mp3"></audio>');

        let country = document.getElementsByClassName("country");
    
        for (let i=0; i < country.length; i++) {
            country[i].addEventListener('click', function(e) {
            if(country[i].id == 'China') {
                document.getElementById('Canada').style.fill = "#29bb7a";
                document.getElementById('China').style.fill = "black";
                document.getElementById('pop-up-text').innerHTML = "<p>Correct Answer</p>";
                document.getElementById('pop-up').style.display = "block";
                document.getElementById('pop-up').style.backgroundColor = "green";
                document.getElementById('next-round').onclick = function() {
                    roundThree();
                };
                counter += 1;
                $('#audio').html('');
                document.getElementById('counter').innerHTML = `${counter}`;
            } else {
                document.getElementById('Canada').style.fill = "#29bb7a";
                document.getElementById('China').style.fill = "black";
                document.getElementById('pop-up-text').innerHTML = "<p>Wrong Answer! The correct answer was China.</p>";
                document.getElementById('pop-up').style.display = "block";
                document.getElementById('pop-up').style.backgroundColor = "red";
                document.getElementById('next-round').onclick = function() {
                    roundThree();
                };
                $('#audio').html('');
            }
            });
        }
    };
}

// Round Three

function roundThree() {
    document.getElementById('round').innerHTML = "Round Three";
    document.getElementById('pop-up').style.display = "none";
    document.getElementById('play').style.display = "block";
    document.getElementById('Canada').style.fill = "#29bb7a";
    document.getElementById('China').style.fill = "#009347";

    document.getElementById('play').onclick = function() {
        document.getElementById('play').style.display = "none";
        $('#audio').html('<audio autoplay><source src="media/france.mp3"></audio>');

        let country = document.getElementsByClassName("country");
    
        for (let i=0; i < country.length; i++) {
            country[i].addEventListener('click', function(e) {
            if(country[i].id == 'France') {
                document.getElementById('Canada').style.fill = "#29bb7a";
                document.getElementById('China').style.fill = "#009347";
                document.getElementById('France').style.fill = "black";
                document.getElementById('pop-up-text').innerHTML = "<p>Correct Answer</p>";
                document.getElementById('pop-up').style.display = "block";
                document.getElementById('pop-up').style.backgroundColor = "green";
                document.getElementById('next-round').onclick = function() {
                    roundFour();
                };
                $('#audio').html('');
                counter += 1;
                document.getElementById('counter').innerHTML = `${counter}`;
            } else {
                document.getElementById('Canada').style.fill = "#29bb7a";
                document.getElementById('China').style.fill = "#009347";
                document.getElementById('France').style.fill = "black";
                document.getElementById('pop-up-text').innerHTML = "<p>Wrong Answer! The correct answer was France</p>";
                document.getElementById('pop-up').style.display = "block";
                document.getElementById('pop-up').style.backgroundColor = "red";
                document.getElementById('next-round').onclick = function() {
                    roundFour();
                };
                $('#audio').html('');
            }
            });
        }
    };
}

// Round Four

function roundFour() {
    document.getElementById('round').innerHTML = "Round Four";
    document.getElementById('pop-up').style.display = "none";
    document.getElementById('Canada').style.fill = "#29bb7a";
    document.getElementById('China').style.fill = "#009347";
    document.getElementById('France').style.fill = "#ff0000";
    document.getElementById('play').style.display = "block";

    document.getElementById('play').onclick = function() {
        document.getElementById('play').style.display = "none";
        $('#audio').html('<audio autoplay><source src="media/germany.mp3"></audio>');

        let country = document.getElementsByClassName("country");
    
        for (let i=0; i < country.length; i++) {
            country[i].addEventListener('click', function(e) {
            if(country[i].id == 'Germany') {
                document.getElementById('Canada').style.fill = "#29bb7a";
                document.getElementById('China').style.fill = "#009347";
                document.getElementById('France').style.fill = "#ff0000";
                document.getElementById('Germany').style.fill = "black";
                document.getElementById('pop-up-text').innerHTML = "<p>Correct Answer</p>";
                document.getElementById('pop-up').style.display = "block";
                document.getElementById('pop-up').style.backgroundColor = "green";
                document.getElementById('next-round').onclick = function() {
                    roundFive();
                };
                $('#audio').html('');
                counter += 1;
                document.getElementById('counter').innerHTML = `${counter}`;
            } else {
                document.getElementById('Canada').style.fill = "#29bb7a";
                document.getElementById('China').style.fill = "#009347";
                document.getElementById('France').style.fill = "#ff0000";
                document.getElementById('Germany').style.fill = "black";
                document.getElementById('pop-up-text').innerHTML = "<p>Wrong Answer! The correct answer was Germany</p>";
                document.getElementById('pop-up').style.display = "block";
                document.getElementById('pop-up').style.backgroundColor = "red";
                document.getElementById('next-round').onclick = function() {
                    roundFive();
                };
                $('#audio').html('');
            }
            });
        }
    };
}

// Round Five

function roundFive() {
    document.getElementById('round').innerHTML = "Round Five";
    document.getElementById('Canada').style.fill = "#29bb7a";
    document.getElementById('China').style.fill = "#009347";
    document.getElementById('France').style.fill = "#ff0000";
    document.getElementById('Germany').style.fill = "#ffa500";
    document.getElementById('pop-up').style.display = "none";
    document.getElementById('play').style.display = "block";

    document.getElementById('play').onclick = function() {
        document.getElementById('play').style.display = "none";
        $('#audio').html('<audio autoplay><source src="media/japan.mp3"></audio>');

        let country = document.getElementsByClassName("country");
    
        for (let i=0; i < country.length; i++) {
            country[i].addEventListener('click', function(e) {
            if(country[i].id == 'Japan') {
                document.getElementById('Canada').style.fill = "#29bb7a";
                document.getElementById('China').style.fill = "#009347";
                document.getElementById('France').style.fill = "#ff0000";
                document.getElementById('Germany').style.fill = "#ffa500";
                document.getElementById('Japan').style.fill = "black";
                document.getElementById('pop-up-text').innerHTML = "<p>Correct Answer</p>";
                document.getElementById('pop-up').style.display = "block";
                document.getElementById('pop-up').style.backgroundColor = "green";
                document.getElementById('next-round').onclick = function() {
                    roundSix();
                };
                $('#audio').html('');
                counter += 1;
                document.getElementById('counter').innerHTML = `${counter}`;
            } else {
                document.getElementById('Canada').style.fill = "#29bb7a";
                document.getElementById('China').style.fill = "#009347";
                document.getElementById('France').style.fill = "#ff0000";
                document.getElementById('Germany').style.fill = "#ffa500";
                document.getElementById('Japan').style.fill = "black";
                document.getElementById('pop-up-text').innerHTML = "<p>Wrong Answer! The correct answer was Japan</p>";
                document.getElementById('pop-up').style.display = "block";
                document.getElementById('pop-up').style.backgroundColor = "red";
                document.getElementById('next-round').onclick = function() {
                    roundSix();
                };
                $('#audio').html('');
            }
            });
        }
    };
}

// Round Six

function roundSix() {
    document.getElementById('round').innerHTML = "Round Six";
    document.getElementById('Canada').style.fill = "#29bb7a";
    document.getElementById('China').style.fill = "#009347";
    document.getElementById('France').style.fill = "#ff0000";
    document.getElementById('Germany').style.fill = "#ffa500";
    document.getElementById('Japan').style.fill = "#ffc0cb";
    document.getElementById('pop-up').style.display = "none";
    document.getElementById('play').style.display = "block";

    document.getElementById('play').onclick = function() {
        document.getElementById('play').style.display = "none";
        $('#audio').html('<audio autoplay><source src="media/russia.mp3"></audio>');

        let country = document.getElementsByClassName("country");
    
        for (let i=0; i < country.length; i++) {
            country[i].addEventListener('click', function(e) {
            if(country[i].id == 'Russia') {
                document.getElementById('Canada').style.fill = "#29bb7a";
                document.getElementById('China').style.fill = "#009347";
                document.getElementById('France').style.fill = "#ff0000";
                document.getElementById('Germany').style.fill = "#ffa500";
                document.getElementById('Japan').style.fill = "#ffc0cb";
                document.getElementById('Russia').style.fill = "black";
                document.getElementById('pop-up-text').innerHTML = "<p>Correct Answer</p>";
                document.getElementById('pop-up').style.display = "block";
                document.getElementById('pop-up').style.backgroundColor = "green";
                document.getElementById('next-round').onclick = function() {
                    roundSeven();
                };
                $('#audio').html('');
                counter += 1;
                document.getElementById('counter').innerHTML = `${counter}`;
            } else {
                document.getElementById('Canada').style.fill = "#29bb7a";
                document.getElementById('China').style.fill = "#009347";
                document.getElementById('France').style.fill = "#ff0000";
                document.getElementById('Germany').style.fill = "#ffa500";
                document.getElementById('Japan').style.fill = "#ffc0cb";
                document.getElementById('Russia').style.fill = "black";
                document.getElementById('pop-up-text').innerHTML = "<p>Wrong Answer! The correct answer was Russia</p>";
                document.getElementById('pop-up').style.display = "block";
                document.getElementById('pop-up').style.backgroundColor = "red";
                document.getElementById('next-round').onclick = function() {
                    roundSeven();
                };
                $('#audio').html('');
            }
            });
        }
    };
}

// Round Seven

function roundSeven() {
    document.getElementById('round').innerHTML = "Round Seven";
    document.getElementById('Canada').style.fill = "#29bb7a";
    document.getElementById('China').style.fill = "#009347";
    document.getElementById('France').style.fill = "#ff0000";
    document.getElementById('Germany').style.fill = "#ffa500";
    document.getElementById('Japan').style.fill = "#ffc0cb";
    document.getElementById('Russia').style.fill = "#2375b7";
    document.getElementById('pop-up').style.display = "none";
    document.getElementById('play').style.display = "block";

    document.getElementById('play').onclick = function() {
        document.getElementById('play').style.display = "none";
        $('#audio').html('<audio autoplay><source src="media/spain.mp3"></audio>');

        let country = document.getElementsByClassName("country");
    
        for (let i=0; i < country.length; i++) {
            country[i].addEventListener('click', function(e) {
            if(country[i].id == 'Spain') {
                document.getElementById('pop-up').style.display = "none";
                document.getElementById('Canada').style.fill = "#29bb7a";
                document.getElementById('China').style.fill = "#009347";
                document.getElementById('France').style.fill = "#ff0000";
                document.getElementById('Germany').style.fill = "#ffa500";
                document.getElementById('Japan').style.fill = "#ffc0cb";
                document.getElementById('Russia').style.fill = "#2375b7";
                document.getElementById('Spain').style.fill = "black";
                document.getElementById('last-round').style.backgroundColor = "green";
                document.getElementById('last-round-text').innerHTML = "<p>Correct Answer</p>";
                document.getElementById('last-round').style.display = "block";
                $('#audio').html('');
                counter += 1;
                document.getElementById('counter').innerHTML = `${counter}`;
                document.getElementById('results').onclick = function() {
                    document.getElementById('last-round').style.display = "none";
                    document.getElementById('final').style.display = 'block';
                    document.getElementById('final-text').innerHTML = '<p>Congratulations! You scored `${counter}`/10</p>';
                    document.getElementById('end').onclick = function() {
                        endGame();
                    };
                };
            } else {
                document.getElementById('pop-up').style.display = "none";
                document.getElementById('last-round-text').innerHTML = "<p>Wrong answer! The correct answer was Spain</p>";
                document.getElementById('last-round').style.display = "block";
                document.getElementById('Canada').style.fill = "#29bb7a";
                document.getElementById('China').style.fill = "#009347";
                document.getElementById('France').style.fill = "#ff0000";
                document.getElementById('Germany').style.fill = "#ffa500";
                document.getElementById('Japan').style.fill = "#ffc0cb";
                document.getElementById('Russia').style.fill = "#2375b7";
                document.getElementById('Spain').style.fill = "black";
                document.getElementById('last-round').style.backgroundColor = "red";
                $('#audio').html('');
                document.getElementById('results').onclick = function() {
                    document.getElementById('last-round').style.display = "none";
                    document.getElementById('final').style.display = 'block';
                    document.getElementById('final-text').innerHTML = `${counter}`;
                    document.getElementById('end').onclick = function() {
                        endGame();
                    };
                };
            }
            });
        }
    };
}

// End Game

function endGame() {
    document.getElementById('final').display = 'block';
    document.getElementById('final-text').innerHTML = `${counter}`;
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


