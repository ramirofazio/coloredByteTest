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
    const likeBtnSvg = document.getElementById("likeBtnSvg");
    if (likeBtnPath.style.fill !== "white") {
        likeBtnPath.style.fill = "white"
        likeBtnPath.style.stroke = "black"
    } else {
        likeBtnPath.style.fill = "#ED4956"
        likeBtnPath.style.stroke = "none"
        likeBtnSvg.animate([
            {
                transform: "scale(1)"
            },
            {
                transform: "scale(1.4)"
            },
            {
                transform: "scale(1)"
            },
        ],
            {
                direction: "alternate",
                duration: 200,
                iterations: 1,
            }

        )
    }
}