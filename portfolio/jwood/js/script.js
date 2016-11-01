'use strict';

$(".main").onepage_scroll({
    sectionContainer: "section", // контейнер, к которому будет применяться скролл
    easing: "ease-out", // Тип анимации "ease", "linear", "ease-in", "ease-out", "ease-in-out"
    animationTime: 1100, // время анимации
    pagination: false, // скрыть или отобразить пагинатор
    updateURL: false // обновлять URL или нет
});

$(document).ready(function(){
    $(".main-nav").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
});
