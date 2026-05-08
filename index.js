//* About section
var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");

function openTab(tabname) {
  //* argument should be any name
  for (tabLink of tabLinks) {
    tabLink.classList.remove("active-link");
  }
  for (tabContent of tabContents) {
    tabContent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link"); //* current item being clicked on
  document.getElementById(tabname).classList.add("active-tab");
}

//* open and close menu function
var sideMenu = document.getElementById("side-menu");

function openMenu() {
  sideMenu.style.right = "0";
}
function closeMenu() {
  sideMenu.style.right = "-200px";
}

//* automatically close the menu when target item is clicked
document.querySelectorAll("#side-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    setTimeout(closeMenu, 1000);
  });
});

//* form connection
const scriptURL =
  "https://script.google.com/macros/s/AKfycbzlIo3uTVedzvIX0hb8Sk02IJZbbT_Xz3XRbfjsmcslwb-tRpo8hgZDmYAW73x92GmK/exec";
const form = document.forms["submit-to-google-sheet"];

//* form submission confirm
const formSubmission = document.getElementById("message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      formSubmission.innerHTML = "Message sent successfully";
      setTimeout(function () {
        formSubmission.innerHTML = "";
      }, 1000);
      form.reset(); //* clear the input fields
    })
    .catch((error) => console.error("Error!", error.message));
});

//* PROJECTS DATA
const projects = [
  {
    img: "media/atpu.png",

    title: "Exhibit Management System",

    subtitle: "Anti-Terrorism Police Unit Project",

    technologies:
      "Python | Django REST APIs | JavaScript | React | Bootstrap | MySQL",

    description:
      "Developed a full-stack web application to digitize and manage forensic exhibit records within the ATPU ICT department.",

    github: "https://github.com/kukuabassanimeri",
  },

  {
    img: "media/chatisha_kca.png",

    title: "Chatisha KCA",

    subtitle: "KCA University Final Year Project",

    technologies: "Python | Django | JavaScript | HTML5 | Bootstrap | MySQL",

    description:
      "Designed and developed a complaint management system for KCA University to streamline communication between administration and students.",

    github: "https://github.com/kukuabassanimeri",
  },

  {
    img: "media/doctor.png",

    title: "MedEase",

    subtitle: "Healthcare Queue Reservation System",

    technologies: "Python | Django | JavaScript | Bootstrap | SQLite",

    description:
      "Developed a web-based healthcare queue reservation platform for Kakuma residents.",

    github: "https://github.com/kukuabassanimeri/MedEase.git",
  },
];

//* RENDER PROJECTS
function renderProjects() {
  const projectsContainer = document.getElementById("projects-container");

  const projectItems = projects
    .map(
      (project, index) => `

      <div class="carousel-item ${index === 0 ? "active" : ""}">

        <div class="project-card">

          <!-- IMAGE -->
          <div class="project-image">

            <img src="${project.img}" alt="${project.title}">

          </div>

          <!-- CONTENT -->
          <div class="project-content">

            <h3>${project.title}</h3>

            <h5>${project.subtitle}</h5>

            <div class="project-tech">

              ${project.technologies}

            </div>

            <p>
              ${project.description}
            </p>

            <a href="${project.github}" target="_blank"
              class="project-btn">

              <i class="fa-solid fa-square-arrow-up-right"></i>

              View Project

            </a>

          </div>

        </div>

      </div>

    `,
    )
    .join("");

  projectsContainer.innerHTML = projectItems;
}

//* CALL FUNCTION
renderProjects();

//* social links
const socialIcon = [
  {
    link: "https://www.linkedin.com/in/kuku-abass",
    icon: "fa-brands fa-linkedin",
  },

  {
    link: "https://github.com/kukuabassanimeri",
    icon: "fa-brands fa-github",
  },
];

//* function to load social icons
const socialLinks = document.querySelector(".social-icons");
socialIcon.forEach((social) => {
  const socialLink = document.createElement("a");
  socialLink.classList.add("fa-brands");
  socialLink.href = social.link;
  socialLink.target = "_blank";
  socialLink.innerHTML = `<i class="${social.icon}"></i>`;
  socialLinks.appendChild(socialLink);
});

