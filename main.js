AOS.init({
    duration: 2000,
});

const heroCta = document.querySelector('.hero_cta')
const industriesSec = document.querySelector('.industries')

heroCta.addEventListener('click', scrollToIndustries)

function scrollToIndustries(){
    industriesSec.scrollIntoView()
}