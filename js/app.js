

$(document).ready(function() {

$('.sidebar__nav-item').on('click', function() {
    $(this).toggleClass('clicked');
});


$('.sidebarCollapse').on('click', function () {
    $('.sidebar-wrapper').toggleClass('sidebar--active');
});

// $('.searchbarCollapse').on('click', function () {
//     $('.searchbar').toggleClass('searchbar--active');
// });



 $('.navbar-xs__search').on('click', function () {
     $(this).toggleClass('navbar-xs__search--active');
     $('.navbar-xs__input').toggleClass('navbar-xs__input--active');
 });



});

