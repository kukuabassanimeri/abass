//* CONTACT FORM → GOOGLE SHEET
const scriptURL =
  "https://script.google.com/macros/s/AKfycbzlIo3uTVedzvIX0hb8Sk02IJZbbT_Xz3XRbfjsmcslwb-tRpo8hgZDmYAW73x92GmK/exec";

const form = document.forms["submit-to-google-sheet"];
const formMessage = document.getElementById("message");
const submitBtn = form.querySelector("button[type='submit']");
const submitLabel = submitBtn.textContent.trim();
let messageTimer;

function showFormMessage(text, isError = false) {
  clearTimeout(messageTimer);
  formMessage.textContent = text;
  formMessage.classList.toggle("error", isError);
  messageTimer = setTimeout(() => (formMessage.textContent = ""), 5000);
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  submitBtn.disabled = true;
  submitBtn.textContent = "Sending...";

  try {
    const response = await fetch(scriptURL, {
      method: "POST",
      body: new FormData(form),
    });
    if (!response.ok) throw new Error(response.statusText);

    showFormMessage("Message sent successfully. Thank you!");
    form.reset();
  } catch (error) {
    console.error("Form submission error:", error);
    showFormMessage(
      "Something went wrong. Please try again or email me directly.",
      true,
    );
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = submitLabel;
  }
});

//* ACTIVE SIDEBAR LINK ON SCROLL
const navLinks = document.querySelectorAll(".aka-nav-link");
const sections = [...navLinks]
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) =>
        link.classList.toggle(
          "active",
          link.getAttribute("href") === `#${entry.target.id}`,
        ),
      );
    });
  },
  { rootMargin: "-45% 0px -50% 0px" },
);

sections.forEach((section) => navObserver.observe(section));

//* SCROLL PROGRESS BAR
const progressBar = document.querySelector(".aka-progress");

function updateProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
  progressBar.style.transform = `scaleX(${progress})`;
}

window.addEventListener("scroll", updateProgress, { passive: true });
updateProgress();

//* REVEAL ON SCROLL
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!reduceMotion) {
  const revealItems = document.querySelectorAll(`
    .aka-education-intro, .aka-education-card,
    .aka-skills-intro, .aka-tech-item, .aka-code-card,
    .aka-projects-intro, .aka-project-card, .aka-projects-bottom,
    .aka-experience-intro, .aka-experience-item,
    .aka-contact-intro, .aka-contact-card
  `);

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12 },
  );

  revealItems.forEach((item) => {
    // Stagger items that sit side by side in the same container
    const siblings = [...item.parentElement.children];
    const index = siblings.indexOf(item) % 6;
    item.style.setProperty("--aka-delay", `${index * 0.06}s`);

    item.classList.add("aka-reveal");
    revealObserver.observe(item);
  });
}

//* FOOTER YEAR
document.getElementById("year").textContent = new Date().getFullYear();