const photoImage = document.getElementById("allImages");

let titre = 'jspoqskd';
let imgSource = "../images/carnivore/teddy/bear-422682_1280.jpg";

let monImage = getImage(titre, imgSource);

photoImage.innerHTML = monImage;


function getImage(titre, urlImage){
    titre = sanitizeHTML(titre);
    urlImage = sanitizeHTML(urlImage);     
    return      ` <div class="col p-3">
                     <div class="image-card">
                        <img src="${urlImage}" class="rounded w-100"/>
                        <p class= "titre-image">${titre}</p>
                            <div class="action-image-buttons">
                                <button type="button" class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#SupprPhotoModal"><i class="bi bi-trash"></i></button>
                                <button type="button" class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#EditionPhotoModal"><i class="bi bi-pencil-square"></i></button>
                            </div>
                        </div>
                    </div> `;
}