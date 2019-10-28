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
});
function closeMenu() {
    $('body').removeClass('has-menu');
    $('.dark-overlay').remove();
    $('.navigation-menu').removeClass('show');
}

