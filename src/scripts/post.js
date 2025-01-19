const submit = document.getElementById('next-button');
const locationElement = document.getElementById('location-field');
const regionElement = document.getElementById('region-field');
const descriptionElement = document.getElementById('description-field');
const heading = document.getElementById('heading-field');

submit.addEventListener('click', () => {
    let locationValue = locationElement.value;
    let regionValue = regionElement.value;
    let descriptionValue = descriptionElement.value;
    let headingValue = heading.value;
    console.log(locationValue + " " + regionValue + " " + descriptionValue + " " +headingValue);
    let data = JSON.stringify({title : headingValue, region: regionValue, description: descriptionValue, rating: "5.0", author: "@sunsetEnthusiast"});
    fetch("http://localhost:3200/postLocation", {
        method: "POST",
        headers: {"Content-type" : "application/json"},
        body: data,
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        })
});
  
