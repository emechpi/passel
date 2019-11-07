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
        var targetElement = $(this).data('target');
        $('body').append('<div class="blurred-box"></div>');
        $('body').addClass('has-bottom-sheet');
        $(targetElement).addClass('show');
    });
    $('.bottom-sheet-closer').on('click', function () {
        if($('body').hasClass('has-bottom-sheet')) {
            closeBottomSheet();
        }else {
            return false;
        }
    });
    $('.btn-counter .btn-plus').on('click', function () {
        var value = parseInt($(this).siblings('.btn-value').text());
        $(this).siblings('.btn-value').html(value + 1);
    });
    $('.btn-counter .btn-mines').on('click', function () {
        var value = parseInt($(this).siblings('.btn-value').text());
        if(value === 0 ) {
            return false
        } else {
            $(this).siblings('.btn-value').html(value - 1);
        }
    });
    $('.calendar-wrapper').persianDatepicker({
        inline: true,
        altField: '#calendarValue',
        altFormat: 'dddd  DD MMMM YYYY',
        toolbox:{
            calendarSwitch:{
                enabled: false
            }
        },
        navigator:{
            scroll:{
                enabled: false
            }
        },
        maxDate: new persianDate().add('month', 3).valueOf(),
        minDate: new persianDate().subtract('month', 3).valueOf(),
        timePicker: {
            enabled: false
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

