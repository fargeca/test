

$(document).ready(function() {

$('.sidebar__nav-item').on('click', function() {
    $(this).toggleClass('clicked');
});


$('.sidebarCollapse').on('click', function () {
    $('.sidebar-wrapper').toggleClass('sidebar--active');
});

$('.searchbarCollapse').on('click', function () {
    $('.searchbar').toggleClass('searchbar--active');
});

// $('.search-icon').on('click', function () {
//     $('.navbar-xs__input').toggleClass('navbar-xs__input--active');
// });



});

