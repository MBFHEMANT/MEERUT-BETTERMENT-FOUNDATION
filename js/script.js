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