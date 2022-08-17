var draggable = document.querySelectorAll('[draggable]')
var targets = document.querySelectorAll('[data-drop-target]');
var removing = document.querySelectorAll('[layers]');

function dragAndDrop(e) {
    e.dataTransfer.setData("text", e.target.id);
}

function allowDrop(e) {
    e.preventDefault();
}

function drop(e) {
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    if (e.target.id == "remove") {
        document.getElementById(data).style.opacity = "0";
    }
    else {
        e.target.style.backgroundColor = document.getElementById(data).style.backgroundColor;
        e.target.style.opacity = "1";
    }
}

for (var i = 0; i < draggable.length; i++) {
    draggable[i].addEventListener('dragstart', dragAndDrop, false);
}

for (var i = 0; i < targets.length; i++) {
    targets[i].addEventListener('dragover', allowDrop, false);
    targets[i].addEventListener('drop', drop, false);
}

function drag(e) {
    e.dataTransfer.setData("text", e.target.id);
}

