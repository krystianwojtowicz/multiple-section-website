$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        nav: false,
        dots: true,
        autoplay: false,
        responsive: {
            0: {
                items: 1,
            }
        }
    })
});

// const progress = document.querySelector('.progress-done');
// progress.getElementsByClassName.width = progress.getAttribute('data-done') + '%';
// progress.style.opacity = 1;