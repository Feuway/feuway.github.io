'use strict';

$(".main").onepage_scroll({
    sectionContainer: "section", // контейнер, к которому будет применяться скролл
    easing: "ease-out", // Тип анимации "ease", "linear", "ease-in", "ease-out", "ease-in-out"
    animationTime: 1100, // время анимации
    pagination: true, // скрыть или отобразить пагинатор
    updateURL: false // обновлять URL или нет
});

$(document).ready(function() {
    $('.main-nav').on('click', 'a', function() {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body, html').animate({scrollTop: top}, 1500);
    });
});

var Gallery = function(gallery) {
    this.pictures = [];
    this.activePicture = 0;
    this.photogallery = document.querySelector(gallery);
    this.overlayGallary = document.querySelector('.overlay-gallery');
    this.leftArrow = this.overlayGallary.querySelector('.overlay-gallery_control-left');
    this.rightArrow = this.overlayGallary.querySelector('.overlay-gallery_control-right');
    this.previewNumberCurrent = this.overlayGallary.querySelector('.preview-number-current');
    this.previewNumberTotal = this.overlayGallary.querySelector('.preview-number-total');
    this.closeGallery = this.overlayGallary.querySelector('.overlay-gallery_close');
};

Gallery.prototype.init = function() {
    var self = this;
    var photogalleryImage = this.photogallery.querySelectorAll('.portfolio__gallery-photo');
    Array.prototype.forEach.call(photogalleryImage, function(item, i) {
        var image = item.src;
        self.pictures.push(image);

        item.onclick = function() {
            self.show(i);
        };
    });
};

Gallery.prototype.show = function(number) {
    this.overlayGallary.classList.remove('invisible');
    this.setActivePicture(number);

    this.closeGallery.addEventListener('click', this.closedGallery.bind(this));
    this.leftArrow.addEventListener('click', this.onClickLeftArrow.bind(this));
    this.rightArrow.addEventListener('click', this.onClickRightArrow.bind(this));
};

Gallery.prototype.hide = function() {
    this.overlayGallary.classList.add('invisible');

    this.closeGallery.removeEventListener('click', this.closedGallery.bind(this));
    this.leftArrow.removeEventListener('click', this.onClickLeftArrow.bind(this));
    this.rightArrow.removeEventListener('click', this.onClickRightArrow.bind(this));
};

Gallery.prototype.setActivePicture = function(number) {
    this.activePicture = number;
    var picture = new Image();
    picture.src = this.pictures[number];
    picture.style.width = '100%';
    picture.style.height = '100%';

    this.previewNumberCurrent.textContent = this.activePicture + 1;
    this.previewNumberTotal.textContent = this.pictures.length;

    this.galleryPreview = this.overlayGallary.querySelector('.overlay-gallery_preview');
    this.galleryPreview.replaceChild(picture, this.galleryPreview.firstChild);
};

Gallery.prototype.closedGallery = function() {
    this.hide();
};

Gallery.prototype.onClickLeftArrow = function() {
    this.activePicture--;
    if (this.activePicture >= 0) {
        this.setActivePicture(this.activePicture);
    } else {
        this.setActivePicture(this.pictures.length - 1);
    }
};

Gallery.prototype.onClickRightArrow = function() {
    this.activePicture++;
    if (this.activePicture <= this.pictures.length - 1) {
        this.setActivePicture(this.activePicture);
    } else {
        this.activePicture = -1;
    }
    console.log(this.activePicture);
};

var gallery = new Gallery('.portfolio__gallery');
gallery.init();

