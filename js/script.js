const tokenCookieName = "accesstoken";
const RoleCookieName = "role";
const apiUrl = "http://127.0.0.1:8000/";

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}

function isConnected() {
    return getCookie(tokenCookieName) !== null;
}

document.getElementById("btn-validation-inscription").addEventListener("click", async () => {
    const form = document.getElementById("formulaireInscription");

    const data = {
        Nom: form.elements.Nom.value.trim(),
        Prenom: form.elements.Prenom.value.trim(),
        Email: form.elements.Email.value.trim(),
        Password: form.elements.Password.value,
        PasswordConfirm: form.elements.PasswordConfirm.value,
        Role: Array.from(form.querySelectorAll('input[name="role"]:checked')).map(role => role.value),
    };

    // Validation côté client
    if (!data.Nom || !data.Prenom || !data.Email || !data.Password || !data.PasswordConfirm) {
        alert("Tous les champs sont obligatoires.");
        return;
    }

    if (data.Password !== data.PasswordConfirm) {
        alert("Les mots de passe ne correspondent pas.");
        return;
    }

    if (data.Role.length === 0) {
        alert("Veuillez sélectionner au moins un rôle.");
        return;
    }

    try {
        console.log("Données envoyées :", data);

        const response = await fetch(apiUrl + "register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
            mode: "cors", // Ajout pour CORS
        });

        if (response.ok) {
            alert("Inscription réussie !");
            form.reset(); // Réinitialiser le formulaire
        } else {
            const error = await response.json();
            console.error("Erreur serveur :", error);
            alert("Erreur : " + (error.message || "Une erreur s'est produite."));
        }
    } catch (error) {
        console.error("Erreur lors de l'inscription :", error);
        alert("Une erreur est survenue. Veuillez réessayer.");
    }
});
