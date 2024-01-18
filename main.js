// AOS.init({
//     duration: 1200,
// });

// VARIABLES *****************************************
// header
const navLinks = document.querySelectorAll('.nav_links')
const industriesNavLink = document.querySelector('.nav_industries')
const keyProjectsNavLink = document.querySelector('.nav_key_projects')
const headerCallCta = document.querySelector('.call_cta')
const headerCallCtaPopup = document.querySelector('.call_cta_popup')

// hero section
const heroSection = document.querySelector('.hero')
const heroContent = document.querySelector('.hero_container')
const heroCta = document.querySelector('.hero_cta')

// industries section
const industriesSection = document.querySelector('.industries')

// key projects
const keyProjectsSection = document.querySelector('.key_projects')

// EVENT LISTENERS *****************************************
document.addEventListener('DOMContentLoaded', animateHero)
heroCta.addEventListener('click', scrollToKeyProjects)
keyProjectsNavLink.addEventListener('click', scrollToKeyProjects)
industriesNavLink.addEventListener('click', scrollToIndustries)
headerCallCta.addEventListener('click', showWaitMessage)
headerCallCtaPopup.addEventListener('click', closeheaderCallCtaPopup)

// hero section animation
function animateHero(){
    heroSection.classList.add('activeSection')
    setTimeout(() => {
        heroContent.classList.add('text_active')
    }, 1800);
}

// header cta scroll
function scrollToIndustries(){
    industriesSection.scrollIntoView()
}

// hero cta scroll
function scrollToKeyProjects(){
    keyProjectsSection.scrollIntoView()
}

// wait message on call cta click
function showWaitMessage(){
    headerCallCtaPopup.classList.add('active_flex')
}

// close wait message
function closeheaderCallCtaPopup(callClick){
    if(!(callClick.target.classList.contains('call_cta_container'))){
        headerCallCtaPopup.classList.remove('active_flex') 
    }
}