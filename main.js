// AOS.init({
//     duration: 1200,
// });

const heroSection = document.querySelector('.hero')
const heroCont = document.querySelector('.hero_container')
const heroCta = document.querySelector('.hero_cta')
const industriesSec = document.querySelector('.industries')
const callCta = document.querySelector('.call_cta')
const callCtaPopup = document.querySelector('.call_cta_popup')
const navLinks = document.querySelectorAll('.nav_links')

document.addEventListener('DOMContentLoaded', animateHero)
heroCta.addEventListener('click', scrollToIndustries)
callCta.addEventListener('click', showWaitMessage)
callCtaPopup.addEventListener('click', closeCallCtaPopup)
/* navLinks.forEach(navLink => {
    navLink.addEventListener('click', showWaitMessage)
}); */

function animateHero(){
    heroSection.classList.add('activeSection')
    setTimeout(() => {
        heroCont.classList.add('text_active')
    }, 1800);
}
function scrollToIndustries(){
    industriesSec.scrollIntoView()
}
function showWaitMessage(){
    callCtaPopup.classList.add('active_flex')
}
function closeCallCtaPopup(callClick){
    if(!(callClick.target.classList.contains('call_cta_container'))){
        callCtaPopup.classList.remove('active_flex') 
    }
}