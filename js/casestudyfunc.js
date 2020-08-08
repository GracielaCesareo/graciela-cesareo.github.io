

const casestudyTemplate = (casestudy) => {
    return `
    <div class="case-study">
        <div class="case-study__project">
            <p class="project-type">E-commerce</p>
            <p class="project-name">RAMONA <span>BAZARES</span></p>
        </div>
        <div class="cover-project ">
            <div class="cover-project__container row container">
                <div class="cover-project__img img-container col-xs-6">
                    <img src="${casestudy.projectimg}" alt="">
                </div>
                <div class="cover-project__details col-xs-6 row middle-xs">
                    <div class="">
                        <div class="cover-project__description">
                            <p>${casestudy.description}</p>
                        </div>
                        <div class="cover-project__set">
                            <p class="role">My role: <span>UX/UI Designer</span></p>
                            <p class="timeline">Timeline: <span>Feb 2020 - 1 week</span> </p>
                            <ul class="tools">
                                <li>Methods & Tools</li>
                                <li>Ux Research</li>
                                <li>Information Architecture</li>
                                <li>UI Design</li>
                                <li>Figma</li>
                                <li>Photoshop</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
}



// document.getElementById('case-study-header').innerHTML = `${projectsData.map(casestudyTemplate).join('')}`

const element = document.getElementById('case-study-header');
console.log(element);