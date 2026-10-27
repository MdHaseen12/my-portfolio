// =========================
// TYPING EFFECT
// =========================

const roles = [
    "Computer Science Graduate",
    "Python Developer",
    "Data Enthusiast",
    "AI Explorer"
];

const typingText = document.querySelector(".hero h2");

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingText.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingText.textContent =
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

    setTimeout(typeEffect, deleting ? 60 : 100);
}


// Start typing effect
typeEffect();


// =========================
// SCROLL REVEAL
// =========================

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);

sections.forEach((section) => {
    observer.observe(section);
});
// =========================
// MOBILE MENU
// =========================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});
// =========================
// BACK TO TOP
// =========================

const backToTop = document.getElementById("backToTop");

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
// =========================
// ACTIVE NAVIGATION
// =========================

const navLinks = document.querySelectorAll("#navMenu a");
const pageSections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

    let currentSection = "";

    pageSections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }

    });

}); 
// =========================
// PROJECT MODAL
// =========================

const projectModal = document.getElementById("projectModal");
const closeModal = document.getElementById("closeModal");

const projectCards = document.querySelectorAll(".project-card");

const projectData = [
    {
        title: "Deepfake Detection",
        description:
            "A machine learning project focused on identifying manipulated and deepfake media using AI-based techniques.",
        technologies: [
            "Python",
            "Machine Learning",
            "AI"
        ]
    },
    {
        title: "Academic Result Management System",
        description:
            "An academic project designed to organize student information and manage academic results in a structured way.",
        technologies: [
            "Python",
            "Django",
            "SQL"
        ]
    },
    {
        title: "Lung Cancer Classification",
        description:
            "A machine learning project focused on classifying lung cancer data and exploring data-driven classification techniques.",
        technologies: [
            "Python",
            "Machine Learning",
            "Data Analysis"
        ]
    }
];

projectCards.forEach((card, index) => {

    card.addEventListener("click", () => {
        console.log("Project card clicked!");

        const project = projectData[index];

        document.getElementById("modalTitle").textContent =
            project.title;

        document.getElementById("modalDescription").textContent =
            project.description;

        const modalTech =
            document.getElementById("modalTech");

        modalTech.innerHTML = "";

        project.technologies.forEach((technology) => {

            const span = document.createElement("span");

            span.textContent = technology;

            modalTech.appendChild(span);

        });
            card.addEventListener("keydown", (event) => {

        if (event.key === "Enter") {
            card.click();
        }

    });

        projectModal.classList.add("show");
        console.log("Modal classes:", projectModal.className);

    });

});

closeModal.addEventListener("click", () => {

    projectModal.classList.add("closing");

    setTimeout(() => {

        projectModal.classList.remove("show");
        projectModal.classList.remove("closing");

    }, 250);

});

projectModal.addEventListener("click", (event) => {

  if (event.target === projectModal) {

    projectModal.classList.add("closing");

    setTimeout(() => {

        projectModal.classList.remove("show");
        projectModal.classList.remove("closing");

    }, 250);

}

});
document.addEventListener("keydown", (event) => {

    if (event.key === "Escape" && projectModal.classList.contains("show")) {

        projectModal.classList.add("closing");

        setTimeout(() => {

            projectModal.classList.remove("show");
            projectModal.classList.remove("closing");

        }, 250);

    }

});