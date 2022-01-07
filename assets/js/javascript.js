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



