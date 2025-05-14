//* Variable Declaration

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
        }, 2000)
        form.reset() //* clear the input fields
    })
    .catch(error => console.error('Error!', error.message))
})

//* see more portfolio button
let currenVisible = 3;
let isExpanded = false;

function togglePortfolio(){
    const works = document.querySelectorAll(".work-item");
    const btn = document.getElementById("see-more-btn");

    if(!isExpanded){
        for (let i = currenVisible; i < works.length; i++) {
            works[i].style.display = "block";
        }
        btn.textContent = "Show Less";
        isExpanded = true;
    }
    else{
        works.forEach((item, index) => {
            item.style.display = index < 3 ? "block" : "none";
        });
        btn.textContent = "Show More";
        isExpanded = false;
    }
}

 //* Initial load for small screens
 function initPortfolioDisplay() {
    const works = document.querySelectorAll(".work-item");
    const btn = document.getElementById("see-more-btn");

    if (window.innerWidth <= 480) {
      works.forEach((item, index) => {
        item.style.display = index < 3 ? "block" : "none";
      });
      btn.style.display = "inline-block";
      btn.textContent = "Show More";
      currenVisible = 3;
      isExpanded = false;
    } else {
      works.forEach(item => item.style.display = "block");
    }
  }

  window.addEventListener("load", initPortfolioDisplay);
  window.addEventListener("resize", initPortfolioDisplay);

  //* Portfolio work
  const workServices = [

    {
        img: "media/doctor.png",
        title: "MedEase",
        description: "A Web based application that allow Kakuma residents to book medication queue online",
        link: "https://github.com/kukuabassanimeri/MedEase.git",
    },

    {
        img: "media/latjor.jpeg",
        title: "Portfolio",
        description: "A portfolio for Latjor Woum Lat to showcase his work and aspiration.",
        link: "https://abasskuku319.wixsite.com/latjorwuon",
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
        title: "Lets-Educate-Kakuma",
        description: "Django app for Kakuma residents to access scholarship opportunities",
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