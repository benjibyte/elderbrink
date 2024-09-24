document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById("gallery-container");
   
    const photoArray = [
        "bentonville-arkansas-mission.jpg",
        "butchered-chickens.jpg",
        "library.jpg",
        "personal-scripture-study",
        "personal-workspace.jpg",
        "teaching-programming-class-o1.jpg",
        "the-dominion-of-adam.jpg"
    ];

    photoArray.forEach(photo => {
        const currentPhoto = document.createElement("img");
        currentPhoto.src = photo;
        
    });
});
