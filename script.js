document.addEventListener("DOMContentLoaded", function () {

    const sections = document.querySelectorAll(".portfolio-section");
    const navLinks = document.querySelectorAll(".nav-link");

    window.showSection = function (sectionId) {

        sections.forEach(function (section) {
            section.classList.remove("active-section");
        });

        const selectedSection = document.getElementById(sectionId);

        if (selectedSection) {
            selectedSection.classList.add("active-section");
        }

        navLinks.forEach(function (link) {
            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + sectionId) {
                link.classList.add("active");
            }
        });

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        const navbar = document.getElementById("navbarNav");

        if (navbar.classList.contains("show")) {
            const collapseButton = document.querySelector(".navbar-toggler");

            if (collapseButton) {
                collapseButton.click();
            }
        }
    };


    /* PROJECT FILTER */

    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectItems = document.querySelectorAll(".project-item");

    filterButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const filter = button.getAttribute("data-filter");

            filterButtons.forEach(function (btn) {
                btn.classList.remove("btn-primary");
                btn.classList.add("btn-outline-primary");
            });

            button.classList.remove("btn-outline-primary");
            button.classList.add("btn-primary");

            projectItems.forEach(function (project) {

                const category = project.getAttribute("data-category");

                if (filter === "all" || category === filter) {
                    project.style.display = "";
                } else {
                    project.style.display = "none";
                }

            });

        });

    });


    /* CONTACT FORM VALIDATION */

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            const nameError = document.getElementById("nameError");
            const emailError = document.getElementById("emailError");
            const messageError = document.getElementById("messageError");
            const formSuccess = document.getElementById("formSuccess");

            nameError.textContent = "";
            emailError.textContent = "";
            messageError.textContent = "";
            formSuccess.textContent = "";

            let isValid = true;

            if (name === "") {
                nameError.textContent = "Please enter your name.";
                isValid = false;
            }

            if (email === "") {
                emailError.textContent = "Please enter your email.";
                isValid = false;
            } else if (!email.includes("@") || !email.includes(".")) {
                emailError.textContent = "Please enter a valid email address.";
                isValid = false;
            }

            if (message === "") {
                messageError.textContent = "Please enter your message.";
                isValid = false;
            }

            if (isValid) {

                formSuccess.textContent =
                    "Thank you! Your message has been submitted successfully.";

                contactForm.reset();
            }

        });

    }

});