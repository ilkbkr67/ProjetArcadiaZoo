import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/habitat", "Nos habitats", "/pages/habitat.html"),
    new Route("/carnivore", "Les Carnivores", "/pages/carnivore.html"),
    new Route("/herbivore", "Les Herbivores", "/pages/herbivore.html"),
    new Route("/volant", "Les Volants", "/pages/volant.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Zoo-Arcdia";