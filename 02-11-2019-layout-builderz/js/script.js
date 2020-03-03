$(function() {
    var currentSlide = 1;
    var slideLength = $('.js-slideList .Slide-item').length;

    $('.js-slideBtn').click(function(){
        if($(this).hasClass('Slide-control__btn--next')){
            currentSlide++;
        } else {
            currentSlide--;
        }
        if(currentSlide > slideLength){
            currentSlide = 1;
        } else if (currentSlide < 1){
            currentSlide = slideLength;
        }
        scrollSlide(currentSlide);
    });

    setInterval(function(){
        currentSlide++;
        if(currentSlide > slideLength){
            currentSlide = 1;
        }
        scrollSlide(currentSlide);
    },5000);

    function scrollSlide(index){
        var slideItem = $('#Slide' + index);
        $('.js-slideList').animate({
            'left' : 0-slideItem.position().left
        },500);
    }

});