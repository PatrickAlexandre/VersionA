
// Initialisation de la carte
var map = L.map('map').setView([48.9401, 2.1769], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '&copy; OpenStreetMap contributors' }).addTo(map);

var greenSpaces = [
    {
        "name": "Parc des Trois Ormes",
        "coordinates": [
            [48.9391, 2.1778],
            [48.9392, 2.1781],
            [48.9394, 2.1779],
            [48.9393, 2.1776]
        ],
        "lastCollection": "2024-06-15"
    },
    // autres sites...
];

var polygons = [];

// Afficher les polygones sur la carte
greenSpaces.forEach((site, index) => {
    var color = getColor(site.lastCollection);
    var coordinates = site.coordinates[0]; // Utiliser la première coordonnée pour le lien Google Maps
    var googleMapsLink = `https://www.google.com/maps/dir/?api=1&destination=${coordinates[0]},${coordinates[1]}`;
    var popupContent = `<b>${site.name}</b><br>Dernière Collecte: ${site.lastCollection}<br><a href="${googleMapsLink}" class="btn btn-primary btn-sm mt-2" target="_blank">S'y rendre</a>`;
    var polygon = L.polygon(site.coordinates, { color: color, fillColor: color, fillOpacity: 0.5 }).addTo(map).bindPopup(popupContent);
    polygons.push(polygon);
});
    