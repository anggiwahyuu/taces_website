var closeNav = function () {
    $(".navcustom-responsive-right-menu").css({
        "width": "0%"
    });
    $(".navcustom-responsive-left-dim").css({
        "width": "0%"
    });
    $(".navcustom-responsive-right-menu-inner").css({
        "display": "none"
    });

    $('.navcustom-right-side').delay(500).queue(function (next) {
        $(this).css('display', 'none');
        next();
    });
}

var openNav = function () {
    $(".navcustom-right-side").css({
        "display": "flex"
    });

    $('.navcustom-responsive-right-menu').delay(1).queue(function (next) {
        $(this).css('width', '50%');
        $(".navcustom-responsive-left-dim").css({
            "width": "50%"
        });
        next();
    });

    $('.navcustom-responsive-right-menu-inner').delay(100).queue(function (next) {
        $(this).css('display', 'block');
        next();
    });
}

$(document).ready(function () {
    $(".navcustom-responsive-left-dim").click(function () {
        closeNav();
    });

    $(".navcustom-right-side-responsive").click(function () {
        openNav();
    });
});