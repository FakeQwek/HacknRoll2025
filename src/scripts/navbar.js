let locationIcon = document.getElementById("location-icon");
let mapIcon = document.getElementById("map-icon");
let homeIcon = document.getElementById("home-icon");
let plusIcon = document.getElementById("plus-icon");


locationIcon.addEventListener("click", () => {
    window.location.assign("./posts.html");
});

mapIcon.addEventListener("click", () => {
    window.location.assign("./locations.html");
    console.log("locations");
});
console.log("Works till jere");
homeIcon.addEventListener("click", () => {
    window.location.assign("./home.html");
    console.log("home");
});

plusIcon.addEventListener("click", () => {
    window.location.assign("./post.html");
    console.log("plus");
});
console.log("How about here");