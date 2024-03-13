function revealSecret() {
    var secretParagraph = document.getElementById("secret");
    var h1 = document.getElementsByTagName("h1");
    var h2 = document.getElementsByTagName("h2");
    var h3 = document.getElementsByTagName("h3");
    var buttons = document.getElementsByTagName("button");
    var body = document.body;
    var paragraphs = document.getElementsByTagName("p");
    var table = document.getElementsByTagName("table");
    var th = document.getElementsByTagName("th");
    var td = document.getElementsByTagName("td");
    var normalB = document.getElementById("normalButton");
    var link = document.getElementsByTagName("a");
    secretParagraph.style.color = "#a9fcc9";
    body.style.backgroundColor = "#5a5a5a";
    link[0].style.color = "#81f3ad";
    normalB.onclick = hideSecret;
    for (var i = 0; i < h1.length; i++) {h1[i].style.color = "#a9fcc9";}
    for (var i = 0; i < h2.length; i++) {h2[i].style.color = "#a9fcc9";}
    for (var i = 0; i < h3.length; i++) {h3[i].style.color = "#a9fcc9";}
    for (var i = 0; i < paragraphs.length; i++) {paragraphs[i].style.color = "#ffffff";}
    for (var i = 0; i < table.length; i++) {table[i].style.color = "#ffffff";}
    for (var i = 0; i < th.length; i++) {
        th[i].style.backgroundColor = "#747474";
        th[i].style.borderRadius = "0px";
        th[i].style.border = "2px solid #5a5a5a";
        th[i].style.color = "#a9fcc9";
    }
    for (var i = 0; i < td.length; i++) {
        td[i].style.backgroundColor = "#848484";
        td[i].style.borderRadius = "0px";
        td[i].style.border = "2px solid #5a5a5a";
    }
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = "#a9fcc9";
        buttons[i].style.borderRadius = "10px";
        buttons[i].style.color = "#000000";
    }
}

function hideSecret() {
    var secretParagraph = document.getElementById("secret");
    var h1 = document.getElementsByTagName("h1");
    var h2 = document.getElementsByTagName("h2");   
    var h3 = document.getElementsByTagName("h3");
    var body = document.body;
    var paragraphs = document.getElementsByTagName("p");
    var table = document.getElementsByTagName("table");
    var th = document.getElementsByTagName("th");
    var td = document.getElementsByTagName("td");
    var normalB = document.getElementById("normalButton");
    var secretB = document.getElementById("secretButton");
    var link = document.getElementsByTagName("a");
    body.style.backgroundColor = "#ffffff";
    secretParagraph.style.color = "#ffffff";
    link[0].style.color = "purple";
    normalB.style.backgroundColor = "#a057e6";
    normalB.style.borderRadius = "0px";
    normalB.style.color = "#ffffff";
    secretB.style.backgroundColor = "#ffffff";
    secretB.style.color = "#ffffff";
    normalB.onclick = revealSecret;
    for (var i = 0; i < h1.length; i++) {h1[i].style.color = "#000000";}
    for (var i = 0; i < h2.length; i++) {h2[i].style.color = "#000000";}
    for (var i = 0; i < h3.length; i++) {h3[i].style.color = "#000000";}
    for (var i = 0; i < paragraphs.length; i++) {paragraphs[i].style.color = "#000000";}
    for (var i = 0; i < table.length; i++) {table[i].style.color = "#000000";}
    for (var i = 0; i < th.length; i++) {
        th[i].style.backgroundColor = "#f2f2f2";
        th[i].style.border = "2px solid #000000";
        th[i].style.color = "#a057e6";
    }
    for (var i = 0; i < td.length; i++) {
        td[i].style.backgroundColor = "#ffffff";
        td[i].style.border = "2px solid #000000";
    }
}