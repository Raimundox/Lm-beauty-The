/*------------ SHOW MENU-------------*/
const showMneu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)
    /*valida se se existe as variaveis*/
    if (toggle && nav) {
        /*aqui adiciono a class show-menu na div com a class nav__menu*/
        toggle.addEventListener('click', () => {
            /*adicina a class show-menu na div que tem o id nav-menu */
            nav.classList.toggle('show-menu')
        })
    }
}
showMneu('nav-toggle', 'nav')

/*------------ REMOVER MENU MOBILE -------------*/
const navLink = document.querySelectorAll('.nav__link')
function linkAction() {
    const navMenu = document.getElementById('nav')
    /*Quando um link ou o botão close for clicado a class show-menu será removido*/
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== DEIXA O LINK CLICADO COM A CLASS ACTIVE-LINK ====================*/
const linkColor = document.querySelectorAll('.nav__link')

function colorLink(){
    if(linkColor){
        linkColor.forEach(L => L.classList.remove('active-link'))
        this.classList.add('active-link')
    }
}

linkColor.forEach(L=> L.addEventListener('click', colorLink))
/*==================== MUDAR A COR DO HEADER ====================*/
function scrollHeader(){
    const scrollHeader = document.getElementById('header')
    if(this.scrollY >= 100) scrollHeader.classList.add('scroll-header'); else scrollHeader.classList.remove('scroll-header')

}
window.addEventListener('scroll', scrollHeader)


function sendMessage(service) {
    var message = encodeURIComponent("Olá! Estou interessado em agendar um serviço de " + service + ". Poderia me fornecer mais informações?");
    var phoneNumber = "86994905662";  // Substitua pelo número de telefone desejado
    var whatsappLink = "https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + message;
    window.location.href = whatsappLink;
}


//Ver mais fotos
document.addEventListener("DOMContentLoaded", function() {
    const galleryImages = document.getElementById("galleryImages");
    const verMaisBtn = document.getElementById("verMaisBtn");
    const hiddenImages = Array.from(galleryImages.getElementsByClassName("gallery__img")).slice(8);
    let imagesVisible = false;

    function toggleHiddenImages() {
        hiddenImages.forEach(image => {
            if (!imagesVisible) {
                image.style.display = "block";
                verMaisBtn.textContent = "ver menos";
            } else {
                image.style.display = "none";
                verMaisBtn.textContent = "ver mais";
            }
        });
        
        imagesVisible = !imagesVisible;
    }

    // Esconder as imagens extras ao carregar a página
    hiddenImages.forEach(image => {
        image.style.display = "none";
    });

    verMaisBtn.addEventListener("click", toggleHiddenImages);
});
