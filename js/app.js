/* ========================= */
/* AUDIO */
/* ========================= */

const musicModal =
document.getElementById("musicModal");

const playMusicBtn =
document.getElementById("playMusic");

const musicControl =
document.getElementById("musicControl");

/* AUDIO */

const audio =
new Audio("./assets/music/music.mp3");

audio.loop = true;

/* ESTADO */

let isPlaying = false;

/* ========================= */
/* INICIAR */
/* ========================= */

playMusicBtn.addEventListener("click", async () => {

    try{

        await audio.play();

        isPlaying = true;

        musicModal.style.display = "none";

        musicControl.style.display = "flex";

        musicControl.innerHTML =
        `<i class="fa-solid fa-pause"></i>`;

    }catch(error){

        console.log(
            "Error reproduciendo audio:",
            error
        );
    }

});

/* ========================= */
/* CONTROL */
/* ========================= */

musicControl.addEventListener("click", () => {

    if(isPlaying){

        audio.pause();

        isPlaying = false;

        musicControl.innerHTML =
        `<i class="fa-solid fa-play"></i>`;

    }else{

        audio.play();

        isPlaying = true;

        musicControl.innerHTML =
        `<i class="fa-solid fa-pause"></i>`;
    }

});

/* ========================= */
/* COUNTDOWN */
/* ========================= */

const targetDate =
new Date("October 10, 2026 19:00:00").getTime();

/* ELEMENTOS */

const daysEl =
document.getElementById("days");

const hoursEl =
document.getElementById("hours");

const minutesEl =
document.getElementById("minutes");

const secondsEl =
document.getElementById("seconds");

/* FUNCIÓN */

function updateCountdown(){

    const now =
    new Date().getTime();

    const distance =
    targetDate - now;

    /* TIEMPOS */

    const days =
    Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );

    const hours =
    Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        /
        (1000 * 60 * 60)
    );

    const minutes =
    Math.floor(
        (distance % (1000 * 60 * 60))
        /
        (1000 * 60)
    );

    const seconds =
    Math.floor(
        (distance % (1000 * 60))
        /
        1000
    );

    /* IMPRIMIR */

    daysEl.innerHTML =
    days.toString().padStart(2,"0");

    hoursEl.innerHTML =
    hours.toString().padStart(2,"0");

    minutesEl.innerHTML =
    minutes.toString().padStart(2,"0");

    secondsEl.innerHTML =
    seconds.toString().padStart(2,"0");
}

/* ACTUALIZAR */

setInterval(updateCountdown, 1000);

updateCountdown();

/* ========================= */
/* SLIDER */
/* ========================= */

const slides =
document.querySelectorAll(".slide");

const nextBtn =
document.querySelector(".next");

const prevBtn =
document.querySelector(".prev");

/* ÍNDICE */

let currentSlide = 0;

/* MOSTRAR */

function showSlide(index){

    slides.forEach(slide => {

        slide.classList.remove("active");

    });

    slides[index].classList.add("active");
}

/* NEXT */

nextBtn.addEventListener("click", () => {

    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;
    }

    showSlide(currentSlide);
});

/* PREV */

prevBtn.addEventListener("click", () => {

    currentSlide--;

    if(currentSlide < 0){

        currentSlide =
        slides.length - 1;
    }

    showSlide(currentSlide);
});

/* AUTO */

setInterval(() => {

    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;
    }

    showSlide(currentSlide);

}, 5000);

/* ========================= */
/* REVEAL */
/* ========================= */

const reveals =
document.querySelectorAll(".reveal");

/* FUNCIÓN */

function revealSections(){

    const triggerBottom =
    window.innerHeight * 0.85;

    reveals.forEach(section => {

        const sectionTop =
        section.getBoundingClientRect().top;

        if(sectionTop < triggerBottom){

            section.classList.add("active");
        }

    });

}

window.addEventListener(
    "scroll",
    revealSections
);

revealSections();

/* ========================= */
/* PARTÍCULAS */
/* ========================= */

const particles =
document.querySelector(".particles");

for(let i = 0; i < 45; i++){

    const particle =
    document.createElement("span");

    particle.style.left =
    Math.random() * 100 + "vw";

    const size =
    Math.random() * 6 + 4;

    particle.style.width =
    size + "px";

    particle.style.height =
    size + "px";

    particle.style.animationDuration =
    Math.random() * 10 + 8 + "s";

    particle.style.animationDelay =
    Math.random() * 5 + "s";

    particles.appendChild(particle);
}

/* ========================= */
/* PÉTALOS */
/* ========================= */

const petals =
document.querySelector(".petals");

for(let i = 0; i < 28; i++){

    const petal =
    document.createElement("span");

    petal.style.left =
    Math.random() * 100 + "vw";

    const size =
    Math.random() * 14 + 10;

    petal.style.width =
    size + "px";

    petal.style.height =
    size + "px";

    petal.style.animationDuration =
    Math.random() * 10 + 10 + "s";

    petal.style.animationDelay =
    Math.random() * 5 + "s";

    petals.appendChild(petal);
}