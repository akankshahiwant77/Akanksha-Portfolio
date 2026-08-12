
// =====================================================
// THEME TOGGLE
// =====================================================

const themeBtn = document.getElementById("theme-btn");

let lightMode = false;


themeBtn.addEventListener("click", function () {

    lightMode = !lightMode;


    if (lightMode) {

        document.documentElement.style.setProperty(
            "--bg",
            "#f7f7fb"
        );

        document.documentElement.style.setProperty(
            "--card",
            "#ffffff"
        );

        document.documentElement.style.setProperty(
            "--card-hover",
            "#f1f1f7"
        );

        document.documentElement.style.setProperty(
            "--text",
            "#18181b"
        );

        document.documentElement.style.setProperty(
            "--muted",
            "#55555f"
        );

        document.documentElement.style.setProperty(
            "--border",
            "#dddde5"
        );

        themeBtn.textContent = "☀️";

    } else {

        document.documentElement.style.setProperty(
            "--bg",
            "#0a0a0f"
        );

        document.documentElement.style.setProperty(
            "--card",
            "#11111a"
        );

        document.documentElement.style.setProperty(
            "--card-hover",
            "#181824"
        );

        document.documentElement.style.setProperty(
            "--text",
            "#f5f5f7"
        );

        document.documentElement.style.setProperty(
            "--muted",
            "#a1a1aa"
        );

        document.documentElement.style.setProperty(
            "--border",
            "#252533"
        );

        themeBtn.textContent = "🌙";

    }

});



// =====================================================
// TYPING EFFECT
// =====================================================

const roles = [

    "AI & Python Developer",

    "Data Analytics Enthusiast",

    "Machine Learning Developer",

    "Agentic AI Builder"

];


let roleIndex = 0;

let charIndex = 0;

let deleting = false;


const roleElement = document.querySelector(".hero h2");


function typeEffect() {

    const currentRole = roles[roleIndex];


    // -----------------------------
    // TYPING
    // -----------------------------

    if (!deleting) {

        roleElement.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;


        if (charIndex === currentRole.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }

    }


    // -----------------------------
    // DELETING
    // -----------------------------

    else {

        roleElement.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;


        if (charIndex === 0) {

            deleting = false;

            roleIndex++;


            if (roleIndex === roles.length) {

                roleIndex = 0;

            }

        }

    }


    setTimeout(

        typeEffect,

        deleting ? 50 : 100

    );

}


typeEffect();



// =====================================================
// SCROLL REVEAL
// =====================================================

const sections =
    document.querySelectorAll(".section");


const observer =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {
            threshold: 0.15
        }

    );


sections.forEach(function (section) {

    section.classList.add("hidden");

    observer.observe(section);

});



// =====================================================
// ACTIVE NAVIGATION
// =====================================================

const navLinks =
    document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", function () {

    let currentSection = "";


    document
        .querySelectorAll("section[id]")
        .forEach(function (section) {

            const sectionTop =
                section.offsetTop - 150;

            const sectionHeight =
                section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });


    navLinks.forEach(function (link) {

        link.classList.remove("active");


        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});



// =====================================================
// SMOOTH NAVIGATION
// =====================================================

navLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId =
            link.getAttribute("href");


        if (
            targetId &&
            targetId.startsWith("#")
        ) {

            const target =
                document.querySelector(targetId);


            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }

    });

});



// =====================================================
// CURRENT YEAR
// =====================================================

const footerText =
    document.querySelector("footer p");


if (footerText) {

    const currentYear =
        new Date().getFullYear();

    footerText.innerHTML =
        `© ${currentYear} Akanksha Hivant.
        Built with HTML, CSS & JavaScript.`;

}

