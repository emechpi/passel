$('document').ready(function() {
    $('.btn-group button.btn').on('click', function () {
        $(this).siblings('.btn').removeClass('active');
        $(this).addClass('active');
    });
    $('.menu-toggler').on('click', function () {
        $('body').append('<div class="dark-overlay" onclick="closeMenu()"></div>');
        $('body').addClass('has-menu');
        $('.navigation-menu').addClass('show');
    });
    $('.bottom-sheet-toggler').on('click', function () {
        $('body').append('<div class="blurred-box"></div>');
        $('body').addClass('has-bottom-sheet');
        $('.bottom-sheet').addClass('show');
    });
    $('.bottom-sheet-closer').on('click', function () {
        if($('body').hasClass('has-bottom-sheet')) {
            closeBottomSheet();
        }else {
            return false;
        }
    });
});
function closeMenu() {
    $('body').removeClass('has-menu');
    $('.dark-overlay').remove();
    $('.navigation-menu').removeClass('show');
}
function closeBottomSheet() {
    $('body').removeClass('has-bottom-sheet');
    $('.blurred-box').remove();
    $('.bottom-sheet').removeClass('show');
}

