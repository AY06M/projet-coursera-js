function upDate(previewPic) {
    let image = document.getElementById('image');
    image.style.backgroundImage = "url('" + previewPic.src + "')";
    image.innerHTML = previewPic.alt;
    console.log("upDate déclenché pour : " + previewPic.alt);
}
function unDo() {
    let image = document.getElementById('image');
    image.style.backgroundImage = "url('')";
    image.innerHTML = "Survolez ou sélectionnez une image ci-dessous pour l’afficher ici.";
    console.log("unDo déclenché");
}
function ajouterTabIndex() {
    let images = document.querySelectorAll('.preview');
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute('tabindex', '0');
    }
    console.log("Attribut tabindex ajouté à toutes les images.");
}
