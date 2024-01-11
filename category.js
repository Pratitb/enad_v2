// AOS.init({
//     duration: 1200,
// });

// variables
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
const projectsWrap = document.querySelector('.project_cards_wrap')
const projectCards = document.querySelectorAll('.project_card')
const projectCardInside = document.querySelectorAll('.project_card_inside')

// eventlisteners
document.addEventListener('DOMContentLoaded', function(){
    animateCategoryHeads(projectHead, 2500)
    animateCategoryHeads(categoryName, 3200)
    projectCardScale()
})
// heroCta.addEventListener('click', scrollToIndustries)
headerIndustries.addEventListener('click', scrollToIndustries)
callCta.addEventListener('click', showWaitMessage)
// callCtaPopup.addEventListener('click', closeCallCtaPopup)
projectCards.forEach(projectCard => {
    projectCard.addEventListener('click', function(cardClicked){
        activateProjectCard(cardClicked)
    })
});

// functions
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
        projectsWrap.style.top = '170px';
        projectsWrap.style.padding = '0 0 50px';
        projectCards.forEach(projectCard => {
            projectCard.classList.add('scale_project_cards')
        });
    }, 4000);

}
/* function flipCard(cardClicked){
    console.log(cardClicked.target);
    projectCards.forEach(projectCard => {
        projectCard.classList.add('project_card_active')
    });
} */
function activateProjectCard(cardClicked){
    let clickedCard = cardClicked.target
    let clickedCardInside = clickedCard.querySelector('.project_card_inside')
        clickedCardInside.classList.toggle('project_card_active')
        setTimeout(() => {
            clickedCardInside.classList.remove('project_card_active')
        }, 9000);

}