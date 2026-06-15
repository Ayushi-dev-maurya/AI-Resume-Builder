//  mobile menu
 const menuBtn = document.querySelector(".menu-btn");

      const navLinks = document.querySelector(".nav-links");

      menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
      });

  

      // FAQ Accordion

      const questions = document.querySelectorAll(".question");

      questions.forEach((q) => {
        q.addEventListener("click", () => {
          q.nextElementSibling.classList.toggle("show");
        });
      });

      // Counter

      let count = 0;

      const counter = document.getElementById("resumeCount");

      let interval = setInterval(() => {
        count += 25;

        counter.innerText = count + "+";

        if (count >= 5000) {
          clearInterval(interval);
        }
      }, 20);

      // Contact Form

      document.getElementById("contactForm").addEventListener("submit", (e) => {
        const email = document.getElementById("email").value;

        if (email === "") {
          e.preventDefault();

          alert("Please enter email");
        }
      });

      // Back To Top

      const topBtn = document.getElementById("topBtn");

      window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
          topBtn.style.display = "block";
        } else {
          topBtn.style.display = "none";
        }
      });

      topBtn.addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });