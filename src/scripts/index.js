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
        $('body').append('<div class="blurred-box" onclick="closeBottomSheet()"></div>');
        $('html').addClass('has-bottom-sheet');
        $(targetElement).addClass('show');
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
    $('.datepicker').persianDatepicker({
        inline: false,
        format: 'YY/MM/DD',
        toolbox:{
            calendarSwitch:{
                enabled: false
            }
        },
    });
    $('.list-group .list-group-item').on('click', function () {
        $(this).siblings('.list-group-item').removeClass('expand');
        $(this).toggleClass('expand');
    });
    $('.go-to-top').on('click', function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
    $('#mnmn').on('click', function () {
        $('#myTab li:first-child a').tab('show')
    });
    $(".tab-content").swipe( {
        swipeLeft:function() {
            var navElement = $(this).data('nav');
            $("#" + navElement).find(".nav-item .active").parent().next('li').find('a').tab('show');
        },
        swipeRight:function() {
            var navElement = $(this).data('nav');
            $("#" + navElement).find(".nav-item .active").parent().prev('li').find('a').tab('show');
        },
    });
    $(function() {
        $(".overflow-x-auto").swipe( {
            allowPageScroll:"horizontal",
            swipeStatus:function() {
                return false;
            }
        });
    });

    $('.material-select').SumoSelect({
        nativeOnDevice: [],
        floatWidth: 5000
    });
});
function closeMenu() {
    $('body').removeClass('has-menu');
    $('.dark-overlay').remove();
    $('.navigation-menu').removeClass('show');
}
function closeBottomSheet() {
    $('html').removeClass('has-bottom-sheet');
    $('.blurred-box').remove();
    $('.bottom-sheet').removeClass('show');
}

