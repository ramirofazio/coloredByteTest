const swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: '.swiper-pagination',
    },
});

function like() {
    const likeBtnPath = document.getElementById("likeBtnPath");
    if (likeBtnPath.style.fill !== "white") {
        likeBtnPath.style.fill = "white"
        likeBtnPath.style.stroke = "black"
    } else {
        likeBtnPath.style.fill = "#ED4956"
        likeBtnPath.style.stroke = "none"
    }
}