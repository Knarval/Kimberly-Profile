// ======================================
// Kimberly Portfolio JavaScript
// ======================================

// Show page after loading
window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

// ======================================
// Typing Animation
// ======================================

const words = [
    "Computer Science Student",
    "Aspiring Software Developer",
    "AI Enthusiast",
    "Future Full-Stack Developer"
];

const typing = document.querySelector(".hero-content h3");

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeWriter(){

    if(!typing) return;

    const currentWord = words[wordIndex];

    if(!deleting){

        typing.textContent =
        currentWord.substring(0,charIndex);

        charIndex++;

        if(charIndex > currentWord.length){

            deleting = true;

            setTimeout(typeWriter,1500);

            return;

        }

    }else{

        typing.textContent =
        currentWord.substring(0,charIndex);

        charIndex--;

        if(charIndex < 0){

            deleting = false;

            wordIndex++;

            if(wordIndex >= words.length){

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeWriter,deleting ? 50 : 100);

}

typeWriter();


// ======================================
// Smooth Scrolling
// ======================================

document.querySelectorAll("nav a").forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target =
        document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


// ======================================
// Active Navigation
// ======================================

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top =
        section.offsetTop-150;

        if(window.scrollY>=top){

            current=section.id;

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")=="#"+current){

            link.classList.add("active");

        }

    });

});


// ======================================
// Reveal Animation
// ======================================

const revealElements =
document.querySelectorAll("section,.card,.skill");

const observer =
new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.2
});

revealElements.forEach(el=>{

observer.observe(el);

});


// ======================================
// Scroll To Top Button
// ======================================

const topButton =
document.createElement("button");

topButton.innerHTML="↑";

topButton.id="topBtn";

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topButton.style.display="block";

}else{

topButton.style.display="none";

}

});

topButton.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};


// ======================================
// Footer Year
// ======================================

const footer =
document.querySelector("footer p");

if(footer){

footer.innerHTML=
`© ${new Date().getFullYear()} Kimberly S. Narval | Technology Portfolio`;

}


// ======================================
// Contact Form Validation
// ======================================

const form =
document.querySelector("form");

if(form){

form.addEventListener("submit",function(e){

const name=
form.querySelector("input[name='Name']");

const email=
form.querySelector("input[name='Email']");

const message=
form.querySelector("textarea");

if(

name.value.trim()=="" ||

email.value.trim()=="" ||

message.value.trim()==""

){

e.preventDefault();

alert("Please complete all fields.");

return;

}

alert("Your message has been sent successfully!");

});

}


// ======================================
// Card Hover Effect
// ======================================

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});


// ======================================
// Skill Animation
// ======================================

document.querySelectorAll(".skill").forEach(skill=>{

skill.addEventListener("mouseenter",()=>{

skill.style.transform="scale(1.05)";

});

skill.addEventListener("mouseleave",()=>{

skill.style.transform="scale(1)";

});

});


// ======================================
// Console Message
// ======================================

console.log("Technology Portfolio Loaded Successfully!");
