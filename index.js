//* About section
var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");

function openTab(tabname){ //* argument should be any name
    for(tabLink of tabLinks){
        tabLink.classList.remove("active-link");
    }
    for(tabContent of tabContents){
        tabContent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link"); //* current item being clicked on
    document.getElementById(tabname).classList.add("active-tab");
}

//* open and close menu function
var sideMenu = document.getElementById("side-menu");

function openMenu(){
    sideMenu.style.right = "0";
}
function closeMenu(){
    sideMenu.style.right = "-200px";
}

//* automatically close the menu when target item is clicked
document.querySelectorAll("#side-menu a").forEach(link => {
    link.addEventListener("click", () => {
        setTimeout(closeMenu, 1000);
    });
});

//* form connection
const scriptURL = 'https://script.google.com/macros/s/AKfycbzlIo3uTVedzvIX0hb8Sk02IJZbbT_Xz3XRbfjsmcslwb-tRpo8hgZDmYAW73x92GmK/exec';
const form = document.forms['submit-to-google-sheet']

//* form submission confirm
const formSubmission = document.getElementById("message");

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        formSubmission.innerHTML = "Message sent successfully";
        setTimeout(function(){
            formSubmission.innerHTML = "";
        }, 1000)
        form.reset() //* clear the input fields
    })
    .catch(error => console.error('Error!', error.message))
})

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
        description: "The Nubian Queens Empowerment Initiative Limited is Not-for-profit organization dedicated to uplift Nubian women and girls from war endurances.",
        link: "https://github.com/kukuabassanimeri/The_Nubian_Queens_Empowerment_Initiative_limited",
    },

    {
        img: "media/doctor.png",
        title: "MedEase",
        description: "A Web based application that allow Kakuma residents to book medication queue online",
        link: "https://github.com/kukuabassanimeri/MedEase.git",
    },

    {
        img: "media/abass.jpg",
        title: "Portfolio",
        description: "Abass' portfolio that showcases his work",
        link: "https://github.com/kukuabassanimeri/abass.git",
    },

    {
        img: "media/juice.jpg",
        title: "Denval Juice",
        description: "Django app allowing KCAU students to suggest their own juice brand",
        link: "https://github.com/kukuabassanimeri/denvaljuice.git",
    },

    {
        img: "media/educate.jpg",
        title: "Camp 2 Campus",
        description: "Django app that allow Kakuma refugee residents to access scholarship opportunities and application guidelines",
        link: "https://github.com/kukuabassanimeri/lets-educate-kakuma.git",
    },

    {
        img: "media/shop.jpg",
        title: "Shop Management",
        description: "Java shop Management application",
        link: "https://github.com/kukuabassanimeri/Shop-Management-System.git",
    },

    {
        img: "media/blazer2.jpg",
        title: "Nike Shoe Ecommerce",
        desc: "JavaScript Nike shoe Ecommerce application",
        link: "https://github.com/kukuabassanimeri/JavaScripts.git"
      },


      {
        img: "media/docs.jpg",
        title: "Track MyDocs",
        desc: "Django app to help Kakuma residents apply for ID documents",
        link: "https://github.com/kukuabassanimeri/track_my_docs.git"
      }
  ]

  //* function to load the work service
  const workList = document.querySelector(".work-list");

  workServices.forEach(work => {
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

  //* My services
  const myServices = [
    {   
        icon: "fa-solid fa-code",
        title: "Web Development",
        description: "I provide professional web development services, including custom websites, responsive design and porfolio. By ensuring your site not only looks great but also performs effectively across all devices.",
    },

    {
        icon: "fa-solid fa-crop-simple",
        title: "UI/UX Design",
        description: "I craft intuitive user experiences and visually appealing interfaces that enhance usability and engage your target audience. I focus on simplicity, consistency, and interaction flow.",
    },

    {
        icon: "fa-brands fa-app-store-ios",
        title: "App Design",
        description: "I design sleek, functional mobile app interfaces for both Android and iOS platforms. My approach ensures your app looks great and feels easy to use from the first tap.",
    },
  ]

  //* function to load my service
  const serviceList = document.querySelector(".services-list");
  myServices.forEach(service => {
    const serviceItem = document.createElement("div");
    serviceItem.classList.add("fa-solid");

    serviceItem.innerHTML = `
      <i class="${service.icon}"></i>
      <h5>${service.title}</h5>
      <p>${service.description || service.desc}</p>
    `;
    serviceList.appendChild(serviceItem);
  })

  //* social links
  const socialIcon = [
    {
        link: "https://www.facebook.com/profile.php?id=100085325694633",
        icon: "fa-brands fa-facebook",
    },

    {
        link: "https://twitter.com/kuku_abass",
        icon: "fa-brands fa-twitter",
    },

    {
        link: "https://www.linkedin.com/in/kuku-abass",
        icon: "fa-brands fa-linkedin",
    },

    {
        link: "https://github.com/kukuabassanimeri",
        icon: "fa-brands fa-github",
    },

    {
        link: "https://www.instagram.com/invites/contact/?i=1cku3tvd4fig7&utm_content=lvbtzvo",
        icon: "fa-brands fa-instagram",
    }
        
];

//* function to load social icons
const socialLinks = document.querySelector(".social-icons");
socialIcon.forEach(social => {
    const socialLink = document.createElement("a");
    socialLink.classList.add("fa-brands");
    socialLink.href = social.link;
    socialLink.target = "_blank";
    socialLink.innerHTML = `<i class="${social.icon}"></i>`;
    socialLinks.appendChild(socialLink);
});

//* about content
const aboutContent = {
    title: "About Me",
    description: `
      I am an aspiring Full-stack Developer and Entrepreneur, currently in my third year at KCA University, Nairobi Kenya pursuing a Bachelor of Science in Software Development. 
      I am also enrolled at the African Leadership University in Kigali Rwanda, where I study Bsc Entrepreneurial Leadership.
      <br><br>
      I have a strong passion for full-stack development and entrepreneurship, backed by hands-on experience in various programming languages and technologies. 
      I am driven to create innovative, user-centered solutions that address real-world challenges.
      <br><br>
      My mission is to transform the educational landscape for refugees and internally displaced persons in Kakuma camp. 
      I aim to build applications that expand access to education and entrepreneurial skills, empowering refugee youth to unlock their potential and create brighter futures.
      <br>
      Join me in this journey to better the lives of refugees.
    `,
    tabs: ["Skills", "Experience", "Education", "Awards"],
    contents: {
      Skills: [
        { span: "UI/UX", text: "Design Web/App Interfaces" },
        { span: "Web Development", text: "Web App Development" },
        { span: "App Development", text: "Building Android/iOS Apps" },
      ],
      Experience: [
        { span: "September 2024 - December 2024", text: "Assistant Operation Manager Intern <br> Humanity Hands - Kakuma Kenya" },
        { span: "September 2023 - December 2023", text: "IT Assistant Intern <br>Kadar Initiative for Community Empowerment - Kakuma Kenya" },
        { span: "Feburary 2020 - December 2022", text: "High School Teacher <br>Windle International Kenya - Kakuma Kenya" },
      ],
      Education: [
        { span: "2026", text: "BSc Entrepreneurial Leadership <br>African Leadership University" },
        { span: "2026", text: "BSc Software Development <br>KCAU University" },
        { span: "2019", text: "KCSE Certification <br>Busombi Muslim Mix" },
        { span: "2015", text: "KCPE Certification <br>Shambe Primary School" },
      ],
      Awards: [
        { span: "October 2024", text: "eMobilis <br>Web Development Mastercard Scholarship" },
        { span: "February 2024", text: "Power Learn Project <br>Web Development Scholarship" },
        { span: "September 2022", text: "Mastercard Foundation Scholarship <br>Undergraduate at ALU" },
        { span: "September 2022", text: "DAFI Scholarship <br>Undergraduate at KCAU University" },
      ],
    }
  };

  //* function to load about
  function renderAboutSection(data) {
    const main = document.getElementById("main");
  
    const tabsHtml = data.tabs.map((tab, i) => 
      `<p class="tab-links ${i === 0 ? "active-link" : ""}" onclick="openTab('${tab.toLowerCase()}')">${tab}</p>`
    ).join("");
  
    const contentsHtml = Object.entries(data.contents).map(([key, items], i) => {
      const listItems = items.map(item => `<li><span>${item.span}</span><br>${item.text}</li>`).join("");
      return `
        <div class="tab-contents ${i === 0 ? "active-tab" : ""}" id="${key.toLowerCase()}">
          <ul>${listItems}</ul>
        </div>
      `;
    }).join("");
  
    main.innerHTML = `
      <div id="about">
        <div class="container">
          <div class="row">
            <div class="about-col-1">
              
            </div>
            <div class="about-col-2">
              <h4 class="sub-title">${data.title}</h4>
              <p class="description">${data.description}</p>
  
              <div class="tab-titles">${tabsHtml}</div>
              ${contentsHtml}
            </div>
          </div>
        </div>
      </div>
    `;
  }
  renderAboutSection(aboutContent);

  //* Prevent copy, cut and paste
  ['copy', 'paste', 'cut'].forEach(event => {
    document.addEventListener(event, e => {
      e.preventDefault();
      alert(`The "${event}" action is disabled on this page.`);
    });
  });
    


  