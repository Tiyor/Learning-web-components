window.onload = function() {
    var screen = document.getElementById("display");

    window.passToScreen = function(x) {
        screen.value += x;
    }

    window.clearDisplay = function() {
        screen.value = "";
    }

    window.doMath = function() {
        var y = screen.value;
        y = eval(y);
        screen.value = y;
    }

    window.backSpace = function() {
        var elem = screen.value;
        var newElem = elem.slice(0, elem.length - 1);
        screen.value = newElem;
    }
}
