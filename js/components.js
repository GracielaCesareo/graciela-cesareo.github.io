const Components = {

    loadPage: () => {
        document.addEventListener('DOMContentLoaded', function() {
            const button = document.querySelector('.backtotop__button');
            let totalComponentsHeight;
            let realHeightScroll;


            buttonTopBehaviour();
            return console.log('the scroll height is ' + document.body.clientHeight)

        });
    },

    /* Components height  to show button go to the top */
    buttonTopBehaviour: () => {
        const headerCompHeight = document.querySelector('#headerComponent').offsetHeight
        const scrollBar        = document.querySelector('#scrollBarContainer').offsetHeight
        const titleProject     = document.querySelector('.case-study__project').clientHeight
        const coverProject     = document.querySelector('.cover-project').offsetHeight
        const firstTitle       = document.querySelector('.case-study-container .title').offsetHeight
        const firstTextBlock   = document.querySelector('.case-study-container .case-study__text-block').offsetHeight

        totalComponentsHeight = headerCompHeight + scrollBar + titleProject + coverProject + firstTitle + firstTextBlock

        return totalComponentsHeight
    },

    stickyButton: () => {

        const footerHeight  = document.querySelector('.comp-footer').offsetHeight
        let bodyScroll      = window.outerHeight
        let windowScrollTop = document.body.scrollTop || document.documentElement.scrollTop

        totalHeightScrollable = bodyScroll  - footerHeight;
        realHeightScroll      = totalHeightScrollable - windowScrollTop

        return totalHeightScrollable
    },

    /* Component progress in case study*/ 
    progressCaseStudy: () => {

        const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const heightContainer = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        let scrolled = (windowScroll / heightContainer) * 100;

        document.getElementById('scrollBar').style.width = scrolled + '%';

        const scrollBarContainer = document.getElementById('scrollBarContainer');

        window.pageYOffset > 63 ? scrollBarContainer.classList.add('progress-scroll__container--visible') : scrollBarContainer.classList.remove('progress-scroll__container--visible')

        Components.stickyHeader();

    },

    /* Header sticky triggered by scroll */
    stickyHeader: () => {
        Components.buttonTopBehaviour ();

        const button = document.querySelector('.backtotop__button')

        const header = document.getElementById("headerComponent");
        const sticky = header.offsetTop;

        window.pageYOffset > sticky ?  header.classList.add("header--fixed") : header.classList.remove("header--fixed");

        let scrollDocument = document.body.scrollTop || document.documentElement.scrollTop;

        scrollDocument > totalComponentsHeight
        ? buttonToTop.classList.add('--visible')
        : buttonToTop.classList.remove('--visible')

        return
    },

    scrollToTop: () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    },






};