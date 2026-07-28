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
// ================= DEVELOPER REVEAL =================

const developerModal = document.getElementById("developerModal");
const developerSound = document.getElementById("developerSound");
const developerPhoto = document.querySelector(".developer-photo");

if (developerModal && developerSound && developerPhoto) {

    developerModal.addEventListener("shown.bs.modal", function () {

        // Hide photo
        developerPhoto.style.opacity = "0";
        developerPhoto.style.transform = "scale(0.7)";

        // Start audio
        developerSound.currentTime = 0;

        developerSound.play().catch(function (error) {
            console.log("Audio could not play:", error);
        });

        // Show photo after exactly 5.3 seconds
        setTimeout(function () {

            developerPhoto.style.opacity = "1";
            developerPhoto.style.transform = "scale(1)";

        }, 5300);

    });

    developerModal.addEventListener("hidden.bs.modal", function () {

        developerSound.pause();
        developerSound.currentTime = 0;

        developerPhoto.style.opacity = "0";
        developerPhoto.style.transform = "scale(0.7)";

    });

}