let opacity = .4;
let timeout;

let paths = document.getElementsByTagName("path");

let year1991 = document.getElementById("year-1991");
let year2001 = document.getElementById("year-2001");
let year2011 = document.getElementById("year-2011");

function changeOpacity(object) {
    if (opacity < 1) {
        opacity += .05;
        timeout = setTimeout(function() {
            changeOpacity(object);
        }, 50);
    }
    object.style.opacity = opacity;
}

function decreaseOpacity(event) {
    year1991.innerText = "N/A";
    year2001.innerText = "N/A";
    year2011.innerText = "N/A";

    clearTimeout(timeout);
    event.target.style.opacity = .4;
    opacity = .4;
}

function increaseOpacity(event) {
    year1991.innerText = Math.trunc(event.target.getAttribute("pocet_ob_91"));
    year2001.innerText = Math.trunc(event.target.getAttribute("pocet_ob_01"));
    year2011.innerText = Math.trunc(event.target.getAttribute("pocet_ob_11"));

    changeOpacity(event.target);
}

window.onload = function() {
    for (let path of paths) {
        path.style.stroke = "#4d88ff";
        path.style.opacity = opacity;
        path.style.fill = "#4d88ff";


        path.addEventListener("mouseover", increaseOpacity);
        path.addEventListener("mouseout", decreaseOpacity);
    }
};

console.log(paths);
