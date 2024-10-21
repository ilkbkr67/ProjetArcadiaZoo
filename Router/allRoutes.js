import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/accueil/home.html"),
    new Route("/habitat", "Nos habitats", "/pages/accueil/habitat.html"),
    new Route("/carnivore", "Les Carnivores", "/pages/habitats/carnivore.html"),
    new Route("/herbivore", "Les Herbivores", "/pages/habitats/herbivore.html"),
    new Route("/volant", "Les Volants", "/pages/habitats/volant.html"),
    new Route("/teddy", "Teddy", "/pages/habitats/animaux/teddy.html"),
    new Route("/cacao", "Cacao", "/pages/habitats/animaux/cacao.html"),
    new Route("/service", "Nos services", "/pages/accueil/service.html"),
    new Route("/contact", "Nous contacter", "/pages/accueil/contact.html")
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Zoo-Arcdia";