let posts = document.querySelector(".location-container");
let central = document.getElementById("central");
let north = document.getElementById("north");
let south = document.getElementById("south");
let east = document.getElementById('east');
let west = document.getElementById('west');
let region = "";

getLocationByRegion("Central");
central.addEventListener('click', () => {
    posts.innerHTML = "";
    region = "Central";
    central.style.fontStyle = "italic";
    north.style.fontStyle = "normal";
    south.style.fontStyle = "normal";
    east.style.fontStyle = "normal";
    west.style.fontStyle = "normal";
    getLocationByRegion(region);
});

north.addEventListener('click', () => {
    posts.innerHTML = "";
    region = "North";
    north.style.fontStyle = "italic";
    central.style.fontStyle = "normal";
    south.style.fontStyle = "normal";
    east.style.fontStyle = "normal";
    west.style.fontStyle = "normal";
    getLocationByRegion(region);
});

south.addEventListener('click', () => {
    posts.innerHTML = "";
    region = "South";
    south.style.fontStyle = "italic";
    north.style.fontStyle = "normal";
    central.style.fontStyle = "normal";
    east.style.fontStyle = "normal";
    west.style.fontStyle = "normal";
    getLocationByRegion(region);
});

east.addEventListener('click', () => {
    posts.innerHTML = "";
    region = "East";
    east.style.fontStyle = "italic";
    north.style.fontStyle = "normal";
    south.style.fontStyle = "normal";
    central.style.fontStyle = "normal";
    west.style.fontStyle = "normal";
    getLocationByRegion(region);
});

west.addEventListener('click', () => {
    posts.innerHTML = "";
    region = "West";
    west.style.fontStyle = "italic";
    north.style.fontStyle = "normal";
    south.style.fontStyle = "normal";
    east.style.fontStyle = "normal";
    central.style.fontStyle = "normal";
    getLocationByRegion(region);
    console.log(region);
});

async function getLocationByRegion(region) {
    fetch(`http://localhost:3200/getLocationsByRegion/${region}`)
        .then((response) => response.json())
        .then((body) => {
            console.log(body);
            for (let i = 0; i < body['data'].length; i++) {
                let entry = body['data'][i];
                console.log(entry);

                // Dynamically generate the HTML
                posts.insertAdjacentHTML('beforeend', `
                    <div class="post-container" style="border: 1px solid #ccc; border-radius: 10px; width: 250px; margin: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                        <div style="position: relative; overflow: hidden; border-radius: 10px 10px 0 0;">
                            <img src='./src/images/sunset1.JPG' alt="Sunset Image" style="width: 100%; height: 250px; object-fit: cover;" class="thumbnail-cover">
                        </div>
                        <div style="padding: 10px;">
                            <h3 style="margin: 0; font-size: 14px; color: #333;">📍${entry['Title']}</h3>
                            <p style="margin: 5px 0; font-size: 12px; color: #555;">${entry['Description']}</p>
                            <div style="display: flex; justify-content: space-between; align-items: center;">
                                <span style="font-size: 14px; font-weight: bold; color: #333;">${entry['Author']}</span>
                                <span style="font-size: 14px; color: #FFA500;">${entry['Rating'] || 5.0} ⭐</span>
                            </div>
                        </div>
                    </div>
                `);
            }
        });
}
