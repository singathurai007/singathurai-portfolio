/* =====================================================
   SINGATHURAI PORTFOLIO
   JavaScript
   ===================================================== */


/* =====================
   MOBILE MENU
   ===================== */

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");


// Open / Close mobile menu
menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("open");

    const icon = menuToggle.querySelector("i");

    if (navMenu.classList.contains("open")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});



/* =====================
   CLOSE MOBILE MENU
   ===================== */

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("open");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});



/* =====================
   ACTIVE NAVIGATION
   ===================== */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            currentSection = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});



/* =====================
   BACK TO TOP
   ===================== */

const backToTop = document.getElementById("back-to-top");


window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});



/* =====================
   CURRENT YEAR
   ===================== */

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();



/* =====================
   SIMPLE SCROLL ANIMATION
   ===================== */

const animatedElements = document.querySelectorAll(
    ".skill-card, .project-card, .about-card, .contact-card"
);


const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.1
    }
);


animatedElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(element);

});

/* =====================================================
   CERTIFICATE GALLERY
   ===================================================== */

const certificateThumbs =
    document.querySelectorAll(".certificate-thumb");

const mainCertificate =
    document.getElementById("mainCertificate");

const mainTitle =
    document.getElementById("mainTitle");

const mainProvider =
    document.getElementById("mainProvider");

const mainLink =
    document.getElementById("mainLink");

const detailTitle =
    document.getElementById("detailTitle");

const detailDescription =
    document.getElementById("detailDescription");

const detailDate =
    document.getElementById("detailDate");

const detailProvider =
    document.getElementById("detailProvider");

const detailLink =
    document.getElementById("detailLink");

const certNumber =
    document.getElementById("certNumber");


certificateThumbs.forEach((thumb, index) => {

    thumb.addEventListener("click", () => {

        /* Remove active */
        certificateThumbs.forEach(item => {
            item.classList.remove("active");
        });

        /* Add active */
        thumb.classList.add("active");


        /* Get data */
        const image =
            thumb.dataset.image;

        const title =
            thumb.dataset.title;

        const provider =
            thumb.dataset.provider;

        const date =
            thumb.dataset.date;

        const label =
            thumb.dataset.label;

        const description =
            thumb.dataset.description;

        const link =
            thumb.dataset.link;


        /* Small fade animation */

        mainCertificate.style.opacity = "0";


        setTimeout(() => {

            mainCertificate.src = image;

            mainCertificate.style.opacity = "1";

        }, 180);


        /* Main information */

        mainTitle.textContent = title;

        mainProvider.textContent = provider;

        mainLink.href = link;


        /* Right information */

        detailTitle.textContent = title;

        detailDescription.textContent =
            description;

        detailDate.textContent =
            date;

        detailProvider.textContent =
            provider;

        detailLink.href = link;


        /* Provider label */

        const detailsLabel =
            document.querySelector(".details-label");

        if (detailsLabel) {
            detailsLabel.textContent = label;
        }


        /* Number */

        const number =
            String(index + 1).padStart(2, "0");

        certNumber.textContent =
            `${number} / 05`;

    });

});