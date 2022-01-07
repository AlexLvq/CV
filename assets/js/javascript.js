// NavBar apparait --------------------------------------------------
$(function () {
    $('#nav1').hide();
});
$(window).scroll(function () {
    posScroll = $(document).scrollTop();
    if (posScroll >= 250)
        $('#nav1').slideDown(450);
    else
        $('#nav1').slideUp(450);
});
// NavBar disparait --------------------------------------------------
$(function () {
    $('#navaccueil').show();
});
$(window).scroll(function () {
    posScroll = $(document).scrollTop();
    if (posScroll >= 0)
        $('#navaccueil').slideDown(450);
    else
        $('#navaccueil').slideUp(450);
});


// Barre annimée --------------------------------------------------
$(".plein").animate({
    width: "100%"
}, 2500);
$(".quart").animate({
    width: "25%"
}, 2500);
$(".trois").animate({
    width: "75%"
}, 2500);
$(".moitie").animate({
    width: "50%"
}, 2500);




// hover + active sur les mots de la NavBar --------------------------------------------------
window.addEventListener('scroll', function () {
    section.forEach(item => {
        if (scrollY > (item.offsetTop + (window.innerHeight / 3)) && scrollY <= (item.offsetTop + item.clientHeight + (window.innerHeight / 3))) {

            //d'abord on supprime la classe active sur tous
            navbar_a.forEach(anchor => {
                anchor.classList.remove('active');
            })

            // on met ensuite la classe active sur le lien qui a l'id = link-(id de l'item selectionné)
            document.querySelector('#experience' + item.getAttribute('id')).classList.add('active');
        }
    });
});