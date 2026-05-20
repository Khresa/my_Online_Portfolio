// WELCOME MESSAGE

console.log("Welcome to Khresa Mae Aquino Portfolio!");


// BUTTON CLICK EFFECT

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        button.style.transform = "scale(0.95)";

        setTimeout(() => {

            button.style.transform = "scale(1)";

        }, 150);

    });

});


// NAVBAR SHADOW EFFECT

window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if(window.scrollY > 50){

        nav.style.boxShadow = "0 4px 20px rgba(0,0,0,0.4)";

    }

    else{

        nav.style.boxShadow = "none";

    }

});


// FADE ANIMATION ON SCROLL

const cards = document.querySelectorAll(".skill-card, .project-card");

window.addEventListener("scroll", () => {

    cards.forEach(card => {

        const cardTop = card.getBoundingClientRect().top;

        if(cardTop < window.innerHeight - 100){

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }

    });

});