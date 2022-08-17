const swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: '.swiper-pagination',
    },
});

const likeBtnSvg = document.getElementsByClassName("likeBtnSvg")[0];
likeBtnSvg.addEventListener("click", function like() {
    const likeBtnPath = document.getElementsByClassName("likeBtnPath")[0];
    if (likeBtnPath.style.fill !== "white") {
        likeBtnPath.style.fill = "white";
        likeBtnPath.style.stroke = "black";
    } else {
        likeBtnPath.style.fill = "#ED4956";
        likeBtnPath.style.stroke = "none";
        likeBtnSvg.animate([
            {
                transform: "scale(1)",
            },
            {
                transform: "scale(1.4)",
            },
            {
                transform: "scale(1)",
            },
        ],
            {
                direction: "alternate",
                duration: 200,
                iterations: 1,
            },

        );
    };
})


const postbtn = document.getElementsByClassName("postBtn");
postbtn[0].addEventListener('click', function addComment(event) {
    event.preventDefault()

    const inputValue = document.getElementsByClassName("commentInput")[0].value;
    if (inputValue) {
        if (inputValue.length < 40) {
            const comments = document.getElementsByClassName("comments");
            const newComment = document.createElement("p");
            newComment.innerHTML = "<span>Comment</span> " + inputValue;
            comments[0].append(newComment);
        } else {
            alert("Plase write a shorter comment!")
        }
    } else {
        alert("Please write a comment first!")
    };
    document.getElementsByClassName("commentInput")[0].value = "";
})
