

var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    // autoplay: {
    //     delay: 5000,
    // },
    // effect: 'fade',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
})






var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("nav-link");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

$('.nav-link').click(function () {
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top - 100
    }, 800);
    return false;
});
