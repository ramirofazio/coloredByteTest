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

/*
    Hello Stranger! My name is Ramiro.

    I hope you like this code, I have some things to reinforce, but I'm in constant learning and have a lot of consistency :D.

    My objective is to enter on a company to learn of my seniors collagues and stay there to progress and to develop high quality 
    software. I really hope that you consider my profile to this position, i want to work here. 

    My final objective as a Dev is to become a real Senior, help others and to develop very high software structures and create
    innovative technologies. Thanks 4 read.

    -RFD

*/