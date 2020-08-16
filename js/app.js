import projectsData from './data.js';

// Function card template

const cardTemplate = (card) => {
    return `
            <div class="card col-xs-12 col-sm-6 row middle-xs box-row wow animated animate__fadeInUp" data-wow-duration="1s">
                <div class="card__img img-container" style="background-color: ${card.background}; background-image: url(${card.image})"></div>
                <div class="card__description">
                    <p class="card__title">${card.title}</p>
                    <p class="card__project">${card.project}</p>
                    <p class="card__text">${card.text}</p>
                    <a href="${card.link}" class="card__button button">View project</a>
                </div>
            </div>
            `
}

document.getElementById('cards').innerHTML = `${projectsData.map(cardTemplate).join('')}`

// Smooth scroll on link elements
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
        });
    });
});

const stickyHeader  = () => {
    const header = document.getElementById("headerComponent");
    const sticky = header.offsetTop;

    window.pageYOffset > sticky ?  header.classList.add("header--fixed") : header.classList.remove("header--fixed");

    return
}

window.addEventListener('scroll', stickyHeader)

window.addEventListener('scroll', new WOW().init())

new WOW().init();
VANTA.NET({
    el: "#heroBack",
    mouseControls: true,
    touchControls: true,
    minHeight: 200.00,
    minWidth: 200.00,
    backgroundColor: 0x142340,
    scale: 1.00,
    scaleMobile: 1.00,
    points: 10.00,
    spacing: 14.00,
    showDots: false
});


