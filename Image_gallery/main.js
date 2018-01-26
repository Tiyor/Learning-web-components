
/* Getting element values */
var displayedImage = document.querySelector('.displayed-img');
var container = document.querySelector('.container');

var btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */
for (var i = 1; i <= 5; i++) {
    var newImage = document.createElement('img');
    newImage.setAttribute('src', 'Images/pic' + i + '.jpeg');
    container.appendChild(newImage);
    newImage.onclick = function(e) {
        var imgSrc = e.target.getAttribute('src');
        displayImage(imgSrc);
    }
}

function displayImage(imgSrc) {
    displayedImage.setAttribute('src', imgSrc);
}

/* Wiring up the Darken/Lighten button */
btn.onclick = function() {
    var btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'LIGHT';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.4)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'DARK';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
}

/* Animating text lines */
var text = ["'Good mom = Sticker floors + dirty ovens + happy kids'",
    "'Hearing their little laughter makes all the tiredness go away'",
    "'Just let them be a little...'"
];
var counter = 0;
var elem = document.getElementById("changeText");
setInterval(change, 4000);

function change() {
    elem.innerHTML = text[counter];
    counter++;
    if (counter >= text.length) {
        counter = 0;
    }
}
