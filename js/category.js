// VARIABLES ***********************************************************
// industries
const industriesSec = document.querySelector('.industries')

// header
const callCta = document.querySelector('.call_cta')
const callCtaPopup = document.querySelector('.call_cta_popup')
const navLinks = document.querySelectorAll('.nav_links')
const headerIndustries = document.querySelector('.nav_industries')

// category container
const categoryName = document.querySelector('.category_name')
const projectHead = document.querySelector('.project_head')
const projectsWrap = document.querySelectorAll('.project_cards_wrap')
const projectCards = document.querySelectorAll('.project_card')
const projectCardInside = document.querySelectorAll('.project_card_inside')
const industryTab = document.querySelectorAll('.industry_tab')

// EVENTLISTENERS ***********************************************************
// on load
document.addEventListener('DOMContentLoaded', function(){
    // animateCategoryHeads(projectHead, 1500)
    animateCategoryHeads(categoryName, 1500)
    projectCardScale()
})
// header
callCta.addEventListener('click', showWaitMessage)
callCtaPopup.addEventListener('click', closeCallCtaPopup)
// project cards
projectCards.forEach(projectCard => {
    projectCard.addEventListener('click', function(cardClicked){
        activateProjectCard(cardClicked)
    })
});
industryTab.forEach((indusTab) => {
    indusTab.addEventListener('click', changeProjects)
})

// FUNCTIONS ***********************************************************
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
        projectsWrap.forEach((projectWrap) => {
            projectWrap.classList.add('project_wrap_position')
        })
        projectCards.forEach(projectCard => {
            projectCard.classList.add('scale_project_cards')
        });
        industryTab.forEach((industryTab3) => {
            industryTab3.classList.add('scale_project_cards')
        })
    }, 2000);

}
function activateProjectCard(cardClicked){
    let clickedCard = cardClicked.target
    let clickedCardInside = clickedCard.querySelector('.project_card_inside')
        clickedCardInside.classList.toggle('project_card_active')
        setTimeout(() => {
            clickedCardInside.classList.remove('project_card_active')
        }, 9000);

}
function changeProjects(tabElement){
    industryTab.forEach((industryTab2) => {
        industryTab2.classList.remove('industryTabActive')
        findClickedTab(tabElement)
    })
}
function findClickedTab(tabElement){
    let clickedTab = tabElement.currentTarget
        clickedTab.classList.add('industryTabActive')

    let clickedTabName = clickedTab.dataset.name
        // console.log(clickedTabName);
        showClickedTabProjects(clickedTabName)
}
function showClickedTabProjects(clickedTabName){
    projectsWrap.forEach((project) => {
        if(project.dataset.name == clickedTabName){
            if(!(project.classList.contains('project_wrap_active'))){
                project.classList.add('project_wrap_active')
            }
            else{
                return false;
            }
        }
        else{
            project.classList.remove('project_wrap_active')
        }
    })
}