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
const headerIndustries = document.querySelector('.nav_industries')
const categoryName = document.querySelector('.category_name')
const projectHead = document.querySelector('.project_head')
const projectCards = document.querySelectorAll('.project_card')

document.addEventListener('DOMContentLoaded', function(){
    animateCategoryHeads(projectHead, 3200)
    animateCategoryHeads(categoryName, 4400)
    projectCardScale()
})
// heroCta.addEventListener('click', scrollToIndustries)
headerIndustries.addEventListener('click', scrollToIndustries)
callCta.addEventListener('click', showWaitMessage)
// callCtaPopup.addEventListener('click', closeCallCtaPopup)

/* function animateSection(){
    heroSection.classList.add('activeSection')
    setTimeout(() => {
        heroCont.classList.add('text_active')
    }, 1800);
} */
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
function animateCategoryHeads(head, delay){
    setTimeout(() => {
        head.classList.add('text_active')
    }, delay);
}
function projectCardScale(){
    setTimeout(() => {
        projectCards.forEach(projectCard => {
            projectCard.classList.add('scale_project_cards')
        });
    }, 5000);
}