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

//* see more portfolio button
let currenVisible = 3;
let isExpanded = false;

function togglePortfolio() {
  const works = document.querySelectorAll(".work-item");
  const btn = document.getElementById("see-more-btn");

  if (!isExpanded) {
    for (let i = currenVisible; i < works.length; i++) {
      works[i].style.display = "block";
    }
    btn.textContent = "Show Less";
    isExpanded = true;
  } else {
    works.forEach((item, index) => {
      item.style.display = index < 3 ? "block" : "none";
    });
    btn.textContent = "Show More";
    isExpanded = false;
  }
}

//* Always show only first 3 items on load, regardless of screen size
function initPortfolioDisplay() {
  const works = document.querySelectorAll(".work-item");
  const btn = document.getElementById("see-more-btn");

  works.forEach((item, index) => {
    item.style.display = index < 3 ? "block" : "none";
  });

  //* Show the button only if there are more than 3 items
  if (works.length > 3) {
    btn.style.display = "inline-block";
    btn.textContent = "Show More";
    currenVisible = 3;
    isExpanded = false;
  } else {
    btn.style.display = "none";
  }
}

//* Call the function
window.addEventListener("load", initPortfolioDisplay);

//* Portfolio work
const workServices = [
  {
    img: "media/logo.jpg",
    title: "The Nubian Queens Initiative Limited",
    description:
      "The Nubian Queens Empowerment Initiative Limited is Not-for-profit organization dedicated to uplift Nubian women and girls from war endurances.",
    link: "https://github.com/kukuabassanimeri/The_Nubian_Queens_Empowerment_Initiative_limited",
  },

  {
    img: "media/doctor.png",
    title: "MedEase",
    description:
      "A Web based application that allow Kakuma residents to book medication queue online",
    link: "https://github.com/kukuabassanimeri/MedEase.git",
  },

  {
    img: "media/juice.jpg",
    title: "Denval Juice",
    description:
      "Django app allowing KCAU students to suggest their own juice brand",
    link: "https://github.com/kukuabassanimeri/denvaljuice.git",
  },

  {
    img: "media/educate.jpg",
    title: "Camp 2 Campus",
    description:
      "Django app that allow Kakuma refugee residents to access scholarship opportunities and application guidelines",
    link: "https://github.com/kukuabassanimeri/lets-educate-kakuma.git",
  },

  {
    img: "media/blazer2.jpg",
    title: "Nike Shoe Ecommerce",
    desc: "JavaScript Nike shoe Ecommerce application",
    link: "https://github.com/kukuabassanimeri/JavaScripts.git",
  },

  {
    img: "media/docs.jpg",
    title: "Track MyDocs",
    desc: "Django app to help Kakuma residents apply for ID documents",
    link: "https://github.com/kukuabassanimeri/track_my_docs.git",
  },
];

//* function to load the work service
const workList = document.querySelector(".work-list");

workServices.forEach((work) => {
  const workItem = document.createElement("div");
  workItem.classList.add("work-item", "work");

  workItem.innerHTML = `
      <img src="${work.img}" alt="${work.title}">
      <div class="layer">
        <h5>${work.title}</h5>
        <p>${work.description || work.desc}</p>
        <a href="${work.link}" target="_blank">
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
      </div>
    `;

  workList.appendChild(workItem);
});

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

      "Supported the organization’s online presence by improving layout and content consistency.",
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
