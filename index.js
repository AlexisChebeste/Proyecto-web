function toggleMenu(){
    const navButtons = document.querySelectorAll(".btn-nav");
    const navMenu = document.querySelector("nav ul");

    navButtons.forEach(element => {
        element.addEventListener("click", function(){
            console.log("click");
            navMenu.classList.toggle("active");
        });
    })
    
}

toggleMenu();

async function getServices(){
    const response = await fetch("http://localhost:3000/services");
    const services = await response.json();

    services.map(service=> createServiceItem(service.image, service.title, service.description, "Learn More" ,service.link))
}

async function getTestimonials(){
    const response = await fetch("http://localhost:3000/testimonials");
    const testimonials = await response.json();


    testimonials.map(testimonial=> createTestimonialItem(testimonial.author, testimonial.image, testimonial.area, testimonial.testimonials))
}

async function getFAQs(){
    const response = await fetch("http://localhost:3000/faqs");
    const faqs = await response.json();

    faqs.map(faq=> createFAQItem(faq.question, faq.answer))
}

async function getProjects(){
    const response = await fetch("http://localhost:3000/projects");
    const projects = await response.json();

    projects.map(project=> createProjectItem(project.image, project.title, project.category))
}

async function getTeams(){
    const response = await fetch("http://localhost:3000/teams");
    const teams = await response.json();

    teams.map(team=> createTeamItem(team.image, team.name, team.area, team.description))
}

async function getStrategys(){
    const response = await fetch("http://localhost:3000/strategys");
    const strategys = await response.json();

    strategys.map(strategy=> createStrategyItem(strategy.order ,strategy.title, strategy.description));
}

getServices();

getTestimonials();

getFAQs();

getProjects();

getTeams();

getStrategys();

function createServiceItem(imageUrl, title, description, linkText, linkHref){
    const servicesList = document.querySelector(".service-list");
    const serviceItemContainer = document.createElement("div");
    serviceItemContainer.classList.add("service-item");

    const imageElement = document.createElement("img");
    imageElement.setAttribute("src", imageUrl);
    serviceItemContainer.append(imageElement);

    const titleElement = document.createElement("h3");
    titleElement.textContent = title;
    serviceItemContainer.append(titleElement);

    const paragraph = document.createElement("p");
    paragraph.textContent = description;
    serviceItemContainer.append(paragraph);

    const link = document.createElement("a");
    link.textContent = linkText;
    link.setAttribute("href", linkHref);
    serviceItemContainer.append(link);

    servicesList.append(serviceItemContainer);
};


function createTestimonialItem(author,image, area, testimonial){
    const testimonialsList = document.querySelector(".testimonials-list");
    const testimonialsItemContainer = document.createElement("div");
    testimonialsItemContainer.classList.add("testimonials-item");

    const paragraph = document.createElement("p");
    paragraph.textContent = testimonial; 

    const testimonialAuthorContainer = document.createElement("div");
    testimonialAuthorContainer.classList.add("testimonials-author");

    const testimonialImageContainer = document.createElement("div");
    testimonialImageContainer.classList.add("image");

    const imageElement = document.createElement("img");
    imageElement.setAttribute("src", image);
    testimonialImageContainer.append(imageElement);

    const testimonialBioContainer = document.createElement("div");
    testimonialBioContainer.classList.add("bio");

    const authorElement = document.createElement("h3");
    authorElement.textContent = author;
    testimonialBioContainer.append(authorElement);

    const areaElement = document.createElement("p");
    areaElement.textContent = area;
    testimonialBioContainer.append(areaElement);

    testimonialAuthorContainer.append(testimonialImageContainer, testimonialBioContainer)
    testimonialsItemContainer.append(paragraph, testimonialAuthorContainer)

    testimonialsList.append(testimonialsItemContainer);
};

function createFAQItem(question, answer){
    const faqsList = document.querySelector(".faqs-list");
    const faqsItemContainer = document.createElement("div");
    faqsItemContainer.classList.add("faqs-item");

    const faqContainer = document.createElement("details");
    const faqsQuestion = document.createElement("summary");
    faqsQuestion.textContent = question;
    
    const faqsAnswer = document.createElement("p");
    faqsAnswer.textContent = answer;

    faqContainer.append(faqsQuestion, faqsAnswer);
    faqsItemContainer.append(faqContainer);


    faqsList.append(faqsItemContainer);
};

function createProjectItem(image, title, category){
    const projectsList = document.querySelector(".project-container");
    const projectItemContainer = document.createElement("div");
    projectItemContainer.classList.add("project-item");

    const imageElement = document.createElement("img");
    imageElement.setAttribute("src", image);
    projectItemContainer.append(imageElement);

    const titleElement = document.createElement("h3");
    titleElement.textContent = title;
    projectItemContainer.append(titleElement);

    const categoryElement = document.createElement("p");
    categoryElement.textContent = title;
    projectItemContainer.append(categoryElement);

    projectsList.append(projectItemContainer);
};

function createTeamItem(image, name, area, description){
    const teamsList = document.querySelector(".team-list");
    const teamItemContainer = document.createElement("div");
    teamItemContainer.classList.add("team-item");

    const imageElement = document.createElement("img");
    imageElement.setAttribute("src", image);
    teamItemContainer.append(imageElement);

    const nameElement = document.createElement("h3");
    nameElement.textContent = name;
    teamItemContainer.append(nameElement);

    const areaElement = document.createElement("p");
    areaElement.textContent = area;
    teamItemContainer.append(areaElement);

    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = description;
    teamItemContainer.append(descriptionElement);

    teamsList.append(teamItemContainer);
};

function createStrategyItem(order,title, description){
    const strategysList = document.querySelector(".strategy-cards-container");
    const strategyItemContainer = document.createElement("div");
    strategyItemContainer.classList.add("strategy-card");

    const orderContainer = document.createElement("div");
    orderContainer.classList.add("order");

    orderContainer.textContent = order;

    const infoContainer = document.createElement("div");
    infoContainer.classList.add("info");

    const nameElement = document.createElement("h3");
    nameElement.textContent = title;

    const areaElement = document.createElement("p");
    areaElement.textContent = description;

    infoContainer.append(nameElement, areaElement);
    strategyItemContainer.append(orderContainer, infoContainer);

    strategysList.append(strategyItemContainer);
}