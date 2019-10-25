$('document').ready(function() {
    $('.btn-group button.btn').on('click', function () {
        $(this).siblings('.btn').removeClass('active');
        $(this).addClass('active');
    });
});
