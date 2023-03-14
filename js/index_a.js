$(function(){
    $('.main_nav>li').hover(function(){
        $(this).find('.sub_nav').stop().slideToggle();
    });

    setInterval(mySlide, 3000);

    function mySlide(){
        $('.slider').animate({
            'top': '-300px'
        },500, function(){
            $('.slider img:first-child').clone().appendTo('.slider');
            $('.slider img:first-child').remove();
            $('.slider').css('left',0);
        });
    };

    $('.tab #bbb').click(function(e){
        e.preventDefault();
        $('#aaa').removeClass('color');
        $(this).addClass('color');
        $('.notice').css("display", "none");
        $('.galley').removeClass('galley').addClass('galley_active');
        $('.galley_active').addClass('color');
        $('.tab #aaa').click(function(e){
            e.preventDefault();
            $('#bbb').removeClass('color');
            $('#aaa').addClass('color');
            $('.galley_active').removeClass('galley_active');
            $('#galley').addClass('galley');
            $('.notice').css('display', 'inline-block');
        });
    });

    $('#popup').click(function(e){
        e.preventDefault();
        $('.popup').css("display", "block");
        $('.btn').click(function(e){
            e.preventDefault();
            $('.popup').hide();
        });
    });
    

}); //JQurey