import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/accueil/home.html", []),
    new Route("/habitat", "Nos habitats", "/pages/accueil/habitat.html", []),
    new Route("/carnivore", "Les Carnivores", "/pages/habitats/carnivore.html",[]),
    new Route("/herbivore", "Les Herbivores", "/pages/habitats/herbivore.html",[]),
    new Route("/volant", "Les Volants", "/pages/habitats/volant.html",[]),
    new Route("/teddy", "Teddy", "/pages/habitats/animaux/teddy.html",[], "js/photo.js"),
    new Route("/poutchou", "Poutchou", "/pages/habitats/animaux/poutchou.html",[], "js/photopoutchou.js"),
    new Route("/cacao", "Cacao", "/pages/habitats/animaux/cacao.html",[], "js/photocacaco.js"),
    new Route("/service", "Nos services", "/pages/accueil/service.html",[]),
    new Route("/contact", "Nous contacter", "/pages/accueil/contact.html",[]),
    new Route("/restaurant", "Restaurant", "/pages/Nos service/restaurant.html",[]),
    new Route("/nosvisite", "Nos visites", "/pages/Nos service/nosvisite.html",[]),
    new Route("/connexion", "Connexion", "/pages/login/connexion.html",[], "/js/auth/signin.js"),
    new Route("/inscription", "Inscription(mode Admin)", "/pages/login/inscription.html",[],"/js/auth/signup.js"), //Seul l'admin peut acceder a cette page
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Zoo-Arcadia";