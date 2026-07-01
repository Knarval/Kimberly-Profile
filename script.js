// ================================
// Portfolio JavaScript
// Kimberly S. Narval
// ================================

// ------------------------------
// Typing Animation
// ------------------------------

const text = [
    "Computer Science Student",
    "Aspiring Software Developer",
    "AI Enthusiast",
    "Future Full-Stack Developer"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.querySelector(".hero-content h3");

function typeEffect() {

    if (!typingElement) return;

    const current = text[textIndex];

    if (isDeleting) {
        typingElement.textContent = current.substring(0, charIndex--);
    } else {
        typingElement.textContent = current.substring(0, charIndex++);
    }

    let speed = isDeleting ? 50 : 120;

    if (!isDeleting && charIndex === current.length + 1) {
        speed = 1500;
        isDeleting = true;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex++;

        if (textIndex >= text.length) {
            textIndex = 0;
        }
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// ------------------------------
// Smooth Scrolling
// ------------------------------

document.querySelectorAll('nav a').forEach(anchor => {

    anchor.addEventListener('click', function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        window.scrollTo({
            top: target.offsetTop - 60,
            behavior: "smooth"
        });

    });

});


// ------------------------------
// Active Navigation
// ------------------------------

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if(pageYOffset >= sectionTop){
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }

    });

});


// ------------------------------
// Scroll Reveal Animation
// ------------------------------

const revealElements = document.querySelectorAll("section, .card, .skill");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

revealElements.forEach(item=>{
    observer.observe(item);
});


// ------------------------------
// Scroll To Top Button
// ------------------------------

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

    if(window.scrollY > 300){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};


// ------------------------------
// Footer Year
// ------------------------------

const footer = document.querySelector("footer p");

if(footer){

    footer.innerHTML =
    `© ${new Date().getFullYear()} Kimberly S. Narval | Portfolio Website`;

}


// ------------------------------
// Contact Form Validation
// ------------------------------

const form = document.querySelector("form");

if(form){

form.addEventListener("submit",function(e){

    const inputs = form.querySelectorAll("input, textarea");

    let valid = true;

    inputs.forEach(input=>{

        if(input.value.trim()===""){

            valid=false;

            input.style.border="2px solid red";

        }else{

            input.style.border="2px solid #00e5ff";

        }

    });

    if(!valid){

        e.preventDefault();

        alert("Please complete all required fields.");

    }

});

}


// ------------------------------
// Skill Hover Effect
// ------------------------------

document.querySelectorAll(".skill").forEach(skill=>{

    skill.addEventListener("mouseenter",()=>{

        skill.style.transform="translateY(-8px) scale(1.05)";

    });

    skill.addEventListener("mouseleave",()=>{

        skill.style.transform="translateY(0) scale(1)";

    });

});


// ------------------------------
// Loading Animation
// ------------------------------

window.addEventListener("load",()=>{

    document.body.style.opacity="1";

});


// ------------------------------
// Console Message
// ------------------------------

console.log("Portfolio Loaded Successfully!");

