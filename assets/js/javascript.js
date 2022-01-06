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

$(function() {
    
    var $meters = $(".progress progress-striped active > span");
    var $section = $('#third');
    var $queue = $({});
    
    function loadDaBars() {
				$(".progress progress-striped active > span").each(function() {
					$(this)
						.data("origWidth", $(this).width())
						.width(0)
						.animate({
							width: $(this).data("origWidth")
						}, 1200);
				});
    }
    
    $(document).bind('scroll', function(ev) {
        var scrollOffset = $(document).scrollTop();
        var containerOffset = $section.offset().top - window.innerHeight;
        if (scrollOffset > containerOffset) {
            loadDaBars();
            $(document).unbind('scroll');
        }
    });
    
});