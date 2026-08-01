/* ======================================================
   DEVENDRA PORTFOLIO
   SCRIPT.JS
====================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ===========================
       LOADER
    =========================== */

    const loader = document.getElementById("loader");

    window.addEventListener("load", function () {

        if(loader){

            setTimeout(function(){

                loader.classList.add("loader-hide");

            },1500);

        }

    });


    /* ===========================
       STICKY NAVBAR
    =========================== */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function(){

        if(window.scrollY > 50){

            navbar.classList.add("scrolled");

        }else{

            navbar.classList.remove("scrolled");

        }

    });


    /* ===========================
       SCROLL ANIMATION
    =========================== */

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{
        threshold:.15
    });

    document.querySelectorAll(

        ".fade-up,.fade-left,.fade-right,.zoom,.hidden,.timeline-item"

    ).forEach(el=>observer.observe(el));



    /* ===========================
       ACTIVE MENU
    =========================== */

    const sections = document.querySelectorAll("section");

    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll",()=>{

        let current="";

        sections.forEach(section=>{

            const top=section.offsetTop-120;

            const height=section.clientHeight;

            if(pageYOffset>=top){

                current=section.getAttribute("id");

            }

        });

        navLinks.forEach(link=>{

            link.classList.remove("active");

            if(link.getAttribute("href")==="#"+current){

                link.classList.add("active");

            }

        });

    });



    /* ===========================
       COUNTER
    =========================== */

    const counters=document.querySelectorAll(".stat-card h2");

    counters.forEach(counter=>{

        const text=counter.innerText;

        const number=parseInt(text);

        if(isNaN(number)) return;

        let start=0;

        const speed=25;

        const timer=setInterval(()=>{

            start++;

            counter.innerText=start+"+";

            if(start>=number){

                clearInterval(timer);

                counter.innerText=text;

            }

        },speed);

    });



    /* ===========================
       SMOOTH LINKS
    =========================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

        anchor.addEventListener("click",function(e){

            e.preventDefault();

            const target=document.querySelector(this.getAttribute("href"));

            if(target){

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });



    /* ===========================
       SCROLL TO TOP BUTTON
    =========================== */

    const topBtn=document.createElement("button");

    topBtn.innerHTML="↑";

    topBtn.id="topBtn";

    document.body.appendChild(topBtn);

    window.addEventListener("scroll",()=>{

        if(window.scrollY>500){

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



    /* ===========================
       IMAGE LIGHTBOX
    =========================== */

    const gallery=document.querySelectorAll(".gallery-card img");

    gallery.forEach(img=>{

        img.style.cursor="pointer";

        img.onclick=function(){

            const overlay=document.createElement("div");

            overlay.style.position="fixed";

            overlay.style.top=0;

            overlay.style.left=0;

            overlay.style.width="100%";

            overlay.style.height="100%";

            overlay.style.background="rgba(0,0,0,.9)";

            overlay.style.display="flex";

            overlay.style.alignItems="center";

            overlay.style.justifyContent="center";

            overlay.style.zIndex="999999";

            const image=document.createElement("img");

            image.src=this.src;

            image.style.maxWidth="90%";

            image.style.maxHeight="90%";

            image.style.borderRadius="20px";

            overlay.appendChild(image);

            document.body.appendChild(overlay);

            overlay.onclick=function(){

                overlay.remove();

            };

        };

    });



    /* ===========================
       TYPING EFFECT
    =========================== */

    const typing=document.querySelector(".typing");

    if(typing){

        const words=[

            "Software Developer",

            "PHP Developer",

            "Python Developer",

            "Java Programmer",

            "Full Stack Learner"

        ];

        let wordIndex=0;

        let charIndex=0;

        let deleting=false;

        function type(){

            const current=words[wordIndex];

            if(!deleting){

                typing.textContent=current.substring(0,charIndex++);

                if(charIndex>current.length){

                    deleting=true;

                    setTimeout(type,1200);

                    return;

                }

            }else{

                typing.textContent=current.substring(0,charIndex--);

                if(charIndex<0){

                    deleting=false;

                    wordIndex=(wordIndex+1)%words.length;

                }

            }

            setTimeout(type,deleting?60:120);

        }

        type();

    }



    /* ===========================
       PARALLAX HERO
    =========================== */

    window.addEventListener("scroll",()=>{

        const hero=document.querySelector(".hero-image img");

        if(hero){

            hero.style.transform=

            "translateY("+(window.scrollY*0.15)+"px)";

        }

    });



    /* ===========================
       RIPPLE BUTTON EFFECT
    =========================== */

    document.querySelectorAll(".btn").forEach(button=>{

        button.addEventListener("click",function(e){

            const ripple=document.createElement("span");

            ripple.className="ripple";

            ripple.style.left=e.offsetX+"px";

            ripple.style.top=e.offsetY+"px";

            this.appendChild(ripple);

            setTimeout(()=>{

                ripple.remove();

            },600);

        });

    });



    /* ===========================
       CONSOLE MESSAGE
    =========================== */

    console.log(

`%cWelcome Recruiter 👋

Portfolio developed by Devendra Singh

Technology Stack:
✔ HTML5
✔ CSS3
✔ JavaScript
✔ Bootstrap
✔ PHP
✔ MySQL
✔ Python

GitHub:
https://github.com/devendrasingh135789

Thank you for visiting!`,

"color:#38bdf8;font-size:14px"

);

});
/* ===========================
   EMAILJS CONTACT FORM
=========================== */

/* ===========================
   EMAILJS CONTACT FORM
=========================== */

emailjs.init({
    publicKey: "7U_y4QuAV2jrTExxF"
});

const contactForm = document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const sendBtn = document.getElementById("sendBtn");

        sendBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        sendBtn.disabled = true;

        emailjs.send("devendra989799", "template_5hlquos", {

            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            subject: document.getElementById("subject").value,
            message: document.getElementById("message").value

        })

        .then(function () {

            alert("✅ Thank you! Your message has been sent successfully.");

            contactForm.reset();

            sendBtn.innerHTML = "Send Message";
            sendBtn.disabled = false;

        })

        .catch(function (error) {

            console.error(error);

            alert("❌ Failed to send message. Please try again.");

            sendBtn.innerHTML = "Send Message";
            sendBtn.disabled = false;

        });

    });

}
if(contactForm){

contactForm.addEventListener("submit",function(e){

e.preventDefault();

const sendBtn=document.getElementById("sendBtn");

sendBtn.innerHTML="Sending...";

sendBtn.disabled=true;

emailjs.send("devendra989799","template_5hlquos",{

name:document.getElementById("name").value,

email:document.getElementById("email").value,

subject:document.getElementById("subject").value,

message:document.getElementById("message").value

})

.then(function(){

alert("✅ Message sent successfully!");

contactForm.reset();

sendBtn.innerHTML="Send Message";

sendBtn.disabled=false;

})

.catch(function(error){

alert("❌ Failed to send message.");

console.log(error);

sendBtn.innerHTML="Send Message";

sendBtn.disabled=false;

});

});

}