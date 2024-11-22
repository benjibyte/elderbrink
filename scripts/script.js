
window.onscroll = function() {scrollProgress()};
window.onload = function() {fadeInContent()};

// Add a scroll progress bar
function scrollProgress() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let winHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / winHeight) * 100;
    document.getElementById("progress-filling").style.width = scrolled + "%";
}


// Fade in the Main Content on webpage load by adding a class to increase the opacity on the css
function fadeInContent() {
    document.getElementById("record-btn-container").classList.add("loaded");
    document.querySelector("main-page").classList.add("slidedown");
}

function loadInReport(report) {


    const reportURL = report;
    const reportText = fetch(reportURL)
        .then(response => response.text())
        .then(data => {
            document.getElementById("content").innerHTML = data;
        })
    
    
}



