import projectsData from './data.js';

// Function card template

const cardTemplate = (card) => {
    return `
            <div class="card col-xs-12 col-sm-6 row middle-xs box-row">
                <div class="card__img img-container" style="background-color: ${card.background}; background-image: url(${card.image})"></div>
                <div class="card__description">
                    <p class="card__index row end-xs">${card.index}</p>
                    <p class="card__project">${card.project}</p>
                    <p class="card__title">${card.title}</p>
                    <p class="card__text">${card.text}</p>
                    <a href="${card.link}" class="card__button button">View case study</a>
                </div>
            </div>
            `
}

document.getElementById('cards').innerHTML = `${projectsData.map(cardTemplate).join('')}`

// Smooth scroll on link elements
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});