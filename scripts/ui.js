
// Fonctions d'affichage et interactions utilisateur

// Fonction pour afficher la liste des sites
function displayList(sites) {
    $('#site-list').html('<ul class="list-group">' + sites.map((site, index) => `<li class="list-group-item" data-index="${index}">${site.name}</li>`).join('') + '</ul>');
}

// Fonction pour afficher le tableau des sites
function displayTable(sites) {
    $('#site-table tbody').html(sites.map(site => `<tr><td>${site.name}</td><td>${site.coordinates[0][0]}</td><td>${site.coordinates[0][1]}</td><td>${site.lastCollection}</td></tr>`).join(''));
}

// Afficher la liste au chargement et cacher les autres sections
$('#site-list').removeClass('hidden');
$('#site-table, #planning-content').addClass('hidden');
displayList(greenSpaces);
displayTable(greenSpaces);

// Ouvrir le popup correspondant lorsque l'on clique sur un élément de la liste
$('#site-list').on('click', '.list-group-item', function() {
    var index = $(this).data('index');
    if (index !== undefined) {
        polygons[index].openPopup();
        map.flyTo(polygons[index].getBounds().getCenter(), 16);
    }
});

// Fonction pour afficher les sites en fonction du mode de vue sélectionné
$('#search').on('input', function() {
    var query = $(this).val().toLowerCase();
    var filteredSites = greenSpaces.filter(site => site.name.toLowerCase().includes(query));
    displayList(filteredSites);
    displayTable(filteredSites);
});

$('#view-list').on('click', function() {
    $('#site-list').removeClass('hidden');
    $('#site-table, #planning-content').addClass('hidden');
});

$('#view-table').on('click', function() {
    $('#site-list').addClass('hidden');
    $('#site-table').removeClass('hidden');
    $('#planning-content').addClass('hidden');
});

$('#view-planning').on('click', function() {
    $('#site-list, #site-table').addClass('hidden');
    $('#planning-content').removeClass('hidden');
});
    