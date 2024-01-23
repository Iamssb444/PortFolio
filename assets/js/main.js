/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 

const tabs = document.querySelectorAll('.card_tab_button');
const allContent = document.querySelectorAll('.card_content');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', (e)=> {
        tabs.forEach(tab => {tab.classList.remove('active')});
        tab.classList.add('active');

        var line = document.querySelector('.card_line');
        line.style.width = e.target.offsetWidth + "px";
        line.style.left = e.target.offsetLeft + "px";
        
        allContent.forEach(content => content.classList.remove('active'));
        allContent[index].classList.add('active');

    })

})


document.addEventListener("DOMContentLoaded", function () {
    var container = document.getElementById("skillsList_Programming");

    // Updated data for each skill (name, logo URL)
    var skillsData = [
        { name: "Java", logo: "java-logo.png", rating: 5 },
        { name: "Python", logo: "Python-logo-notext.svg.png", rating: 5}
    ];

    function createSkillBox(name, logo, rating) {
        var box = document.createElement("div");
        box.className = "col-md-2 mb-3 animate__animated animate__bounceIn";
        box.innerHTML = `
    <div class="skill-box">
        <img class="box-logo" src="assets/img/${logo}" alt="${name}">
        <div class="box-name">
        <p class="">${name}</p>
        <p class="stars">
            ${Array.from({ length: rating }, (_, index) => `<i class="fa fa-star"></i>`).join("")}
        </p>
        </div>
    </div>`;
        container.appendChild(box);
    }

    // Create skill boxes with animation
    skillsData.forEach((skill, index) => {
        setTimeout(() => {
            createSkillBox(skill.name, skill.logo, skill.rating);
        }, index * 100); // Delay each box by 200 milliseconds
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var container = document.getElementById("skillsList_WebDevelopment");

    // Updated data for each skill (name, logo URL)
    var skillsData = [
        { name: "HTML", logo: "html-logo.png", rating: 5 },
        { name: "CSS", logo: "css-logo.png", rating: 5 },
        { name: "JavaScript", logo: "java-script-logo.png", rating: 5 },
        { name: "React", logo: "1611079.png", rating: 4 }
    ];

    function createSkillBox(name, logo, rating) {
        var box = document.createElement("div");
        box.className = "col-md-2 mb-3 animate__animated animate__bounceIn";
        box.innerHTML = `
    <div class="skill-box">
        <img class="box-logo" src="assets/img/${logo}" alt="${name}">
        <div class="box-name">
        <p class="">${name}</p>
        <p class="stars">
            ${Array.from({ length: rating }, (_, index) => `<i class="fa fa-star"></i>`).join("")}
        </p>
        </div>
    </div>`;
        container.appendChild(box);
    }

    // Create skill boxes with animation
    skillsData.forEach((skill, index) => {
        setTimeout(() => {
            createSkillBox(skill.name, skill.logo, skill.rating);
        }, index * 100); // Delay each box by 200 milliseconds
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var container = document.getElementById("skillsList_Database");

    // Updated data for each skill (name, logo URL)
    var skillsData = [
        { name: "MySQL", logo: "mysql-logo.png", rating: 5 },
        { name: "PostgreSQL", logo: "postgresql-logo.png", rating: 5 },
        { name: "Couchbase", logo: "couchbase-logo.png", rating: 5 },
        { name: "Oracle DB", logo: "OracleDB.png", rating: 5}
    ];

    function createSkillBox(name, logo, rating) {
        var box = document.createElement("div");
        box.className = "col-md-2 mb-3 animate__animated animate__bounceIn";
        box.innerHTML = `
    <div class="skill-box">
        <img class="box-logo" src="assets/img/${logo}" alt="${name}">
        <div class="box-name">
        <p class="">${name}</p>
        <p class="stars">
            ${Array.from({ length: rating }, (_, index) => `<i class="fa fa-star"></i>`).join("")}
        </p>
        </div>
    </div>`;
        container.appendChild(box);
    }

    // Create skill boxes with animation
    skillsData.forEach((skill, index) => {
        setTimeout(() => {
            createSkillBox(skill.name, skill.logo, skill.rating);
        }, index * 100); // Delay each box by 200 milliseconds
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var container = document.getElementById("skillsList_DevOps");

    // Updated data for each skill (name, logo URL)
    var skillsData = [
        { name: "Jenkins", logo: "jenkins-logo.png", rating: 5 },
        { name: "Docker", logo: "docker-logo.png", rating: 4 },
        { name: "Microservices", logo: "microservice-logo.jpg", rating: 4 },
        { name: "Kubernetes", logo: "Kubernetes-Logo.png", rating: 4}
    ];

    function createSkillBox(name, logo, rating) {
        var box = document.createElement("div");
        box.className = "col-md-2 mb-3 animate__animated animate__bounceIn";
        box.innerHTML = `
    <div class="skill-box">
        <img class="box-logo" src="assets/img/${logo}" alt="${name}">
        <div class="box-name">
        <p class="">${name}</p>
        <p class="stars">
            ${Array.from({ length: rating }, (_, index) => `<i class="fa fa-star"></i>`).join("")}
        </p>
        </div>
    </div>`;
        container.appendChild(box);
    }

    // Create skill boxes with animation
    skillsData.forEach((skill, index) => {
        setTimeout(() => {
            createSkillBox(skill.name, skill.logo, skill.rating);
        }, index * 100); // Delay each box by 200 milliseconds
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var container = document.getElementById("skillsList_Additional");

    // Updated data for each skill (name, logo URL)
    var skillsData = [
        { name: "Spring Boot", logo: "spring-boot-logo.png", rating: 5 },
        { name: "GRPC", logo: "grpc-logo.png", rating: 5 },
        { name: "Kafka", logo: "kafka-logo.png", rating: 5 },
        { name: "Jira", logo: "jira-logo.png", rating: 5 },
        { name: "BitBucket", logo: "bitbucket-logo.png", rating: 5 },
        { name: "Kibana", logo: "kibana-logo.png", rating: 4 },
        { name: "SonarQube", logo: "sonarqube-logo.png", rating: 5 },
        { name: "Git", logo: "Git-logo.svg.png", rating: 4},
        { name: "RESTAPI", logo: "RESTAPI.png", rating: 3}
    ];

    function createSkillBox(name, logo, rating) {
        var box = document.createElement("div");
        box.className = "col-md-2 mb-3 animate__animated animate__bounceIn";
        box.innerHTML = `
    <div class="skill-box">
        <img class="box-logo" src="assets/img/${logo}" alt="${name}">
        <div class="box-name">
        <p class="">${name}</p>
        <p class="stars">
            ${Array.from({ length: rating }, (_, index) => `<i class="fa fa-star"></i>`).join("")}
        </p>
        </div>
    </div>`;
        container.appendChild(box);
    }

    // Create skill boxes with animation
    skillsData.forEach((skill, index) => {
        setTimeout(() => {
            createSkillBox(skill.name, skill.logo, skill.rating);
        }, index * 100); // Delay each box by 200 milliseconds
    });
});