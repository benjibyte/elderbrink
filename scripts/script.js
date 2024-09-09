// Get the article text from a txt file on the server,
// And do so on webpage Load


// Allow the User to switch webpages "virtually" by
// loading in the home content when an "a" tag is clicked
function loadHomeContent(event) {
    event.preventDefault();// Prevent default Article tag behavior so itjust loads in the content instead of switching to a different webpage

    // Grab page headline from txt file on server
    fetch("texts/home-headline.txt")
        .then(response => response.text())
        .then(data => {
            document.getElementById("page-headline").innerText = data;
        })


    fetch("texts/home-article.txt")
        .then(response => response.text())
        .then(data => {
            document.getElementById("page-text").innerText = data;

        })
        .catch(error => console.error("Error fetching the text file:", error))
};


// Load the Reports Webpage



// When the document loads in, I want to keep the record
// buttons hidden until the user clicks on the Records link
function displayReportTiles() {
    let tiles = document.getElementsByClassName("tiles");
    if (tiles.style.display === "none") {
        tiles.style.display = "";
    }
}

// Allow the User to switch webpages "virtually" by
// loading in the home content when an "a" tag is clicked
function loadReportsContent(event) {
    event.preventDefault();


    // Grab Article headline from txt file on server
    fetch("texts/reports-headline.txt")
        .then(response => response.text())
        .then(data => {
            document.getElementById("page-headline").innerText = data;
        })


    // Grab Article text from server
    fetch("texts/reports-article.txt")
        .then(response => response.text())
        .then(data => {
            // grabs the paragraph tag with the "article text" id and slides the data from the txt file into that slot.
            document.getElementById("page-text").innerHTML = data;

        })
        .catch(error => console.error("Error fetching the text file:", error))

};




// Load the Schedule Webpage

// Allow the User to switch webpages "virtually" by
// loading in the home content when an "a" tag is clicked
function loadScheduleContent(event) {
    event.preventDefault();



    // Grab Article headline from txt file on server
    fetch("texts/schedule-headline.txt")
        .then(response => response.text())
        .then(data => {
            document.getElementById("page-headline").innerText = data;
        })


    // Grab Article text from server
    fetch("texts/schedule-article.txt")
        .then(response => response.text())
        .then(data => {
            // grabs the paragraph tag with the "article text" id and slides the data from the txt file into that slot.
            document.getElementById("page-text").innerText = data;

        })
        .catch(error => console.error("Error fetching the text file:", error))

};

// Load ALL of this content to the tags after the html has loaded into the browser
document.addEventListener("DOMContentLoaded", function () {
    // Call the function "loadHomeContent" when the article tag is clicked, making it appear as if we are changing webpages.
    document.getElementById("load-home").addEventListener("click", loadHomeContent);
    // Call the function to load the Schedule content. (adds the onclick to the html without having to actually edit the html)
    document.getElementById("load-schedule").addEventListener("click", loadScheduleContent);
    // Call the function to load the Report content. (adds the onclick to the html without having to actually edit the html)
    document.getElementById("load-reports").addEventListener("click", loadReportsContent);
})