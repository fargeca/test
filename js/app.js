

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


});

