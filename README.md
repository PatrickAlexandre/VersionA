 # Gestion des Espaces Verts

Ce projet permet de gérer et visualiser les espaces verts d'une ville à l'aide d'une carte interactive et de différentes vues pour afficher les informations des sites.

## Structure des Fichiers

- `index.html`: Contient la structure HTML de la page.
- `styles.css`: Contient les styles CSS pour la mise en page et le design.
- `scripts/utils.js`: Contient des fonctions utilitaires pour le projet.
- `scripts/map.js`: Contient le code JavaScript pour l'initialisation de la carte et l'affichage des polygones.
- `scripts/ui.js`: Contient le code JavaScript pour la gestion des interactions utilisateur et l'affichage des différentes vues.

## Fonctionnalités

### Carte Interactive

La carte interactive est initialisée à l'aide de la bibliothèque Leaflet. Elle affiche les polygones des différents espaces verts avec une couleur indiquant la date de la dernière collecte :

- Vert : Collecte dans les 30 derniers jours.
- Orange : Collecte entre 31 et 60 jours.
- Rouge : Collecte il y a plus de 60 jours.

### Vues Disponibles

Il y a trois vues principales disponibles pour afficher les informations des sites :

1. **Liste** : Affiche la liste des sites.
2. **Tableau** : Affiche les sites sous forme de tableau.
3. **Planning** : Affiche le planning du mois pour l'équipe de gestion des espaces verts.

### Recherche

Une fonctionnalité de recherche permet de filtrer les sites affichés en fonction du nom.

## Utilisation

1. Ouvrez `index.html` dans un navigateur web.
2. Utilisez les boutons en haut de la page pour basculer entre les différentes vues : Liste, Tableau, Planning.
3. Utilisez le champ de recherche pour filtrer les sites par nom.
4. Cliquez sur un site dans la vue Liste pour zoomer sur ce site sur la carte et afficher les détails de la collecte.

## Dépendances

Le projet utilise les bibliothèques suivantes :

- [Bootstrap](https://getbootstrap.com/) pour la mise en page et les styles.
- [jQuery](https://jquery.com/) pour les manipulations DOM.
- [Leaflet](https://leafletjs.com/) pour la carte interactive.
- [Font Awesome](https://fontawesome.com/) pour les icônes.

## Installation

1. Téléchargez et extrayez le fichier ZIP du projet.
2. Ouvrez `index.html` dans votre navigateur pour visualiser l'application.

## Auteurs

Ce projet a été développé par Patrick.

