AOS.init({
    duration: 1200,
});

const heroCta = document.querySelector('.hero_cta')
const industriesSec = document.querySelector('.industries')
const callCta = document.querySelector('.call_cta')
const callCtaPopup = document.querySelector('.call_cta_popup')
const navLinks = document.querySelectorAll('.nav_links')

heroCta.addEventListener('click', scrollToIndustries)
callCta.addEventListener('click', showWaitMessage)
callCtaPopup.addEventListener('click', closeCallCtaPopup)
navLinks.forEach(navLink => {
    navLink.addEventListener('click', showWaitMessage)
});

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