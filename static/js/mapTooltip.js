var tooltip = document.getElementById('details-box');
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
    tooltip.style.top = (y + 50) + 'px';
    tooltip.style.left = (x) + 'px';
};
