$(document).ready(function() {
    $('.gallery').mauGallery({
        columns: {
            xs: 1,
            sm: 2,
            md: 3,
            lg: 3,
            xl: 3
        },
        lightBox: true,
        lightboxId: 'myAwesomeLightbox',
        showTags: true,
        tagsPosition: 'top'
    });
});


//ajout pour UX : 

// const headerLinks = document.querySelectorAll('header ul.nav li a'); // je recupere les liens du header

// headerLinks.forEach( headerLink => {
//     headerLink.addEventListener('click', function(event) {
//         event.preventDefault();

//         //je retire la classe 'active' des liens 
//         headerLinks.forEach(link => {
//             link.classList.remove('active');
//         });

//         //j'ajoute la classe 'active' au click
//         this.classList.add('active');

//         const targetId = this.getAttribut('href').substring(1);
//         const targetElement = document.getElementById(targetId);

//         targetElement.scrollIntoView({ behavior: 'smooth'});
//     });
// });