//* ABOUT SECTION DATA
const aboutCards = [
  {
    icon: "fa-solid fa-user",
    title: "Who I'm",
    description:
      "I am a passionate Software Developer and Researcher focused on building impactful digital solutions that solve real-world challenges in education, technology, and community empowerment.",
  },

  {
    icon: "fa-solid fa-graduation-cap",
    title: "Education",
    description:
      "Software Development student at KCA University and Entrepreneurial Leadership student at African Leadership University with strong interest in innovation and leadership.",
  },

  {
    icon: "fa-solid fa-lightbulb",
    title: "Skills",
    description:
      "Frontend Development, Backend Development, REST APIs, Database Design, Research, Problem Solving, Leadership, and Technical Documentation.",
  },

  {
    icon: "fa-solid fa-code",
    title: "Technologies",
    description:
      "Python, Django, JavaScript, React, Bootstrap, HTML5, CSS3, PostgreSQL, MySQL, SQLite, Git, and GitHub.",
  },
];

//* EXPERIENCE DATA
const experiences = [
  {
    role: "Mobile Forensic Analyst Intern",
    company: "DCI - ATPU",
    duration: "January 2026 - April 2026",

    responsibilities: [
      "Documented 50+ exhibit cases, ensuring 90% accuracy in exhibit memo forms and maintaining proper chain of custody.",

      "Designed and developed an Exhibit Management System that reduced manual record-keeping by 40%.",

      "Performed mobile forensic data extraction and analysis on multiple device types, supporting investigative operations.",
    ],
  },

  {
    role: "IT Assistant Intern",
    company: "Kadar Initiative for Community Empowerment",
    duration: "September 2023 - December 2023",

    responsibilities: [
      "Updated and maintained the organization’s website content, improving the accuracy and timeliness of information.",

      "Designed digital flyers for community programs, contributing to increased event awareness and participation.",
    ],
  },
];

//* RENDER ABOUT SECTION
function renderAboutSection() {
  const main = document.getElementById("main");

  const cards = aboutCards
    .map(
      (card) => `
  
    <div class="col-lg-3 col-md-6 mb-4">

      <div class="about-card">

        <div class="about-icon">
          <i class="${card.icon}"></i>
        </div>

        <h4>${card.title}</h4>

        <p>${card.description}</p>

      </div>

    </div>
  
  `,
    )
    .join("");

  //* EXPERIENCE HTML
  const experienceHtml = experiences
    .map(
      (experience) => `

    <div class="experience-item">

      <div class="experience-dot"></div>

      <div class="experience-content">

        <div class="experience-header">

          <h4>${experience.role}</h4>

          <span>${experience.duration}</span>

        </div>

        <h5>${experience.company}</h5>

        <ul>

          ${experience.responsibilities
            .map((item) => `<li>${item}</li>`)
            .join("")}

        </ul>

      </div>

    </div>

  `,
    )
    .join("");

  main.innerHTML = `
  
<section id="about">

  <div class="container">

    <!-- ABOUT TITLE -->
    <div class="text-center mb-5">

      <h2 class="about-title">
        About Me
      </h2>

      <p class="about-subtitle">
        Learn more about my background, education, skills, and technologies.
      </p>

    </div>

    <!-- ABOUT CARDS -->
    <div class="row">

      ${cards}

    </div>

  </div>

</section>

<!-- EXPERIENCE SECTION -->
<section id="experience">

  <div class="container">

    <!-- SECTION TITLE -->
    <div class="text-center mb-5">

      <h2 class="experience-title">
        Experience
      </h2>

      <p class="experience-subtitle">
        My professional journey and practical experiences in technology and digital innovation.
      </p>

    </div>

    <!-- EXPERIENCE CARD -->
    <div class="experience-card">

      ${experienceHtml}

    </div>

  </div>

</section>
  
`;
}

renderAboutSection();

//* Prevent copy, cut and paste
["copy", "paste", "cut"].forEach((event) => {
  document.addEventListener(event, (e) => {
    e.preventDefault();
    alert(`The "${event}" action is disabled on this page.`);
  });
});
