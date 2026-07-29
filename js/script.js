// ================= SCROLL REVEAL =================


const reveals = document.querySelectorAll("section");


function revealOnScroll(){

    for(let i = 0; i < reveals.length; i++){

        let windowHeight = window.innerHeight;

        let elementTop = reveals[i].getBoundingClientRect().top;

        let visiblePoint = 120;


        if(elementTop < windowHeight - visiblePoint){

            reveals[i].classList.add("reveal");

            setTimeout(()=>{

                reveals[i].classList.add("active");

            },100);

        }

    }

}


window.addEventListener("scroll", revealOnScroll);


revealOnScroll();
// ================= HMT COUNTDOWN + IMPACT REVEAL =================

const developerModal = document.getElementById("developerModal");

const developerSound = document.getElementById("developerSound");

const developerPhoto =
    document.querySelector(".developer-photo-wrapper");

const countdown =
    document.querySelector(".hmt-countdown");

const countdownNumber =
    document.getElementById("countdownNumber");

const hmtFlash =
    document.querySelector(".hmt-flash");
    const screenPulse =
    document.querySelector(".screenPulse");


let countdownTimer;


if (
    developerModal &&
    developerSound &&
    developerPhoto &&
    countdown &&
    countdownNumber &&
    hmtFlash
) {

    developerModal.addEventListener(
        "shown.bs.modal",
        function () {

            // Reset everything

            clearInterval(countdownTimer);

            developerPhoto.classList.remove(
                "hmt-reveal"
            );

            developerModal.classList.remove(
                "hmt-impact"
            );

            hmtFlash.classList.remove(
                "hmt-flash-active"
            );
screenPulse.classList.remove("active");
            countdown.style.display = "flex";

            countdownNumber.textContent = "5";


            // Start song

            developerSound.currentTime = 0;

            developerSound.play().then(() => {

    // Start first pulse
    screenPulse.classList.add("active");

}).catch(
                function (error) {

                    console.log(
                        "Audio could not play:",
                        error
                    );

                }
            );


            // Countdown

            let count = 5;


            countdownTimer = setInterval(
                function () {

                    count--;


                    if (count > 0) {

                        countdownNumber.textContent =
                            count;
                            // Pulse the whole screen on every count

screenPulse.classList.remove("active");

void screenPulse.offsetWidth;

screenPulse.classList.add("active");


                        // Restart number animation

                        countdownNumber.style.animation =
                            "none";


                        void countdownNumber.offsetWidth;


                        countdownNumber.style.animation =
                            "hmtCountdownPulse 0.8s ease-in-out";


                    }

                    else {

                        clearInterval(
                            countdownTimer
                        );

// Stop pulsing before the final reveal

screenPulse.classList.remove("active");
                        // Hide countdown
            

                        countdown.style.display =
                            "none";


                        // Flash

                        hmtFlash.classList.add(
                            "hmt-flash-active"
                        );


                        // Whole popup impact

                        developerModal.classList.add(
                            "hmt-impact"
                        );


                        // Crazy photo reveal

                        developerPhoto.classList.add(
                            "hmt-reveal"
                        );

                    }

                },

                1160

            );

        }
    );


    developerModal.addEventListener(
        "hidden.bs.modal",
        function () {

            clearInterval(
                countdownTimer
            );


            // Stop audio

            developerSound.pause();

            developerSound.currentTime = 0;


            // Reset effects

            developerPhoto.classList.remove(
                "hmt-reveal"
            );

            developerModal.classList.remove(
                "hmt-impact"
            );

            hmtFlash.classList.remove(
                "hmt-flash-active"
            );

            countdown.style.display =
                "flex";

            countdownNumber.textContent =
                "5";

        }
    );

}