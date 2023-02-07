function mdp() {
    let champ_saisie = document.getElementById("saisie").value;
    let div_reponse = document.getElementById("reponse");
    div_reponse.style.color = "blue";
    div_reponse.style.fontSize = "xx-large";

    if (champ_saisie === "eip@c@!") {
        div_reponse.textContent = "Vous avez cassé le code, félicitations !";
        document.querySelector("body").background = "images/security1.jpg";
    } else {
        div_reponse.textContent = "Try again !";
    }
}