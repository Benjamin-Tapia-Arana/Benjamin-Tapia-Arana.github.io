
var messagesList = ["Do not click me anymore!", "I told you not to click me!", "Stop it!", "I am warning you!", "I am going to reveal a secret if you keep clicking me!", "Are you sure you want to know the secret?", "I am going to tell you the secret!", "Here we go!", "The secret is..."];
var messagesCounter = 0;

function changeName(name) {
    var header = document.getElementsByClassName("headerName");
    for (var i = 0; i < header.length; i++) {header[i].innerHTML = name;}
}

function changeStudies(name) {
    var header = document.getElementsByClassName("headerStudies");
    for (var i = 0; i < header.length; i++) {header[i].innerHTML = name;}
}

function changeUniversity(name) {
    var header = document.getElementsByClassName("headerUniversity");
    for (var i = 0; i < header.length; i++) {header[i].innerHTML = name;}
}

function revealSecret() {
    var principalButton = document.getElementsByClassName("ppal");
    var secretButton = document.getElementsByClassName("sct");
    var secretText = document.getElementsByClassName("text-secret");
    for (var i = 0; i < principalButton.length; i++) {
        principalButton[i].innerHTML = messagesList[messagesCounter];
        if (messagesCounter < 8) {messagesCounter++;}
        else {
            for (var i = 0; i < secretButton.length; i++) {secretButton[i].classList.remove("sct");}
            for (var i = 0; i < secretText.length; i++) {secretText[i].style.color = "#000000";}
        }
    }
}
