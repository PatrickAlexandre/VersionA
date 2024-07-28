function activateLink(e) {
    document.querySelectorAll('nav.mobile-nav a').forEach(link => link.classList.remove('active'));
    e.currentTarget.classList.add('active');
}

document.getElementById('theme-toggle').addEventListener('click', (e) => {
    e.preventDefault();
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.body.setAttribute('data-theme', newTheme);
    e.currentTarget.textContent = newTheme === 'light' ? 'Mode Sombre' : 'Mode Clair';
});

document.querySelectorAll('nav.mobile-nav a').forEach(link => {
    link.addEventListener('click', activateLink);
});

const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelector('nav.mobile-nav a.active').classList.remove('active');
            document.querySelector(`nav.mobile-nav a[href="#${entry.target.id}"]`).classList.add('active');
        }
    });
}, { threshold: 0.5 });

sections.forEach(section => observer.observe(section));

// Initialize Leaflet map
const map = L.map('map').setView([48.948, 2.168], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Site data
const sites = [
    { id: 1, name: "Parc Youri Gagarine", address: "Rue Genevoix", coords: [48.948, 2.168] },
    { id: 2, name: "Parc Léo Lagrange", address: "Rue Genevoix", coords: [48.949, 2.169] },
    { id: 3, name: "Jardin Paul Déroulède", address: "Rue de Déroulède", coords: [48.9485, 2.1665] },
    { id: 4, name: "Rond-Point des Combattants", address: "Avenue de la République", coords: [48.946, 2.162] },
    { id: 5, name: "Square Pierre et Marie Curie", address: "Rue Pierre et Marie Curie", coords: [48.9472, 2.1678] },
    // Ajoutez d'autres sites ici avec leurs coordonnées
];

// Add sites to map
sites.forEach(site => {
    L.marker(site.coords).addTo(map)
        .bindPopup(`${site.name}<br>${site.address}`);
});

// Populate table with site data
const siteTableBody = document.getElementById('site-table-body');
const siteCardsContainer = document.getElementById('site-cards');
sites.forEach(site => {
    // Table rows
    const row = document.createElement('tr');
    row.innerHTML = `
        <th scope="row">${site.id}</th>
        <td>${site.name}</td>
        <td>${site.address}</td>
        <td>
            <a href="https://www.google.com/maps?q=${site.coords[0]},${site.coords[1]}" target="_blank" class="btn btn-info btn-sm">
                <i class="fas fa-map-marker-alt"></i> Voir Carte
            </a>
        </td>
    `;
    siteTableBody.appendChild(row);

    // Grid cards
    const card = document.createElement('div');
    card.className = 'card col-md-4 mb-3';
    card.innerHTML = `
        <div class="card-body">
            <h5 class="card-title">${site.name}</h5>
            <p class="card-text">${site.address}</p>
            <a href="https://www.google.com/maps?q=${site.coords[0]},${site.coords[1]}" target="_blank" class="btn btn-info btn-sm">
                <i class="fas fa-map-marker-alt"></i> Voir Carte
            </a>
        </div>
    `;
    siteCardsContainer.appendChild(card);
});

// Search functionality
document.getElementById('search').addEventListener('input', function() {
    const searchValue = this.value.toLowerCase();
    const rows = siteTableBody.querySelectorAll('tr');
    const cards = siteCardsContainer.querySelectorAll('.card');
    rows.forEach(row => {
        const siteName = row.cells[1].textContent.toLowerCase();
        if (siteName.includes(searchValue)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
    cards.forEach(card => {
        const siteName = card.querySelector('.card-title').textContent.toLowerCase();
        if (siteName.includes(searchValue)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
});

// Toggle view functionality
document.getElementById('list-view-btn').addEventListener('click', () => {
    document.getElementById('site-container').classList.remove('grid-view');
    document.getElementById('site-container').classList.add('list-view');
    document.getElementById('list-view-btn').classList.add('active');
    document.getElementById('grid-view-btn').classList.remove('active');
});

document.getElementById('grid-view-btn').addEventListener('click', () => {
    document.getElementById('site-container').classList.remove('list-view');
    document.getElementById('site-container').classList.add('grid-view');
    document.getElementById('grid-view-btn').classList.add('active');
    document.getElementById('list-view-btn').classList.remove('active');
});
