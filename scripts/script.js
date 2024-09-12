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

    // getting an ellement by it's class name selects a group rather than a specific ellement so if i want to change it's style
    // I have to use a loop, reccomeneded a for loop.
    document.getElementById("scroll-tiles").style.display = "grid";

}

function hideReportTiles() {
    DocumentFragment.getElementById("scroll-tiles").style.display = "none";
}

// Allow the User to switch webpages "virtually" by
// loading in the home content when an "button" tag is clicked
function loadReportsContent(event) {
    event.preventDefault();

    console.log("Loading Report Content...")

    // Grab Article headline from txt file on server
    fetch("texts/reports-headline.txt")
        .then(response => response.text())
        .then(data => {
            document.getElementById("page-headline").innerText = data;
            document.getElementById("page-title").innerText = "📁";

            /* for the Reports section of the website,
             I can't just change the title to data of it's fiel since there are many dates
             per reports file. so I for this one, I'm just going to set the 
             title to something blank.
            */ 
        });
    displayReportTiles();

    

};

// Get the specific record.txt file and display it
function loadSpecificReport(fileName) {

    fetch(fileName)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network Response is suffering: " + response.statusText);
            }
            return response.text();
        })
        .then(data => {

            // It works!

            document.getElementById("page-text").innerHTML = data;
            
        })
        .catch(error => {

            // It doesn't work :(
            console.error("There is an error with the fetch");
            document.getElementById("page-text").innerText = "Error 404?... maybe.";
        })

  
}



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

    document.getElementById("load-reports").addEventListener("click", displayReportTiles);
    document.getElementById("load-reports").addEventListener("click", loadReportsContent);
})          