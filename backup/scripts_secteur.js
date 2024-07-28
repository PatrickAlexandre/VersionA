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

// Example polygon (You can replace this with the actual site coordinates)
const polygon = L.polygon([
    [48.948, 2.168],
    [48.949, 2.169],
    [48.947, 2.170]
]).addTo(map).bindPopup('Example Site');

const sites = [
    { id: 1, name: "Parc Youri Gagarine", address: "Rue Genevoix", coords: [48.948, 2.168] },
    { id: 2, name: "Parc Léo Lagrange", address: "Rue Genevoix", coords: [48.949, 2.169] },
    // Ajoutez d'autres sites ici avec leurs coordonnées
];

// Populate table with site data
const siteTableBody = document.getElementById('site-table-body');
sites.forEach(site => {
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
});

// Search functionality
document.getElementById('search').addEventListener('input', function() {
    const searchValue = this.value.toLowerCase();
    const rows = siteTableBody.querySelectorAll('tr');
    rows.forEach(row => {
        const siteName = row.cells[1].textContent.toLowerCase();
        if (siteName.includes(searchValue)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
});
