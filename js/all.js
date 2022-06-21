$(document).ready(function(){
    // 下拉選單
    $('.hamburgerBtn').click(function(event){
        event.preventDefault();
        $(this).parent().find('.menu').toggleClass('menu--open');
    });

    // 點擊愛心
    $('.like').hover(function(event){
        event.preventDefault();
        $(this).toggleClass('like--active');
        $(this).find('i').toggleClass('fa-regular fa-heart').toggleClass('fa-solid fa-heart');
    });
    $('.like').click(function(event){
        event.preventDefault();
        $(this).toggleClass('like--active');
        $(this).find('i').toggleClass('fa-regular fa-heart').toggleClass('fa-solid fa-heart');
    });
});